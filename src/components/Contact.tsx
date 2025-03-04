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
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
              Kontakt aufnehmen
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Lassen Sie uns etwas <span className="font-medium">Außergewöhnliches</span> erschaffen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ob Sie ein Unternehmen sind, das maßgeschneiderte Weinmöbel sucht, oder ein Weinliebhaber, der ein Statement-Stück für Ihr Zuhause sucht, wir sind für Sie da.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-light mb-6">Senden Sie uns eine Nachricht</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Vollständiger Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-oak-light/20 border border-oak/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-oak/30 transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-oak-light/20 border border-oak/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-oak/30 transition-all"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Telefonnummer (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-oak-light/20 border border-oak/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-oak/30 transition-all"
                      placeholder="+49 (000) 000-0000"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="interest" 
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Ich interessiere mich für
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-oak-light/20 border border-oak/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-oak/30 transition-all appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236b7280' viewBox='0 0 16 16'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                    >
                      <option value="business">Businesslösungen</option>
                      <option value="private">Privatkollektion</option>
                      <option value="consultation">Designberatung</option>
                      <option value="other">Andere Anfrage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-oak-light/20 border border-oak/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-oak/30 transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg transition-all group",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-foreground/90"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Senden...
                    </>
                  ) : (
                    <>
                      <span>Nachricht senden</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="sticky top-32">
                <div className="relative rounded-lg overflow-hidden h-64 mb-8">
                  <img 
                    src="/contact-image.jpg" 
                    alt="VINLIGNA Werkstatt" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-1">Besuchen Sie unsere Werkstatt</h3>
                    <p className="text-white/80 text-sm">Erleben Sie die Handwerkskunst persönlich</p>
                  </div>
                </div>

                <div className="bg-oak-light/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-medium mb-4">Warum VINLIGNA wählen?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-wine rounded-full flex items-center justify-center">
                          <Check className="text-white w-3 h-3" />
                        </div>
                        <p className="text-muted-foreground text-sm">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-wine/10 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-4">Kontaktinformationen</h3>
                  <div className="space-y-3 text-sm">
                    <p><strong className="font-medium">E-Mail:</strong> <a href="mailto:info@vinligna.com" className="text-wine hover:underline">info@vinligna.com</a></p>
                    <p><strong className="font-medium">Telefon:</strong> <a href="tel:+4963623094990" className="hover:underline">+49 6362 309 49 90</a></p>
                    <p><strong className="font-medium">Werkstattadresse:</strong><br />VinLignum Holzmanufaktur GmbH & Co. KG<br />Industriestraße 19, 67821 Alsenz<br />Deutschland</p>
                    <p className="text-muted-foreground pt-2">Besuche nur nach Vereinbarung möglich</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "Jedes Stück erzählt die einzigartige Geschichte des Fasses, aus dem es stammt",
  "Kombination aus traditioneller Handwerkskunst und modernem Design",
  "Nachhaltig beschaffte Materialien mit vollständiger Rückverfolgbarkeit",
  "Vollständig anpassbar an Ihren Raum und Stil",
  "Fachkundige Beratung während des gesamten Designprozesses",
  "Langlebige Qualität, die über Generationen weitergegeben werden kann"
];

export default Contact;
