
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
        content: "",
        html: adminEmailHtml,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Transfer-Encoding": "8bit"
        }
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
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Transfer-Encoding": "8bit"
        }
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

// Create HTML template for admin email using the provided template
function createAdminEmailTemplate(data: EmailData, formattedInterest: string, timestamp: string): string {
  // Format the message with proper line breaks for HTML
  const formattedMessage = data.nachricht.replace(/\n/g, '<br>');
  
  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>VINLIGNA Kontaktformular</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <meta name="description" content="Neue Kontaktanfrage von ${data.name} - ${formattedInterest}">
    <meta name="x-apple-disable-message-reformatting">
    <style>
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color:#EDE0D4; color:#2C2C2C;">
    <!-- Preview text for email clients -->
    <span style="display:none; color:transparent; height:0; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all; visibility:hidden; width:0;">
      Neue Nachricht von ${data.name} über das VINLIGNA Kontaktformular - ${formattedInterest}
    </span>
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDE0D4; padding: 40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);" class="container">
            <tr>
              <td style="background-color: #5C3B2E; color: white; padding: 24px; text-align: center;">
                <img src="https://vinligna.com/VINLIGNA%20Logo@2x.png" alt="VINLIGNA" width="160" style="display:block; margin:0 auto;">
                <p style="margin: 10px 0 0;">Tradition in zeitlose Eleganz verwandeln</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <h2 style="color: #5C3B2E; font-size: 20px; margin-bottom: 24px;">
                  Neue Nachricht über das VINLIGNA Kontaktformular
                </h2>

                <table cellpadding="6" cellspacing="0" style="width:100%; margin-bottom: 24px;">
                  <tr>
                    <td style="font-weight:bold; width: 120px;">Name:</td>
                    <td>${data.name}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold;">E-Mail:</td>
                    <td><a href="mailto:${data.email}" style="color:#D96B37;">${data.email}</a></td>
                  </tr>
                  ${data.telefon ? `
                  <tr>
                    <td style="font-weight:bold;">Telefon:</td>
                    <td>${data.telefon}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="font-weight:bold;">Interesse:</td>
                    <td>${formattedInterest}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:bold;">Formular:</td>
                    <td>${data.formSource || "Nicht angegeben"}</td>
                  </tr>
                </table>

                <h3 style="color:#5C3B2E;">Nachricht:</h3>
                <div style="background-color:#F9F6F3; padding: 16px; border-left: 4px solid #5C3B2E; margin-top: 8px; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%;">
                  ${formattedMessage}
                </div>

                <div style="margin-top: 32px; text-align: center;">
                  <a href="mailto:${data.email}" style="background-color:#5C3B2E; color:white; text-decoration:none; padding: 12px 24px; border-radius: 6px; font-weight:bold; display:inline-block;">
                    Antworten
                  </a>
                </div>

                <p style="font-size:12px; color:#888; margin-top: 40px; text-align:right;">
                  Zeitstempel: ${timestamp}
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#666;">
                VINLIGNA | Hochwertige Fassmöbel aus recycelten Weinfässern
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

// Create HTML template for user confirmation email using the provided template
function createUserEmailTemplate(data: EmailData): string {
  // Format the message with proper line breaks for HTML
  const formattedMessage = data.nachricht.replace(/\n/g, '<br>');
  
  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Vielen Dank für Ihre Nachricht</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <meta name="description" content="Vielen Dank für Ihre Anfrage bei VINLIGNA - Wir werden uns bald bei Ihnen melden">
    <meta name="x-apple-disable-message-reformatting">
    <style>
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color:#EDE0D4; color:#2C2C2C;">
    <!-- Preview text for email clients -->
    <span style="display:none; color:transparent; height:0; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all; visibility:hidden; width:0;">
      Vielen Dank für Ihre Nachricht an VINLIGNA. Wir werden uns in Kürze bei Ihnen melden.
    </span>
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#EDE0D4; padding: 40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);" class="container">
            <tr>
              <td style="background-color: #5C3B2E; color: white; padding: 24px; text-align: center;">
                <img src="https://vinligna.com/VINLIGNA%20Logo@2x.png" alt="VINLIGNA" width="160" style="display:block; margin:0 auto;">
                <p style="margin: 10px 0 0;">Tradition in zeitlose Eleganz verwandeln</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <h2 style="color: #5C3B2E; font-size: 20px; margin-bottom: 24px;">
                  Vielen Dank für Ihre Nachricht
                </h2>

                <p style="font-size: 16px; margin-bottom: 24px;">
                  Lieber ${data.name},<br><br>
                  vielen Dank für Ihre Anfrage über unser Kontaktformular.<br>
                  Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>

                <h3 style="color:#5C3B2E;">Ihre Nachricht:</h3>
                <div style="background-color:#F9F6F3; padding: 16px; border-left: 4px solid #5C3B2E; margin-top: 8px; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%;">
                  ${formattedMessage}
                </div>

                <p style="font-size: 14px; margin-top: 32px;">
                  Mit herzlichen Grüßen,<br>
                  Ihr VINLIGNA Team
                </p>

                <hr style="border:none; border-top:1px solid #ddd; margin:32px 0;" />

                <p style="font-size: 14px;">
                  <strong>VINLIGNA</strong><br>
                  E-Mail: <a href="mailto:info@vinligna.com" style="color:#D96B37;">info@vinligna.com</a><br>
                  Web: <a href="https://www.vinligna.com" style="color:#D96B37;">www.vinligna.com</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#666;">
                Hochwertige Fassmöbel aus recycelten Weinfässern
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}
