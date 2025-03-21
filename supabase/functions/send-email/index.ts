
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

// Updated CORS headers to allow your domain
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // For now allow all origins, can be restricted to 'https://vinligna.com' later
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // 24 hours cache for preflight requests
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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("Handling CORS preflight request");
    return new Response(null, { 
      headers: corsHeaders,
      status: 204,
    });
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    console.log(`Method not allowed: ${req.method}`);
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      }
    );
  }

  try {
    // Parse request body
    const contentType = req.headers.get("content-type") || "";
    
    if (!contentType.includes("application/json")) {
      console.log(`Invalid content type: ${contentType}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "InvalidContentType: Content-Type must be application/json" 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400, 
        }
      );
    }
    
    const data = await req.json() as EmailData;
    console.log("Received data:", data);
    
    // Validate required fields
    if (!data.name || !data.email || !data.interesse || !data.nachricht) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields",
          requiredFields: ['name', 'email', 'interesse', 'nachricht'] 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400, 
        }
      );
    }

    // Format the interest value
    let formattedInterest = data.interesse;
    switch (data.interesse) {
      case 'business': formattedInterest = 'Businesslösungen'; break;
      case 'private': formattedInterest = 'Privatkollektion'; break;
      case 'consultation': formattedInterest = 'Designberatung'; break;
      case 'other': formattedInterest = 'Andere Anfrage'; break;
    }

    // Prepare email content
    const subject = `Neue Nachricht von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`;
    const messageBody = `
Neue Nachricht über das Kontaktformular:
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.telefon || "Nicht angegeben"}
Interesse: ${formattedInterest}
Nachricht:
${data.nachricht}

Formular: ${data.formSource || "Nicht angegeben"}
Zeitstempel: ${new Date().toLocaleString("de-DE")}
`;

    // Configure SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.ionos.de",
        port: 587,
        tls: true,
        auth: {
          username: Deno.env.get("SMTP_USERNAME") || "info@vinligna.com",
          password: Deno.env.get("SMTP_PASSWORD") || "",
        },
      },
    });

    try {
      // Send email
      console.log("Attempting to send email via SMTP");
      await client.send({
        from: "info@vinligna.com",
        to: "info@vinligna.com",
        bcc: "info@ooliv.de",
        subject: subject,
        content: messageBody,
      });
      
      console.log("Email sent successfully");
      
      // Create direct mailto link as fallback
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(messageBody);
      const mailtoLink = `mailto:info@vinligna.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      return new Response(
        JSON.stringify({
          success: true,
          message: "Email sent successfully",
          mailtoLink: mailtoLink
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    } catch (smtpError) {
      console.error("SMTP error:", smtpError);
      
      // Create direct mailto link as fallback on SMTP failure
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(messageBody);
      const mailtoLink = `mailto:info@vinligna.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      return new Response(
        JSON.stringify({
          success: false,
          error: `SMTP Error: ${smtpError.message || "Unknown SMTP error"}`,
          mailtoLink: mailtoLink
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("General error:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
