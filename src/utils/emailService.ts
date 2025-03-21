
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
 * Creates a direct mailto link without attempting server requests
 * This is a workaround for CORS issues with the edge function
 */
export const sendEmailNotifications = async (data: EmailData): Promise<EmailResponse> => {
  const { name, email, phone, interest, message, formSource } = data;
  
  try {
    console.log("Creating direct mailto link for:", {
      name,
      email,
      phone: phone || "Nicht angegeben",
      interest: formatInterest(interest),
      message
    });
    
    // Create direct mailto link
    const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
    
    const mailtoLink = `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
    
    // Return the mailtoLink but with success:false to indicate we're using fallback
    return { 
      success: false,
      errorMessage: `CORS-Fehler beim Senden: Bitte kontaktieren Sie uns direkt unter <a href="${mailtoLink}" class="underline">info@vinligna.com</a>`,
      mailtoLink: mailtoLink
    };
    
  } catch (error) {
    console.error("Failed to create mailto link:", error);
    
    // Create direct mailto link as ultimate fallback
    const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
    
    return { 
      success: false,
      errorMessage: `Beim Senden ist ein Fehler aufgetreten: Bitte kontaktieren Sie uns direkt unter <a href="mailto:info@vinligna.com?subject=${subject}&body=${body}" class="underline">info@vinligna.com</a>`,
      mailtoLink: `mailto:info@vinligna.com?subject=${subject}&body=${body}`
    };
  }
};
