
import { motion } from 'framer-motion';
import { Table, Armchair, Layers, Wine, Tag } from 'lucide-react';
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
            className="mt-20"
          >
            <div className="rounded-2xl overflow-hidden border border-wine/30">
              <div className="bg-wine/10 backdrop-blur-sm px-8 py-4 border-b border-wine/20">
                <h3 className="text-2xl font-medium text-white flex items-center gap-3">
                  <Wine className="w-6 h-6 text-wine" />
                  Besonderheit für Winzer
                </h3>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 bg-wine/20 rounded-full p-2">
                        <Tag className="w-5 h-5 text-wine" />
                      </div>
                      <p className="text-white/80">
                        Für Winzer bieten wir die Möglichkeit, Möbel aus Ihren eigenen, nicht mehr genutzten Weinfässern fertigen zu lassen.
                      </p>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 bg-wine/20 rounded-full p-2">
                        <Wine className="w-5 h-5 text-wine" />
                      </div>
                      <p className="text-white/80">
                        Diese können auf Wunsch mit eingebrannten Logos oder individuellen Markenzeichen veredelt werden.
                      </p>
                    </div>
                    
                    <div className="md:mt-6">
                      <a href="#contact" className="inline-flex items-center text-wine hover:text-wine-light transition-colors duration-300 font-medium">
                        Eigene Weinfass-Möbel anfragen
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/25315c4b-0032-4c04-85f6-ddc09d9ef3df.png" 
                      alt="Weinfässer mit Metallbändern im Weinkeller" 
                      className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                      Verwandeln Sie Ihre eigenen Weinfässer in einzigartige Möbelstücke mit individueller Note
                    </div>
                  </div>
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
