
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  formSource: string;
}

/**
 * Sends notification emails to both the user and administrator
 * @param data Form data and metadata
 */
export const sendEmailNotifications = async (data: EmailData): Promise<boolean> => {
  const { name, email, phone, interest, message, formSource } = data;
  const adminEmail = "info@ooliv.de";
  
  try {
    // Create a transporter with the SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailbox.org',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'info@ooliv.de',
        pass: 'ooschliv25!?Raidboxes'
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    // Format interest for readability
    let interestDisplay = interest;
    switch (interest) {
      case 'business': interestDisplay = 'Businesslösungen'; break;
      case 'private': interestDisplay = 'Privatkollektion'; break;
      case 'consultation': interestDisplay = 'Designberatung'; break;
      case 'other': interestDisplay = 'Andere Anfrage'; break;
    }
    
    // 1. Send notification email to admin
    const adminMailOptions = {
      from: '"VINLIGNA Website" <info@ooliv.de>',
      to: adminEmail,
      subject: `Neue Kontaktanfrage: ${formSource}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Quelle:</strong> ${formSource}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
        <p><strong>Interesse:</strong> ${interestDisplay}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Zeitstempel:</strong> ${new Date().toLocaleString("de-DE")}</p>
      `
    };
    
    await transporter.sendMail(adminMailOptions);
    
    // 2. Send confirmation email to the user
    const userMailOptions = {
      from: '"VINLIGNA" <info@ooliv.de>',
      to: email,
      subject: `Ihre Anfrage bei VINLIGNA: ${formSource}`,
      html: `
        <h2>Vielen Dank für Ihre Anfrage!</h2>
        <p>Hallo ${name},</p>
        <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.</p>
        <p><strong>Ihre Anfrage im Überblick:</strong></p>
        <p><strong>Interesse:</strong> ${interestDisplay}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Mit freundlichen Grüßen,</p>
        <p>Ihr VINLIGNA-Team</p>
      `
    };
    
    await transporter.sendMail(userMailOptions);
    
    console.log("✓ Emails sent successfully to admin and user");
    return true;
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
}
