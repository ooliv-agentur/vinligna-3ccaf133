
// Email service for form submission using a Supabase edge function

import { supabase } from "@/integrations/supabase/client";

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
 * Sends email notifications through Supabase Edge Function
 * Falls back to creating a mailto link if there's any error
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
    
    // Attempt to call the Supabase edge function
    const { data: functionData, error } = await supabase.functions.invoke('send-email', {
      body: {
        name,
        email,
        phone,
        interest: formatInterest(interest),
        message,
        formSource
      },
    });
    
    // Check for edge function errors
    if (error) {
      console.error("Supabase edge function error:", error);
      throw new Error(error.message);
    }
    
    console.log("Edge function response:", functionData);
    
    // Return success with mailtoLink as fallback
    return { 
      success: true,
      mailtoLink: functionData.mailtoLink
    };
    
  } catch (error) {
    console.error("Failed to send email via edge function:", error);
    
    // Create direct mailto link as fallback
    const subject = encodeURIComponent(`Anfrage von ${name} über ${formSource}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nicht angegeben"}\nInteresse: ${formatInterest(interest)}\n\nNachricht:\n${message}\n\nFormular: ${formSource}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
    const mailtoLink = `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
    
    return { 
      success: false,
      errorMessage: `Beim Senden ist ein Fehler aufgetreten: Bitte kontaktieren Sie uns direkt unter <a href="mailto:info@vinligna.com?subject=${subject}&body=${body}" class="underline">info@vinligna.com</a>`,
      mailtoLink
    };
  }
};
