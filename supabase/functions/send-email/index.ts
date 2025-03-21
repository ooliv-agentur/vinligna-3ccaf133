
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
  formSource?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204,
    });
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 405,
      }
    );
  }

  try {
    const data = await req.json() as EmailData;
    
    // Validate required fields
    if (!data.name || !data.email || !data.interest || !data.message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields',
          requiredFields: ['name', 'email', 'interest', 'message'] 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400, 
        }
      );
    }

    console.log("Email request received:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      interest: data.interest,
      messagePreview: data.message.substring(0, 30) + (data.message.length > 30 ? '...' : ''),
      formSource: data.formSource || "Not specified"
    });

    // Here you would normally integrate with an email service
    // For now, we'll simulate a successful response
    
    // Create direct mailto link as fallback
    const subject = encodeURIComponent(`Anfrage von ${data.name}${data.formSource ? ` über ${data.formSource}` : ''}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone || "Nicht angegeben"}\nInteresse: ${data.interest}\n\nNachricht:\n${data.message}\n\nFormular: ${data.formSource || "Nicht angegeben"}\nZeitstempel: ${new Date().toLocaleString("de-DE")}`);
    const mailtoLink = `mailto:info@vinligna.com?subject=${subject}&body=${body}`;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email request processed successfully",
        mailtoLink: mailtoLink
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, 
      }
    );
    
  } catch (error) {
    console.error("Error processing email request:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500, 
      }
    );
  }
});
