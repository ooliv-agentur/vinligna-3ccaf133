
// Email service for form submission with mailto fallback

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
 * Creates a mailto link from form data
 */
const createMailtoLink = (data: EmailData): string => {
  const { name, email, phone, interest, message, formSource } = data;
  const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Telefon: ${phone || "Nicht angegeben"}\n` +
    `Interesse: ${formatInterest(interest)}\n\n` +
    `Nachricht:\n${message}\n\n` +
    `Formular: ${formSource}\n` +
    `Zeitstempel: ${new Date().toLocaleString("de-DE")}`
  );
  
  return `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
};

/**
 * Since the server-side email sending is consistently failing with CORS errors,
 * we'll directly use the mailto fallback approach
 */
export const sendEmailNotifications = async (data: EmailData): Promise<EmailResponse> => {
  try {
    // Create a mailto link for direct client-side email sending
    const mailtoLink = createMailtoLink(data);
    
    // Log that we're using the mailto fallback
    console.log("Using mailto fallback for form submission");
    
    return { 
      success: false,
      errorMessage: `CORS-Fehler beim Senden: Bitte kontaktieren Sie uns direkt unter <a href="${mailtoLink}" class="underline">info@vinligna.com</a>`,
      mailtoLink: mailtoLink
    };
  } catch (error) {
    console.error("Failed to create mailto link:", error);
    
    return { 
      success: false, 
      errorMessage: `Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler beim Senden'}`,
      mailtoLink: `mailto:info@vinligna.com` 
    };
  }
};
