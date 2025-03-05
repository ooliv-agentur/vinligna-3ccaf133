
// We'll need to use a different approach for email handling in the browser
// In a production environment, this would connect to a backend service

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
    // Format interest for readability
    let interestDisplay = interest;
    switch (interest) {
      case 'business': interestDisplay = 'Businesslösungen'; break;
      case 'private': interestDisplay = 'Privatkollektion'; break;
      case 'consultation': interestDisplay = 'Designberatung'; break;
      case 'other': interestDisplay = 'Andere Anfrage'; break;
    }
    
    // In a browser environment, we can't use Nodemailer directly
    // We would typically call an API endpoint that handles the email sending
    
    // Log what would be sent for debugging purposes
    console.log("✉️ Email notification that would be sent to admin:", {
      to: adminEmail,
      subject: `Neue Kontaktanfrage: ${formSource}`,
      content: {
        source: formSource,
        name,
        email,
        phone: phone || "Nicht angegeben",
        interest: interestDisplay,
        message,
        timestamp: new Date().toLocaleString("de-DE")
      }
    });
    
    console.log("✉️ Email confirmation that would be sent to user:", {
      to: email,
      subject: `Ihre Anfrage bei VINLIGNA: ${formSource}`,
      content: {
        name,
        interest: interestDisplay,
        message
      }
    });
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would be replaced with a fetch call to a backend API
    // Example:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // return response.ok;
    
    console.log("✓ Email simulation completed successfully");
    return true;
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
}
