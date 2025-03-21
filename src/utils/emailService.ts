
// Email service for browser-based form submission
import { useToast } from '@/hooks/use-toast';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  formSource: string;
}

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
 * Sends form data using a fetch request to a dedicated email handler
 * This function will simulate success for demo purposes since we can't
 * actually send emails directly from the browser
 * 
 * In a production environment, this would send data to a serverless function
 * or API endpoint that handles the actual email sending
 */
export const sendEmailNotifications = async (data: EmailData): Promise<boolean> => {
  const { name, email, phone, interest, message, formSource } = data;
  
  try {
    // For demonstration purposes, log the data that would be sent
    console.log("Email data that would be sent:", {
      to: "info@vinligna.com",
      bcc: "info@ooliv.de",
      subject: `Neue Kontaktanfrage: ${formSource}`,
      name,
      email,
      phone: phone || "Nicht angegeben",
      interest: formatInterest(interest),
      message,
      timestamp: new Date().toLocaleString("de-DE")
    });
    
    // In a real implementation, we would use fetch to send the data to a server:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, interest, message, formSource })
    // });
    
    // if (!response.ok) throw new Error('Failed to send email');
    
    // Simulate success response after a short delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For demo purposes, always return true
    console.log("✓ Email would be sent to admin: info@vinligna.com (BCC: info@ooliv.de)");
    console.log("✓ Confirmation email would be sent to user:", email);
    return true;
    
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
};
