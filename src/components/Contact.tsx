import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'business', // Default value
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
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
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
        variant: "default",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 md:py-44 bg-black overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-wine/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-oak/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-screen-xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="section-subtitle">
            Kontakt
          </span>
          <h2 className="section-title-large text-white">
            Lassen Sie uns ins <span className="highlight">Gespräch</span> kommen
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ob Sie ein maßgeschneidertes Möbelstück suchen oder Fragen zu unseren Produkten haben,
            wir sind für Sie da.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form Column - 3 spans */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-3xl p-10"
          >
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
          </motion.div>

          {/* Info Column - 2 spans */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-xl font-light mb-6 text-white">Kontaktinformationen</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-white">E-Mail</p>
                    <a href="mailto:info@vinligna.com" className="text-wine hover:underline">info@vinligna.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-white">Telefon</p>
                    <a href="tel:+4963623094990" className="text-white/80 hover:text-wine">+49 6362 309 49 90</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-wine/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-wine">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-white">Werkstattadresse</p>
                    <address className="not-italic text-white/80">
                      VinLignum Holzmanufaktur GmbH & Co. KG<br />
                      Industriestraße 19<br />
                      67821 Alsenz<br />
                      Deutschland
                    </address>
                    <p className="text-xs text-white/50 mt-2">Besuche nur nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits Card */}
            <div className="bg-wine/5 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-xl font-light mb-6 text-white">Warum VINLIGNA?</h3>
              <ul className="space-y-3">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-0.5 mr-3 flex-shrink-0 w-5 h-5 bg-wine rounded-full flex items-center justify-center">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <p className="text-sm text-white/80">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "Einzigartige Möbel aus authentischen Weinfässern",
  "Perfekte Kombination aus Tradition und modernem Design",
  "Nachhaltige Materialien mit vollständiger Rückverfolgbarkeit",
  "Maßgeschneiderte Anpassung an Ihre Bedürfnisse",
  "Fachkundige Beratung während des gesamten Prozesses",
  "Langlebige Qualität für Generationen"
];

export default Contact;
