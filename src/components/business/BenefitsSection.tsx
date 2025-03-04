
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BenefitItem } from './BenefitItem';
import { fadeIn, staggerContainer, slideUp } from '@/lib/motion';

const BenefitsSection = () => {
  return (
    <section className="section-padding-lg bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="section-title-container"
          >
            <span className="section-subtitle">
              Ihre Vorteile
            </span>
            <h2 className="section-title text-white">
              Vorteile für <span className="text-gradient">Ihr Unternehmen</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Entdecken Sie, warum VINLIGNA die erste Wahl für Weingüter, Gastronomiebetriebe und Hotels ist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="h-full">
                <img 
                  src="/lovable-uploads/bb8a99d9-97f3-42b4-85ad-94d0c5d74fff.png" 
                  alt="Maßgefertigte Weinfass-Möbel" 
                  className="w-full h-full object-cover rounded-lg shadow-md image-hover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-2 lg:col-span-1 space-y-6"
            >
              <motion.div variants={fadeIn}>
                <BenefitItem 
                  title="Individuelle Lösungen"
                  description="Jedes Möbelstück wird maßgefertigt, um perfekt in Ihre Räumlichkeiten zu passen und Ihren individuellen Stil widerzuspiegeln."
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <BenefitItem 
                  title="Nachhaltigkeit und Upcycling"
                  description="Wir verwenden recycelte Weinfässer, die nicht mehr für die Weinproduktion genutzt werden. So entstehen aus alten Materialien neue, langlebige Möbelstücke."
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <BenefitItem 
                  title="Exklusives Design"
                  description="Unsere Möbelstücke aus Barrique-Eichenholz bieten eine besondere Optik, die Ihren Betrieb aufwertet und ein Gefühl von Exklusivität und Tradition vermittelt."
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <BenefitItem 
                  title="Langlebigkeit und Robustheit"
                  description="Das Eichenholz der Barrique-Fässer ist nicht nur ästhetisch ansprechend, sondern auch extrem robust und für den täglichen Einsatz in gastronomischen Betrieben ausgelegt."
                />
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="pt-4"
              >
                <a 
                  href="#contact" 
                  className="btn-primary group"
                >
                  <span>Verwandeln Sie Ihre Räumlichkeiten</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
