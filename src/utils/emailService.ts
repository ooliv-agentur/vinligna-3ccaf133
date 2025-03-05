
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
    // In a real implementation, this would connect to an email API service 
    // like SendGrid, Mailgun, AWS SES, etc.
    
    // For now, we'll simulate the email sending with a console log
    console.log("✉️ Sending admin notification to:", adminEmail);
    console.log("Subject:", `Neue Kontaktanfrage: ${formSource}`);
    console.log("Content:", {
      name,
      email,
      phone: phone || "Nicht angegeben",
      interest,
      message,
      formSource,
      timestamp: new Date().toLocaleString("de-DE")
    });
    
    console.log("\n✉️ Sending user confirmation to:", email);
    console.log("Subject:", `Ihre Anfrage bei VINLIGNA: ${formSource}`);
    
    // In a real app, we would wait for the API response
    // For now, simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
}
