
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// Simplified CORS headers with everything needed for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
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
      
      // Log exact SMTP username value (without logging the password)
      console.log(`SMTP username exact value: "${smtpUsername}"`);
      
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
      
      // Prepare both email templates
      const adminEmailHtml = createAdminEmailTemplate(data, formattedInterest);
      const userEmailHtml = createUserEmailTemplate(data);
      
      console.log("SMTP connection configured, sending admin email...");
      
      // 1. Send notification email to admin
      await client.send({
        from: smtpUsername, // Use the exact username as the from address
        to: smtpUsername,   // Send to the same address
        subject: `Neue Nachricht von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`,
        content: "",
        html: adminEmailHtml,
      });
      
      console.log("Admin email sent successfully");
      
      // 2. Send confirmation email to the user
      console.log(`Sending confirmation email to user: ${data.email}`);
      await client.send({
        from: smtpUsername,
        to: data.email,
        subject: "Vielen Dank für Ihre Nachricht an VINLIGNA",
        content: "",
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

// Format interest selection for display
function formatInterest(interesse: string): string {
  switch (interesse) {
    case 'business': return 'Businesslösungen';
    case 'private': return 'Privatkollektion';
    case 'consultation': return 'Designberatung';
    case 'other': return 'Andere Anfrage';
    default: return interesse;
  }
}

// Helper function to create mailto link
function createMailtoLink(data: EmailData): string {
  // Format the interest value for the email
  let formattedInterest = formatInterest(data.interesse);

  const subject = encodeURIComponent(`Neue Nachricht von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`);
  const body = encodeURIComponent(`
Neue Nachricht über das Kontaktformular:
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.telefon || "Nicht angegeben"}
Interesse: ${formattedInterest}
Nachricht:
${data.nachricht}

Formular: ${data.formSource || "Nicht angegeben"}
Zeitstempel: ${new Date().toLocaleString("de-DE")}
`);
  
  return `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
}

// Create HTML template for admin email
function createAdminEmailTemplate(data: EmailData, formattedInterest: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neue Nachricht von ${data.name}</title>
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333333;
        background-color: #EDE0D4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid #5C3B2E;
      }
      .header img {
        max-width: 200px;
      }
      h1 {
        color: #5C3B2E;
        font-size: 22px;
        font-weight: 600;
        margin-top: 0;
      }
      .message-details {
        background-color: #f9f5f0;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 20px;
        border-left: 4px solid #5C3B2E;
      }
      .field {
        margin-bottom: 10px;
      }
      .field strong {
        color: #5C3B2E;
      }
      .message-content {
        background-color: #f9f5f0;
        padding: 15px;
        border-radius: 5px;
        white-space: pre-wrap;
        margin-top: 5px;
      }
      .timestamp {
        font-size: 12px;
        color: #888888;
        text-align: right;
        margin-top: 20px;
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
        color: #888888;
      }
      .reply-btn {
        display: inline-block;
        background-color: #5C3B2E;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        margin-top: 15px;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Neue Nachricht über VINLIGNA Kontaktformular</h1>
      </div>
      
      <div class="message-details">
        <div class="field">
          <strong>Name:</strong> ${data.name}
        </div>
        <div class="field">
          <strong>E-Mail:</strong> ${data.email}
        </div>
        <div class="field">
          <strong>Telefon:</strong> ${data.telefon || "Nicht angegeben"}
        </div>
        <div class="field">
          <strong>Interesse:</strong> ${formattedInterest}
        </div>
        <div class="field">
          <strong>Formular:</strong> ${data.formSource || "Nicht angegeben"}
        </div>
      </div>
      
      <div class="field">
        <strong>Nachricht:</strong>
        <div class="message-content">${data.nachricht}</div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}?subject=RE: Ihre Anfrage an VINLIGNA" class="reply-btn">Antworten</a>
      </div>
      
      <div class="timestamp">
        Zeitstempel: ${new Date().toLocaleString("de-DE")}
      </div>
      
      <div class="footer">
        VINLIGNA | Hochwertige Weinkisten & Einrichtungsgegenstände aus Eichenholz
      </div>
    </div>
  </body>
  </html>
  `;
}

// Create HTML template for user confirmation email
function createUserEmailTemplate(data: EmailData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vielen Dank für Ihre Nachricht an VINLIGNA</title>
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333333;
        background-color: #EDE0D4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid #5C3B2E;
      }
      .header img {
        max-width: 200px;
      }
      h1, h2 {
        color: #5C3B2E;
        font-weight: 600;
      }
      h1 {
        font-size: 24px;
        margin-top: 0;
      }
      h2 {
        font-size: 20px;
        margin-top: 0;
      }
      p {
        margin-bottom: 15px;
      }
      .message-preview {
        background-color: #f9f5f0;
        padding: 15px;
        border-radius: 5px;
        margin: 15px 0;
        border-left: 4px solid #5C3B2E;
        font-style: italic;
        white-space: pre-wrap;
      }
      .footer {
        margin-top: 30px;
        padding-top: 15px;
        border-top: 1px solid #EDE0D4;
        text-align: center;
        font-size: 12px;
        color: #888888;
      }
      .signature {
        margin-top: 25px;
      }
      .contact-details {
        margin-top: 20px;
        font-size: 14px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>VINLIGNA</h1>
      </div>
      
      <h2>Vielen Dank für Ihre Nachricht</h2>
      
      <p>Lieber ${data.name},</p>
      
      <p>vielen Dank für Ihre Anfrage über unser Kontaktformular. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
      
      <p><strong>Ihre Nachricht:</strong></p>
      <div class="message-preview">${data.nachricht}</div>
      
      <div class="signature">
        <p>Mit herzlichen Grüßen,<br>Ihr VINLIGNA Team</p>
      </div>
      
      <div class="contact-details">
        VINLIGNA<br>
        E-Mail: info@vinligna.com<br>
        Web: www.vinligna.com
      </div>
      
      <div class="footer">
        Hochwertige Weinkisten & Einrichtungsgegenstände aus Eichenholz
      </div>
    </div>
  </body>
  </html>
  `;
}
