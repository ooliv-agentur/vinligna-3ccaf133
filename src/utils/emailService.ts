
// Email service for form submission.
//
// Sends the contact form to the standalone Cloudflare Worker `vinligna-mail`
// (https://vinligna-mail.uli-95b.workers.dev), which delivers the admin
// notification + user confirmation over IONOS SMTP. This replaced the former
// Supabase edge function — no Supabase dependency anymore.

const MAIL_ENDPOINT = "https://vinligna-mail.uli-95b.workers.dev";

interface EmailData {
  name: string;
  email: string;
  telefon: string;
  interesse: string;
  nachricht: string;
  formSource: string;
  honeypot?: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
  errorCode?: string;
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
 * Creates a mailto link as fallback option
 */
const createMailtoLink = (data: EmailData): string => {
  const { name, email, telefon, interesse, nachricht, formSource } = data;
  const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
  const body = encodeURIComponent(
    `Name: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || "Nicht angegeben"}\nInteresse: ${formatInterest(interesse)}\n\nNachricht:\n${nachricht}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`
  );
  return `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
};

/**
 * Sends email notifications through the vinligna-mail Cloudflare Worker.
 * Falls back to creating a mailto link if there's any error.
 */
export const sendEmailNotifications = async (data: EmailData): Promise<EmailResponse> => {
  const { name, email, telefon, interesse, nachricht, formSource } = data;

  console.log("Sending email via mail worker with data:", {
    name,
    email,
    telefon: telefon || "Nicht angegeben",
    interesse: formatInterest(interesse),
    nachricht: nachricht.substring(0, 30) + (nachricht.length > 30 ? '...' : '')
  });

  // Create direct mailto link as fallback
  const mailtoLink = createMailtoLink(data);

  try {
    const response = await fetch(MAIL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        telefon,
        interesse,
        nachricht,
        formSource,
        honeypot: data.honeypot || '', // Include honeypot for bot detection
        timestamp: Date.now() // Add timestamp for freshness validation
      })
    });

    // Try to parse the JSON body (the worker always returns JSON).
    let functionData: EmailResponse | null = null;
    try {
      functionData = await response.json();
    } catch {
      functionData = null;
    }

    console.log("Mail worker response:", response.status, functionData);

    if (functionData && functionData.success) {
      return {
        success: true,
        message: functionData.message || "Email sent successfully",
        mailtoLink: functionData.mailtoLink || mailtoLink
      };
    } else if (functionData) {
      return {
        success: false,
        error: functionData.error || "Unknown error from mail worker",
        errorCode: functionData.errorCode || "UNKNOWN_ERROR",
        mailtoLink: functionData.mailtoLink || mailtoLink
      };
    } else {
      return {
        success: false,
        error: `No valid response from mail worker (HTTP ${response.status})`,
        mailtoLink
      };
    }
  } catch (error) {
    console.error("Failed to send email via mail worker:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to contact server",
      mailtoLink
    };
  }
};
