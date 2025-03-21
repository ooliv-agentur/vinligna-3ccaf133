
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { sendEmailNotifications } from '@/utils/emailService';
import { useLocation } from 'react-router-dom';
import { useAppTheme } from '@/hooks/use-theme';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface ContactFormProps {
  formSource?: string;
}

const ContactForm = ({ formSource }: ContactFormProps) => {
  const { toast } = useToast();
  const location = useLocation();
  const { isDarkMode } = useAppTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);
  const [showDirectContact, setShowDirectContact] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'business', // Default value
  });

  const getFormSource = (): string => {
    if (formSource) return formSource;
    
    const path = location.pathname;
    if (path === '/business' || path.includes('business')) {
      return "Weingüter, Gastronomie & Hotellerie";
    } else if (path === '/private' || path.includes('private')) {
      return "Weinliebhaber & Privatkunden";
    } else {
      return "VINLIGNA Startseite";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setMailtoLink(null);
    setShowDirectContact(false); // Reset this to false initially
    
    try {
      console.log("Form submission started");
      // Send email notifications
      const source = getFormSource();
      console.log(`Form source: ${source}`);
      
      const result = await sendEmailNotifications({
        ...formData,
        formSource: source
      });
      
      console.log("Email sending completed with result:", result);
      
      if (result.success) {
        setMailtoLink(result.mailtoLink || null);
        setShowDirectContact(true);
        
        // Show success toast
        toast({
          title: "Erfolg",
          description: "Klicken Sie auf 'E-Mail direkt senden', um Ihre Nachricht zu senden.",
          variant: "default",
        });
      } else {
        // Handle error case
        setErrorMessage(result.errorMessage || "Beim Senden ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt per E-Mail.");
        setMailtoLink(result.mailtoLink || null);
        setShowDirectContact(true);
        
        // Show error toast
        toast({
          title: "Direkte Email erforderlich",
          description: "Bitte verwenden Sie den 'E-Mail direkt senden' Button, um Ihre Nachricht zu senden.",
          variant: "default",
        });
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMsg = error instanceof Error ? error.message : "Unbekannter Fehler";
      setErrorMessage("Beim Senden ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt per E-Mail.");
      
      // Create a basic mailto link as fallback
      const subject = encodeURIComponent(`Anfrage von ${formData.name} über ${getFormSource()}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone || "Nicht angegeben"}\nInteresse: ${formData.interest}\n\nNachricht:\n${formData.message}`);
      setMailtoLink(`mailto:info@vinligna.com?subject=${subject}&body=${body}`);
      setShowDirectContact(true);
      
      // Show error toast
      toast({
        title: "Fehler beim Senden",
        description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte verwenden Sie den 'E-Mail direkt senden' Button.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDirectEmail = () => {
    if (mailtoLink) {
      window.location.href = mailtoLink;
    } else {
      // Create a basic mailto link as fallback
      const subject = encodeURIComponent(`Anfrage von ${formData.name} über ${getFormSource()}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone || "Nicht angegeben"}\nInteresse: ${formData.interest}\n\nNachricht:\n${formData.message}`);
      window.location.href = `mailto:info@vinligna.com?subject=${subject}&body=${body}`;
    }
  };

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all",
    isDarkMode 
      ? "bg-white/5 border border-white/10 text-white" 
      : "bg-white/50 border border-gray-200 text-gray-800"
  );

  const labelClasses = cn(
    "block text-sm font-medium",
    isDarkMode ? "text-white/80" : "text-gray-700"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className={labelClasses}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Ihr vollständiger Name"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className={labelClasses}
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="ihre.email@beispiel.de"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className={labelClasses}
          >
            Telefon (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+49 123 456 7890"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="interest" 
            className={labelClasses}
          >
            Interesse
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className={cn(inputClasses, "appearance-none")}
            style={{ 
              backgroundImage: isDarkMode 
                ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23ffffff' viewBox='0 0 16 16'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")` 
                : `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23000000' viewBox='0 0 16 16'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right 1rem center', 
              backgroundSize: '1rem' 
            }}
          >
            <option value="business">Businesslösungen</option>
            <option value="private">Privatkollektion</option>
            <option value="consultation">Designberatung</option>
            <option value="other">Andere Anfrage</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className={labelClasses}
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={cn(inputClasses, "resize-none")}
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
        />
      </div>

      {showDirectContact && (
        <div className={cn(
          "rounded-xl p-4 border",
          isDarkMode 
            ? "bg-red-900/30 border-red-900/30 text-red-200"
            : "bg-red-50 border-red-200 text-red-700"
        )}>
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <div className="space-y-3 w-full">
              <div>
                <p className="font-medium text-sm">CORS-Fehler beim Senden: Bitte kontaktieren Sie uns direkt unter <a href="mailto:info@vinligna.com" className="underline hover:text-wine">info@vinligna.com</a></p>
              </div>
              
              <button
                type="button"
                onClick={handleDirectEmail}
                className={cn(
                  "flex items-center justify-center w-full py-2 px-4 text-sm rounded-lg border transition-colors",
                  isDarkMode 
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
                )}
              >
                <Mail className="w-4 h-4 mr-2" />
                E-Mail direkt senden
              </button>
            </div>
          </div>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center w-full md:w-auto text-sm font-medium bg-wine text-white py-3 px-8 rounded-xl transition-all",
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-wine-dark"
        )}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Wird gesendet...
          </>
        ) : (
          <>
            <span>Nachricht senden</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
