
import { motion } from 'framer-motion';
import { Wine, Recycle, Award, Leaf } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight, scale } from '@/lib/motion';

const AboutSection = () => {
  return (
    <section className="py-32 md:py-40 bg-black overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black/80" />
      
      {/* Decorative elements */}
      <div className="absolute w-96 h-96 rounded-full bg-wine/5 blur-3xl -top-48 -left-48 opacity-60"></div>
      <div className="absolute w-96 h-96 rounded-full bg-wine/5 blur-3xl -bottom-48 -right-48 opacity-60"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <motion.span 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="section-subtitle"
              >
                Unsere Philosophie
              </motion.span>
              
              <motion.h2 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="section-title-large mb-8"
              >
                Über <span className="text-gradient">VINLIGNA</span>
              </motion.h2>
              
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-white/80 text-lg"
              >
                <p>
                  VINLIGNA bietet handgefertigte, exklusive Möbel aus recycelten Barrique-Fässern für Weingüter, Gastronomiebetriebe und die Hotellerie. Unser Ziel ist es, maßgeschneiderte Möbelstücke zu schaffen, die nicht nur einzigartig sind, sondern auch nachhaltig produziert werden.
                </p>
                <p>
                  Durch die Wiederverwendung von edlen Eichenholz-Weinfässern verleihen wir Ihren Räumlichkeiten einen einzigartigen Charme und schaffen gleichzeitig ein exklusives Ambiente, das Ihre Gäste begeistern wird.
                </p>
              </motion.div>
              
              {/* Feature cards */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mt-10"
              >
                <div className="feature-card">
                  <Wine className="w-6 h-6 text-wine mb-3" />
                  <h3 className="text-white text-lg font-medium mb-2">Weinfass-Kultur</h3>
                  <p className="text-white/70 text-sm">Authentische Möbel mit Geschichte und Charakter.</p>
                </div>
                
                <div className="feature-card">
                  <Recycle className="w-6 h-6 text-wine mb-3" />
                  <h3 className="text-white text-lg font-medium mb-2">Nachhaltigkeit</h3>
                  <p className="text-white/70 text-sm">Upcycling hochwertiger Materialien für neue Zwecke.</p>
                </div>
                
                <div className="feature-card">
                  <Award className="w-6 h-6 text-wine mb-3" />
                  <h3 className="text-white text-lg font-medium mb-2">Handwerkskunst</h3>
                  <p className="text-white/70 text-sm">Präzision und Liebe zum Detail in jedem Stück.</p>
                </div>
                
                <div className="feature-card">
                  <Leaf className="w-6 h-6 text-wine mb-3" />
                  <h3 className="text-white text-lg font-medium mb-2">Ökologisch</h3>
                  <p className="text-white/70 text-sm">Umweltbewusst produzierte Möbel mit kleinem CO₂-Fußabdruck.</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right column - image showcase */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main image */}
                <motion.div
                  variants={scale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                >
                  <img 
                    src="/lovable-uploads/a5803ca8-92c1-4b97-b7a2-6e6c1fefd43e.png" 
                    alt="VINLIGNA Werkstatt mit Weinfässern" 
                    className="w-full h-auto rounded-2xl object-cover image-hover"
                  />
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10 -left-10 z-20 bg-glass-dark p-6 rounded-xl max-w-[250px] shadow-xl border border-white/10 hidden lg:block"
                >
                  <img 
                    src="/lovable-uploads/513efa5a-d1b5-4ad3-abd8-79b2b0567556.png" 
                    alt="Weinfass Detail" 
                    className="w-full h-auto rounded mb-3"
                  />
                  <h4 className="text-white font-medium">Handwerkliche Präzision</h4>
                  <p className="text-white/70 text-sm mt-1">Jedes Möbelstück wird mit größter Sorgfalt gefertigt.</p>
                </motion.div>
                
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -right-6 z-0 opacity-60 w-72 h-72 bg-wine/20 rounded-full blur-3xl"
                />
                
                {/* Stats element */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute top-5 -right-5 z-20 bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-wine/30 shadow-xl hidden lg:block"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="text-3xl font-medium text-wine">100%</div>
                      <div className="text-white/80 text-sm">nachhaltig</div>
                    </div>
                    <div className="h-10 w-px bg-white/20"></div>
                    <div className="ml-4">
                      <div className="text-3xl font-medium text-wine">5+</div>
                      <div className="text-white/80 text-sm">Jahre Erfahrung</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
