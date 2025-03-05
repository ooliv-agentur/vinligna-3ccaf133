
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { sendEmailNotifications } from '@/utils/emailService';
import { useLocation } from 'react-router-dom';

interface ContactFormProps {
  formSource?: string;
}

const ContactForm = ({ formSource }: ContactFormProps) => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'business', // Default value
  });

  // Determine the form source based on the current route or provided prop
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
    
    try {
      // Send email notifications
      const source = getFormSource();
      const success = await sendEmailNotifications({
        ...formData,
        formSource: source
      });
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interest: 'business',
        });
        
        // Show success toast
        toast({
          title: "Nachricht erfolgreich gesendet",
          description: "Vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.",
          variant: "default",
        });
      } else {
        // Show error toast
        toast({
          title: "Fehler beim Senden",
          description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
      toast({
        title: "Fehler beim Senden",
        description: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-white/80"
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
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all text-white"
            placeholder="Ihr vollständiger Name"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-white/80"
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
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all text-white"
            placeholder="ihre.email@beispiel.de"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-white/80"
          >
            Telefon (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all text-white"
            placeholder="+49 123 456 7890"
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="interest" 
            className="block text-sm font-medium text-white/80"
          >
            Interesse
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all appearance-none text-white"
            style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23ffffff' viewBox='0 0 16 16'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
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
          className="block text-sm font-medium text-white/80"
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
          className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-wine/30 transition-all resize-none text-white"
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
        />
      </div>

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
