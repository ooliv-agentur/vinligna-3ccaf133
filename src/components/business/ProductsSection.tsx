
import { motion } from 'framer-motion';
import { Table, Armchair, Layers, Wine, PenTool } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { fadeIn, staggerContainer, slideUp } from '@/lib/motion';

const ProductsSection = () => {
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
              Unsere Produkte
            </span>
            <h2 className="section-title text-white">
              Maßgeschneiderte <span className="text-gradient">Weinfass-Möbel</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Unsere Möbel sind vollständig individualisierbar und auf die speziellen Bedürfnisse von Weingütern, Restaurants und Hotels ausgerichtet.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeIn}>
              <ProductCard 
                icon={<Table className="w-6 h-6" />}
                title="Tische und Theken"
                description="Unsere maßgefertigten Tische und Theken aus recycelten Barrique-Fässern vereinen Funktionalität und Eleganz. Diese Möbelstücke schaffen in Verkostungsräumen oder an Hotelbars eine stilvolle und authentische Atmosphäre."
                image="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ProductCard 
                icon={<Armchair className="w-6 h-6" />}
                title="Stühle und Sitzmöbel"
                description="Unsere handgefertigten Stühle und Barhocker bieten Komfort und Stabilität für den täglichen Gebrauch in gastronomischen Umgebungen, während sie gleichzeitig höchsten Komfort bieten."
                image="/lovable-uploads/87b6ac6c-025f-40d2-9b09-73f8ee6e25b8.png"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <ProductCard 
                icon={<Layers className="w-6 h-6" />}
                title="Weinregale und Präsentationsmöbel"
                description="Unsere maßgeschneiderten Regale bieten Ihnen die Möglichkeit, Ihre Weinauswahl stilvoll und übersichtlich zu präsentieren. Diese exklusiven Möbelstücke sind ein Highlight in jeder Vinothek."
                image="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto border border-white/10">
              <h3 className="text-xl font-medium mb-4 text-white">Besonderheiten für Ihr Unternehmen</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-wine rounded-full p-1 flex-shrink-0">
                        <Wine className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/70 text-sm text-left">
                        <span className="text-white font-medium block mb-1">Für Weingüter</span>
                        Nutzen Sie Ihre eigenen, nicht mehr verwendeten Weinfässer für einzigartige Möbelstücke mit Ihrem eingebrannten Logo.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-wine rounded-full p-1 flex-shrink-0">
                        <PenTool className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/70 text-sm text-left">
                        <span className="text-white font-medium block mb-1">Für Restaurants & Hotels</span>
                        Wir entwickeln spezielle Designkonzepte, die perfekt zu Ihrem Interieur passen und Ihren Gästen ein einzigartiges Ambiente bieten.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/25315c4b-0032-4c04-85f6-ddc09d9ef3df.png" 
                    alt="Weinfässer mit Metallbändern im Weinkeller" 
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
