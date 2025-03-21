
// Email service for form submission using a Deno edge function

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
 * Sends form data to the Deno edge function that handles SMTP email sending
 */
export const sendEmailNotifications = async (data: EmailData): Promise<boolean> => {
  const { name, email, phone, interest, message, formSource } = data;
  
  try {
    // Log what we're about to send
    console.log("Sending email data to edge function:", {
      name,
      email,
      telefon: phone || "Nicht angegeben",
      interesse: formatInterest(interest),
      nachricht: `${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`
    });
    
    // Send the data to the Deno edge function
    const response = await fetch('https://your-deno-edge-function-url.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        telefon: phone || "Nicht angegeben",
        interesse: formatInterest(interest),
        nachricht: `${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Fehler beim Senden der E-Mail');
    }
    
    const result = await response.json();
    console.log("Email sending result:", result);
    
    return result.success;
    
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return false;
  }
};
