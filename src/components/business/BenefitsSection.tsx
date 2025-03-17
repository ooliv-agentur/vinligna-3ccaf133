
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { BenefitItem } from '@/components/business/BenefitItem';

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
            className="text-center mb-16"
          >
            <span className="section-subtitle">Vorteile</span>
            <h2 className="section-title">
              Warum VINLIGNA für Ihr <span className="highlight">Unternehmen</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Maßgeschneiderte Lösungen aus Weinfässern für Weingüter, Restaurants, 
              Hotels und Bars. Schaffen Sie ein unverwechselbares Ambiente, das Ihre 
              Kunden begeistern wird und Ihren Räumlichkeiten Charakter verleiht.
            </p>
          </motion.div>
          
          {/* Benefits Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <BenefitItem 
              icon="Wine" 
              title="Weinkultur im Fokus" 
              description="Verbinden Sie Ihr Unternehmen mit der reichen Tradition der Weinherstellung und erzählen Sie eine Geschichte, die Ihre Kunden berührt."
            />
            <BenefitItem 
              icon="Recycle" 
              title="Nachhaltige Unikate" 
              description="Jedes Möbelstück ist ein Unikat und trägt zur Nachhaltigkeit bei, indem es ausgediente Weinfässer wiederverwertet."
            />
            <BenefitItem 
              icon="Fingerprint" 
              title="Einzigartiges Design" 
              description="Heben Sie sich von der Konkurrenz ab mit maßgeschneiderten Möbeln, die speziell für Ihre Räumlichkeiten konzipiert sind."
            />
            <BenefitItem 
              icon="Camera" 
              title="Instagram-tauglich" 
              description="Schaffen Sie fotogene Bereiche in Ihrem Lokal, die Kunden zum Teilen in sozialen Medien animieren und Ihre Reichweite erhöhen."
            />
            <BenefitItem 
              icon="Users" 
              title="Kundenerlebnis" 
              description="Bieten Sie Ihren Gästen ein unvergessliches Ambiente, das sie immer wieder zurückkehren lässt und weiterempfehlen."
            />
            <BenefitItem 
              icon="BadgeDollarSign" 
              title="Werterhaltung" 
              description="Investieren Sie in hochwertige Möbel mit langer Lebensdauer, die ihren Wert behalten und zur Wertsteigerung Ihres Unternehmens beitragen."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
