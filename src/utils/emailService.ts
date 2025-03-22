
// Email service for form submission using a Supabase edge function

import { supabase } from "@/integrations/supabase/client";

interface EmailData {
  name: string;
  email: string;
  telefon: string;
  interesse: string;
  nachricht: string;
  formSource: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
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
 * Sends email notifications through Supabase Edge Function
 * Falls back to creating a mailto link if there's any error
 */
export const sendEmailNotifications = async (data: EmailData): Promise<EmailResponse> => {
  const { name, email, telefon, interesse, nachricht, formSource } = data;
  
  console.log("Sending email via edge function with data:", {
    name,
    email,
    telefon: telefon || "Nicht angegeben",
    interesse: formatInterest(interesse),
    nachricht: nachricht.substring(0, 30) + (nachricht.length > 30 ? '...' : '')
  });
  
  // Create direct mailto link as fallback
  const mailtoLink = createMailtoLink(data);
  
  try {
    // Call the Supabase edge function to send the email with a timeout
    const functionCallPromise = supabase.functions.invoke('send-email', {
      body: {
        name,
        email,
        telefon,
        interesse,
        nachricht,
        formSource
      }
    });
    
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Edge function call timed out after a minute")), 60000);
    });
    
    // Race the function call against the timeout
    const { data: functionData, error } = await Promise.race([
      functionCallPromise,
      timeoutPromise.then(() => { 
        throw new Error("Edge function call timed out");
      })
    ]) as any;
    
    // Check for edge function errors
    if (error) {
      console.log("Supabase edge function error:", error);
      return { 
        success: false,
        error: error.message,
        mailtoLink
      };
    }
    
    console.log("Edge function response:", functionData);
    
    // Return success or error based on the function response
    if (functionData && functionData.success) {
      return { 
        success: true,
        message: functionData.message || "Email sent successfully",
        mailtoLink: functionData.mailtoLink || mailtoLink
      };
    } else if (functionData) {
      return {
        success: false,
        error: functionData.error || "Unknown error from edge function",
        mailtoLink: functionData.mailtoLink || mailtoLink
      };
    } else {
      return {
        success: false,
        error: "No response from edge function",
        mailtoLink
      };
    }
  } catch (error) {
    console.error("Failed to send email via edge function:", error);
    
    return { 
      success: false,
      error: error instanceof Error ? error.message : "Failed to contact server",
      mailtoLink
    };
  }
};
