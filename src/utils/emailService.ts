
// Email service for form submission using a Supabase edge function

interface EmailData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  formSource: string;
}

interface EmailResponse {
  success: boolean;
  errorMessage?: string;
  mailtoLink?: string;
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
 * Sends form data to the Supabase edge function that handles SMTP email sending
 */
export const sendEmailNotifications = async (data: EmailData): Promise<EmailResponse> => {
  const { name, email, phone, interest, message, formSource } = data;
  
  try {
    // Log what we're about to send
    console.log("Sending email data to Supabase edge function:", {
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
    
    // The CORRECT Supabase Edge Function URL
    const supabaseUrl = 'https://nbdakkvfedbnpfsfnsrc.supabase.co/functions/v1/send-email';
    
    console.log("Request URL:", supabaseUrl);
    console.log("Request payload:", JSON.stringify(payload));
    
    // Try with standard CORS mode first
    try {
      // Send the data to the Supabase edge function with CORS mode
      const response = await fetch(supabaseUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        mode: 'cors'
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
    } catch (corsError) {
      // CORS error detected, try with no-cors mode as a second attempt
      console.error("CORS error detected with 'cors' mode, trying 'no-cors' mode:", corsError);
      
      try {
        // Try with no-cors mode
        console.log("Attempting with no-cors mode");
        const noCorsFetch = await fetch(supabaseUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          mode: 'no-cors'
        });
        
        console.log("no-cors response:", noCorsFetch);
        
        // With no-cors, we won't get a readable response, but if it didn't throw an error,
        // we might have succeeded. However, we can't know for sure.
        
        // Instead of assuming success (which may be misleading), we'll be honest with the user
        // Create direct mailto link as fallback
        const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
        
        return { 
          success: false,
          errorMessage: `CORS-Fehler beim Senden: Bitte kontaktieren Sie uns direkt unter <a href="mailto:info@vinligna.com?subject=${subject}&body=${body}" class="underline">info@vinligna.com</a>`,
          mailtoLink: `mailto:info@vinligna.com?subject=${subject}&body=${body}`
        };
      } catch (noCorsError) {
        console.error("Both CORS approaches failed:", noCorsError);
        
        // Create direct mailto link as ultimate fallback
        const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
        
        return { 
          success: false,
          errorMessage: `Beim Senden ist ein Fehler aufgetreten: Bitte kontaktieren Sie uns direkt unter <a href="mailto:info@vinligna.com?subject=${subject}&body=${body}" class="underline">info@vinligna.com</a>`,
          mailtoLink: `mailto:info@vinligna.com?subject=${subject}&body=${body}`
        };
      }
    }
    
  } catch (error) {
    console.error("Failed to send email notifications:", error);
    
    // Create direct mailto link as fallback
    const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
    
    return { 
      success: false, 
      errorMessage: `Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler beim Senden'}`,
      mailtoLink: `mailto:info@vinligna.com?subject=${subject}&body=${body}`
    };
  }
};
