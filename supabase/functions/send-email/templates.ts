
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
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<style>
@media only screen and (max-width: 480px) {
  h1 { font-size: 22px !important; }
  h2 { font-size: 18px !important; }
  h3 { font-size: 16px !important; }
  p, div, a { font-size: 14px !important; }
}
</style>
</head>
<body style="margin:0; padding:20px; background-color:#FFFFFF; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height:1.5;">
<div style="display:none; max-height:0; overflow:hidden;">Neue Nachricht von ${data.name} über das VINLIGNA Kontaktformular - ${formattedInterest}</div>
<div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
<div style="padding:24px; text-align:center; background-color:#FFFFFF;">
<h1 style="margin:0; font-size:24px; font-weight:bold; color:#D96B37;">VINLIGNA</h1>
<p style="margin:8px 0 0; color:#525358;">Tradition in zeitlose Eleganz verwandeln</p>
</div>
<div style="padding:32px;">
<h2 style="color:#D96B37; font-size:20px; margin-top:0; margin-bottom:24px;">Neue Nachricht über das VINLIGNA Kontaktformular</h2>
<div style="margin-bottom:24px;">
<p style="margin:8px 0;"><strong>Name:</strong> ${data.name}</p>
<p style="margin:8px 0;"><strong>E-Mail:</strong> <a href="mailto:${data.email}" style="color:#D96B37; word-break:break-word;">${data.email}</a></p>
${data.telefon ? `<p style="margin:8px 0;"><strong>Telefon:</strong> ${data.telefon}</p>` : ''}
<p style="margin:8px 0;"><strong>Interesse:</strong> ${formattedInterest}</p>
<p style="margin:8px 0;"><strong>Formular:</strong> ${data.formSource || "Nicht angegeben"}</p>
</div>
<h3 style="color:#525358; margin-top:24px; margin-bottom:8px;">Nachricht:</h3>
<div style="background-color:#F9F6F3; padding:16px; border-left:4px solid #D96B37; margin-top:8px; word-wrap:break-word; overflow-wrap:anywhere; white-space:normal; max-width:100%;">
${formattedMessage}
</div>
<div style="margin-top:32px; text-align:center;">
<a href="mailto:${data.email}" style="background-color:#D96B37; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;">Antworten</a>
</div>
<p style="font-size:12px; color:#888; margin-top:40px; text-align:right;">Zeitstempel: ${timestamp}</p>
</div>
<div style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#525358;">VINLIGNA | Hochwertige Fassmöbel aus recycelten Weinfässern</div>
</div>
</body>
</html>`;
}

// Create plaintext template for admin email
export function createAdminPlaintextTemplate(data: EmailData, formattedInterest: string, timestamp: string): string {
  return `VINLIGNA Kontaktformular - Neue Nachricht

Name: ${data.name}
E-Mail: ${data.email}
${data.telefon ? `Telefon: ${data.telefon}` : ''}
Interesse: ${formattedInterest}
Formular: ${data.formSource || "Nicht angegeben"}

Nachricht:
${data.nachricht}

Zeitstempel: ${timestamp}

--
VINLIGNA | Hochwertige Fassmöbel aus recycelten Weinfässern`;
}

// Create HTML template for user confirmation email
export function createUserEmailTemplate(data: EmailData): string {
  // Format the message with proper line breaks for HTML
  const formattedMessage = data.nachricht.replace(/\n/g, '<br>');
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<style>
@media only screen and (max-width: 480px) {
  h1 { font-size: 22px !important; }
  h2 { font-size: 18px !important; }
  h3 { font-size: 16px !important; }
  p, div, a { font-size: 14px !important; }
}
</style>
</head>
<body style="margin:0; padding:20px; background-color:#FFFFFF; font-family:system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height:1.5;">
<div style="display:none; max-height:0; overflow:hidden;">Vielen Dank für Ihre Nachricht an VINLIGNA. Wir werden uns in Kürze bei Ihnen melden.</div>
<div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
<div style="padding:24px; text-align:center; background-color:#FFFFFF;">
<h1 style="margin:0; font-size:24px; font-weight:bold; color:#D96B37;">VINLIGNA</h1>
<p style="margin:8px 0 0; color:#525358;">Tradition in zeitlose Eleganz verwandeln</p>
</div>
<div style="padding:32px;">
<h2 style="color:#D96B37; font-size:20px; margin-top:0; margin-bottom:24px;">Vielen Dank für Ihre Nachricht</h2>
<p style="font-size:16px; margin-bottom:24px;">Lieber ${data.name},<br><br>vielen Dank für Ihre Anfrage über unser Kontaktformular.<br>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
<h3 style="color:#525358; margin-top:24px; margin-bottom:8px;">Ihre Nachricht:</h3>
<div style="background-color:#F9F6F3; padding:16px; border-left:4px solid #D96B37; margin-top:8px; word-wrap:break-word; overflow-wrap:anywhere; white-space:normal; max-width:100%;">
${formattedMessage}
</div>
<p style="font-size:14px; margin-top:32px;">Mit herzlichen Grüßen,<br>Ihr VINLIGNA Team</p>
<hr style="border:none; border-top:1px solid #ddd; margin:32px 0;" />
<div>
<p style="font-size:14px;"><strong>VINLIGNA</strong><br>E-Mail: <a href="mailto:info@vinligna.com" style="color:#D96B37; word-break:break-word;">info@vinligna.com</a><br>Web: <a href="https://www.vinligna.com" style="color:#D96B37; word-break:break-word;">www.vinligna.com</a></p>
</div>
</div>
<div style="background-color:#f2f2f2; text-align:center; padding:16px; font-size:12px; color:#525358;">Hochwertige Fassmöbel aus recycelten Weinfässern</div>
</div>
</body>
</html>`;
}

// Create plaintext template for user confirmation email
export function createUserPlaintextTemplate(data: EmailData): string {
  return `VINLIGNA - Vielen Dank für Ihre Nachricht

Lieber ${data.name},

vielen Dank für Ihre Anfrage über unser Kontaktformular.
Wir werden uns so schnell wie möglich bei Ihnen melden.

Ihre Nachricht:
${data.nachricht}

Mit herzlichen Grüßen,
Ihr VINLIGNA Team

--
VINLIGNA
E-Mail: info@vinligna.com
Web: www.vinligna.com

Hochwertige Fassmöbel aus recycelten Weinfässern`;
}
