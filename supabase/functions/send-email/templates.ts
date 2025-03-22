
// Email template functions for the send-email edge function

interface EmailData {
  name: string;
  email: string;
  telefon?: string;
  interesse: string;
  nachricht: string;
  formSource?: string;
}

// Create HTML template for admin email
export function createAdminEmailTemplate(data: EmailData, formattedInterest: string, timestamp: string): string {
  // Format the message with proper line breaks for HTML
  const formattedMessage = data.nachricht.replace(/\n/g, '<br>');
  
  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <meta name="description" content="Neue Kontaktanfrage von ${data.name} - ${formattedInterest}">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="x-apple-disable-message-reformatting">
    <style type="text/css">
      body, p, div, table, td {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #2C2C2C;
      }
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .responsive-image {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:#EDE0D4;">
    <!-- Preview text for email clients -->
    <div style="display:none; font-size:1px; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; mso-hide:all;">
      Neue Nachricht von ${data.name} über das VINLIGNA Kontaktformular - ${formattedInterest}
    </div>
    
    <center>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EDE0D4; padding: 40px 0;">
        <tr>
          <td align="center" valign="top">
            <!-- Main Container -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);" class="container">
              <!-- Header -->
              <tr>
                <td style="background-color: #5C3B2E; color: white; padding: 24px; text-align: center;">
                  <img src="https://vinligna.com/VINLIGNA%20Logo@2x.png" alt="VINLIGNA" width="160" style="display:block; margin:0 auto;">
                  <p style="margin: 10px 0 0;">Tradition in zeitlose Eleganz verwandeln</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <h2 style="color: #5C3B2E; font-size: 20px; margin-bottom: 24px;">
                          Neue Nachricht über das VINLIGNA Kontaktformular
                        </h2>

                        <table width="100%" cellpadding="6" cellspacing="0" border="0" style="margin-bottom: 24px;">
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
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#666;">
                  VINLIGNA | Hochwertige Fassmöbel aus recycelten Weinfässern
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;
}

// Create HTML template for user confirmation email
export function createUserEmailTemplate(data: EmailData): string {
  // Format the message with proper line breaks for HTML
  const formattedMessage = data.nachricht.replace(/\n/g, '<br>');
  
  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <meta name="description" content="Vielen Dank für Ihre Anfrage bei VINLIGNA - Wir werden uns bald bei Ihnen melden">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="x-apple-disable-message-reformatting">
    <style type="text/css">
      body, p, div, table, td {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #2C2C2C;
      }
      @media screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .responsive-image {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:#EDE0D4;">
    <!-- Preview text for email clients -->
    <div style="display:none; font-size:1px; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; mso-hide:all;">
      Vielen Dank für Ihre Nachricht an VINLIGNA. Wir werden uns in Kürze bei Ihnen melden.
    </div>
    
    <center>
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#EDE0D4; padding: 40px 0;">
        <tr>
          <td align="center" valign="top">
            <!-- Main Container -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);" class="container">
              <!-- Header -->
              <tr>
                <td style="background-color: #5C3B2E; color: white; padding: 24px; text-align: center;">
                  <img src="https://vinligna.com/VINLIGNA%20Logo@2x.png" alt="VINLIGNA" width="160" style="display:block; margin:0 auto;">
                  <p style="margin: 10px 0 0;">Tradition in zeitlose Eleganz verwandeln</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <h2 style="color: #5C3B2E; font-size: 20px; margin-bottom: 24px;">
                          Vielen Dank für Ihre Nachricht
                        </h2>

                        <p style="font-size: 16px; margin-bottom: 24px; line-height: 1.5;">
                          Lieber ${data.name},<br><br>
                          vielen Dank für Ihre Anfrage über unser Kontaktformular.<br>
                          Wir werden uns so schnell wie möglich bei Ihnen melden.
                        </p>

                        <h3 style="color:#5C3B2E;">Ihre Nachricht:</h3>
                        <div style="background-color:#F9F6F3; padding: 16px; border-left: 4px solid #5C3B2E; margin-top: 8px; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%;">
                          ${formattedMessage}
                        </div>

                        <p style="font-size: 14px; margin-top: 32px; line-height: 1.5;">
                          Mit herzlichen Grüßen,<br>
                          Ihr VINLIGNA Team
                        </p>

                        <hr style="border:none; border-top:1px solid #ddd; margin:32px 0;" />

                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td>
                              <p style="font-size: 14px; line-height: 1.5;">
                                <strong>VINLIGNA</strong><br>
                                E-Mail: <a href="mailto:info@vinligna.com" style="color:#D96B37;">info@vinligna.com</a><br>
                                Web: <a href="https://www.vinligna.com" style="color:#D96B37;">www.vinligna.com</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#666;">
                  Hochwertige Fassmöbel aus recycelten Weinfässern
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;
}
