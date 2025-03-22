
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createAdminEmailTemplate, createUserEmailTemplate } from "./templates.ts";
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
      const userEmailHtml = createUserEmailTemplate(data);
      
      console.log("SMTP connection configured, sending admin email...");
      
      // 1. Send notification email to admin
      await client.send({
        from: smtpUsername, // Use the exact username as the from address
        to: smtpUsername,   // Send to the same address
        replyTo: data.email, // Add reply-to header pointing to the user's email address
        subject: `Neue Nachricht von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`,
        html: adminEmailHtml,
      });
      
      console.log("Admin email sent successfully");
      
      // 2. Send confirmation email to the user
      console.log(`Sending confirmation email to user: ${data.email}`);
      await client.send({
        from: smtpUsername,
        to: data.email,
        subject: "Vielen Dank für Ihre Nachricht an VINLIGNA",
        html: userEmailHtml,
      });
      
      console.log("User confirmation email sent successfully");
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
      
      // Create a more detailed error response
      const errorDetails = {
        message: smtpError.message,
        type: smtpError.name,
        stack: smtpError.stack,
        envVars: {
          smtpUsernameAvailable: !!Deno.env.get("SMTP_USERNAME"),
          smtpPasswordAvailable: !!Deno.env.get("SMTP_PASSWORD")
        }
      };
      
      return new Response(
        JSON.stringify({
          success: false,
          error: `SMTP Error: ${smtpError.message || "Unknown SMTP error"}`,
          details: errorDetails,
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
