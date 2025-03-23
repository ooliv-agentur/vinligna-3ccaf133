import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { 
  createAdminEmailTemplate, 
  createUserEmailTemplate,
  createAdminPlaintextTemplate,
  createUserPlaintextTemplate
} from "./templates.ts";
import { formatInterest, createMailtoLink } from "./utils.ts";

// Simplified CORS headers with everything needed for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json'
};

interface EmailData {
  name: string;
  email: string;
  telefon?: string;
  interesse: string;
  nachricht: string;
  formSource?: string;
}

serve(async (req) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Handle CORS preflight requests - this is critical
  if (req.method === 'OPTIONS') {
    console.log("Handling CORS preflight request");
    return new Response(null, { 
      headers: corsHeaders,
      status: 204 // No Content is the correct response for OPTIONS
    });
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    console.log(`Method not allowed: ${req.method}`);
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      { 
        headers: corsHeaders,
        status: 405,
      }
    );
  }

  try {
    // Parse request body
    const data = await req.json() as EmailData;
    console.log("Received data:", data);
    
    // Validate required fields
    if (!data.name || !data.email || !data.interesse || !data.nachricht) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields",
          requiredFields: ['name', 'email', 'interesse', 'nachricht'],
          mailtoLink: createMailtoLink(data)
        }),
        { 
          headers: corsHeaders,
          status: 400, 
        }
      );
    }

    // Format the interest value
    let formattedInterest = formatInterest(data.interesse);

    // Create direct mailto link as fallback
    const mailtoLink = createMailtoLink(data);

    try {
      // Get SMTP credentials from environment variables
      const smtpUsername = Deno.env.get("SMTP_USERNAME");
      const smtpPassword = Deno.env.get("SMTP_PASSWORD");
      
      // Log environment variables for debugging
      console.log(`Environment variables available: ${Object.keys(Deno.env.toObject()).join(', ')}`);
      console.log(`SMTP username available: ${!!smtpUsername}`);
      console.log(`SMTP password available: ${!!smtpPassword}`);
      
      if (!smtpUsername || !smtpPassword) {
        throw new Error("SMTP credentials are not configured in environment variables");
      }
      
      // Configure SMTP client with denomailer
      console.log("Configuring SMTP client with hostname: smtp.ionos.de, port: 465, TLS: enabled");
      const client = new SMTPClient({
        connection: {
          hostname: "smtp.ionos.de",
          port: 465,
          tls: true,
          auth: {
            username: smtpUsername,
            password: smtpPassword,
          },
          debug: true, // Enable debug mode for more detailed logs
        }
      });
      
      // Get current timestamp
      const timestamp = new Date().toLocaleString("de-DE");
      
      // Prepare both email templates
      const adminEmailHtml = createAdminEmailTemplate(data, formattedInterest, timestamp);
      const adminEmailText = createAdminPlaintextTemplate(data, formattedInterest, timestamp);
      const userEmailHtml = createUserEmailTemplate(data);
      const userEmailText = createUserPlaintextTemplate(data);
      
      console.log("SMTP connection configured, sending admin email...");
      
      // Set up the sender display name
      const fromAddress = `"VINLIGNA – Kontaktformular" <${smtpUsername}>`;
      const formSource = data.formSource ? ` über ${data.formSource}` : '';
      const emailSubject = `Neue Nachricht von ${data.name}${formSource}`;
      
      // 1. Send notification email to admin
      try {
        await client.send({
          from: fromAddress,
          to: smtpUsername,   // Send to the same address
          replyTo: data.email, // Add reply-to header pointing to the user's email address
          subject: emailSubject,
          html: adminEmailHtml,
          text: adminEmailText, // Plain text alternative
          contentType: "text/html; charset=utf-8",  // Explicitly set UTF-8 charset
          encoding: "8bit"  // Use 8-bit encoding instead of quoted-printable
        });
        
        console.log("Admin email sent successfully");
      } catch (adminEmailError) {
        console.error("Error sending admin email:", adminEmailError);
        // Continue to user email even if admin email fails
      }
      
      // 2. Send confirmation email to the user
      try {
        console.log(`Sending confirmation email to user: ${data.email}`);
        await client.send({
          from: fromAddress,
          to: data.email,
          subject: "Vielen Dank für Ihre Nachricht an VINLIGNA",
          html: userEmailHtml,
          text: userEmailText, // Plain text alternative
          contentType: "text/html; charset=utf-8",  // Explicitly set UTF-8 charset
          encoding: "8bit"  // Use 8-bit encoding instead of quoted-printable
        });
        
        console.log("User confirmation email sent successfully");
      } catch (userEmailError) {
        console.error("Error sending user email:", userEmailError);
        // If user email fails but we sent the admin one, still consider it a partial success
      }
      
      await client.close();
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Emails sent successfully",
          mailtoLink: mailtoLink
        }),
        {
          headers: corsHeaders,
          status: 200,
        }
      );
    } catch (smtpError) {
      console.error("SMTP error details:", smtpError);
      console.error("SMTP error message:", smtpError.message);
      console.error("SMTP error stack:", smtpError.stack);
      
      // Check for specific SMTP errors
      let errorMessage = smtpError.message || "Unknown SMTP error";
      let errorCode = "SMTP_ERROR";
      
      // Handle specific error codes
      if (errorMessage.includes("450: Requested mail action not taken: mailbox unavailable") || 
          errorMessage.includes("Mail send limit exceeded")) {
        errorCode = "MAIL_LIMIT_EXCEEDED";
        errorMessage = "E-Mail-Limit überschritten. Bitte nutzen Sie die direkte E-Mail-Option.";
      }
      
      return new Response(
        JSON.stringify({
          success: false,
          error: errorMessage,
          errorCode: errorCode,
          mailtoLink: mailtoLink
        }),
        {
          headers: corsHeaders,
          status: 200, // Return 200 to client even with SMTP error, with mailtoLink as fallback
        }
      );
    }
  } catch (error) {
    console.error("General error:", error);
    
    // Create a generic mailto link as fallback
    const genericMailto = "mailto:info@vinligna.com?subject=Kontaktanfrage&body=Bitte%20geben%20Sie%20Ihre%20Nachricht%20ein.";
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
        mailtoLink: genericMailto
      }),
      {
        headers: corsHeaders,
        status: 500,
      }
    );
  }
});
