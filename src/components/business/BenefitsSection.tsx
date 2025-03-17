
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import BenefitItem from './BenefitItem';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 overflow-hidden bg-darkbg">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="section-subtitle">Ihre Vorteile</span>
            <h2 className="section-title">
              Vorteile für <span className="highlight">Ihr Unternehmen</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Entdecken Sie, warum VINLIGNA die erste Wahl für Weingüter, Gastronomiebetriebe und Hotels ist.
            </p>
          </motion.div>
          
          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-8">
                <BenefitItem 
                  title="Individuelle Lösungen"
                  description="Jedes Möbelstück wird maßgefertigt, um perfekt in Ihre Räumlichkeiten zu passen und Ihren individuellen Stil widerzuspiegeln."
                />
                
                <BenefitItem 
                  title="Nachhaltigkeit und Upcycling"
                  description="Wir verwenden recycelte Weinfässer, die nicht mehr für die Weinproduktion genutzt werden. So entstehen aus alten Materialien neue, langlebige Möbelstücke."
                />
                
                <BenefitItem 
                  title="Exklusives Design"
                  description="Unsere Möbelstücke aus Barrique-Eichenholz bieten eine besondere Optik, die Ihren Betrieb aufwertet und ein Gefühl von Exklusivität und Tradition vermittelt."
                />
                
                <BenefitItem 
                  title="Langlebigkeit und Robustheit"
                  description="Das Eichenholz der Barrique-Fässer ist nicht nur ästhetisch ansprechend, sondern auch extrem robust und für den täglichen Einsatz in gastronomischen Betrieben ausgelegt."
                />
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-first lg:order-last"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/85d4a29e-509f-42f3-b7d7-52e5a3622dd9.png" 
                  alt="Werkstatt mit Möbelherstellung" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
