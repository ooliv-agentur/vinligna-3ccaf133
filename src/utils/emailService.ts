
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
export const sendEmailNotifications = async (data: EmailData): Promise<{ success: boolean; errorMessage?: string }> => {
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
    
    // Prepare the request payload
    const payload = {
      name,
      email,
      telefon: phone || "Nicht angegeben",
      interesse: formatInterest(interest),
      nachricht: `${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`
    };
    
    console.log("Request URL:", 'https://vinligna-contact-form.deno.dev');
    console.log("Request payload:", JSON.stringify(payload));
    
    // Send the data to the Deno edge function
    const response = await fetch('https://vinligna-contact-form.deno.dev', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    // Log the response status
    console.log("Response status:", response.status);
    
    // Get the response body
    const responseText = await response.text();
    console.log("Response body:", responseText);
    
    // Parse the response
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse JSON response:", e);
      return { 
        success: false, 
        errorMessage: `Server antwortete mit nicht-JSON Daten: ${responseText.substring(0, 100)}...` 
      };
    }
    
    if (!response.ok) {
      console.error("Server returned error:", result);
      return { 
        success: false, 
        errorMessage: result.error || `Server antwortete mit Statuscode ${response.status}` 
      };
    }
    
    console.log("Email sending result:", result);
    
    return { success: result.success };
    
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    return { 
      success: false, 
      errorMessage: error instanceof Error ? error.message : 'Unbekannter Fehler beim Senden' 
    };
  }
};
