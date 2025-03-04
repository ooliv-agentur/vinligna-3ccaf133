
import { motion } from 'framer-motion';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import BenefitsCard from './contact/BenefitsCard';
import { benefits } from './contact/contactConstants';

const Contact = () => {
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
            <ContactForm />
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
            <ContactInfo />
            
            {/* Benefits Card */}
            <BenefitsCard benefits={benefits} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
