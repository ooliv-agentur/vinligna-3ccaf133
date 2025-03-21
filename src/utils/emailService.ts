
// Email service using SMTP for browser-based email sending
import { createTransport, Transporter } from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  formSource: string;
}

// SMTP configuration for IONOS
const smtpConfig = {
  host: 'smtp.ionos.de',
  port: 587, // Using TLS port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'info@vinligna.com',
    pass: '67821Alsenz!19$'
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
};

/**
 * Formats interest selection for better readability
 */
const formatInterest = (interest: string): string => {
  switch (interest) {
    case 'business': return 'Businesslösungen';
    case 'private': return 'Privatkollektion';
    case 'consultation': return 'Designberatung';
    case 'other': return 'Andere Anfrage';
    default: return interest;
  }
};

/**
 * Sends notification emails to both the user and administrator
 * @param data Form data and metadata
 */
export const sendEmailNotifications = async (data: EmailData): Promise<boolean> => {
  const { name, email, phone, interest, message, formSource } = data;
  const adminEmail = "info@vinligna.com";
  const bccEmail = "info@ooliv.de";
  
  try {
    // Create reusable transporter object using SMTP transport
    const transporter = createTransport(smtpConfig);
    
    // Format interest for readability
    const interestDisplay = formatInterest(interest);
    
    // Get current date and time formatted for German locale
    const timestamp = new Date().toLocaleString("de-DE");
    
    // Send email to admin with BCC
    const adminMailResult = await transporter.sendMail({
      from: `"VINLIGNA Kontaktformular" <${adminEmail}>`,
      to: adminEmail,
      bcc: bccEmail,
      subject: `Neue Kontaktanfrage: ${formSource}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #751628;">Neue Anfrage über das Kontaktformular!</h2>
          <p>Hier sind die Details des Nutzers:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Formular:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${formSource}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>E-Mail:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Telefon:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${phone || "Nicht angegeben"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Interesse:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${interestDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Nachricht:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Zeitstempel:</strong></td>
              <td style="padding: 8px;">${timestamp}</td>
            </tr>
          </table>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            Diese E-Mail wurde automatisch vom VINLIGNA Kontaktformular gesendet.
          </p>
        </div>
      `
    });
    
    // Send confirmation email to user
    const userMailResult = await transporter.sendMail({
      from: `"VINLIGNA" <${adminEmail}>`,
      to: email,
      subject: `Ihre Anfrage bei VINLIGNA: ${formSource}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
          <h2 style="color: #751628;">Vielen Dank für Ihre Nachricht!</h2>
          <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
          <p>Ihre angegebenen Informationen:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>E-Mail:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Interesse:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${interestDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;"><strong>Nachricht:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          
          <p>
            Sollten Sie weitere Fragen haben, können Sie uns jederzeit kontaktieren.
          </p>
          
          <p style="margin-top: 30px;">
            Mit freundlichen Grüßen,<br>
            Ihr VINLIGNA Team
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e1e1e1; font-size: 12px; color: #666;">
            <p>VINLIGNA GmbH & Co. KG<br>
            An der Burg Alsenz 10a<br>
            67821 Alsenz</p>
            <p>Tel: +49 6362 922980<br>
            E-Mail: info@vinligna.com<br>
            Website: <a href="https://vinligna.com" style="color: #751628;">vinligna.com</a></p>
          </div>
        </div>
      `
    });
    
    console.log("✓ Admin email sent:", adminMailResult.messageId);
    console.log("✓ User confirmation email sent:", userMailResult.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
};
