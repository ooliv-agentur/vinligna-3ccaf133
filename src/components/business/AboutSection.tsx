
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/motion';

const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-darkbg">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-wine/5 to-transparent opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wine/5 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-mode-white text-3xl md:text-4xl lg:text-5xl">
              Über <span className="text-gradient font-normal">VINLIGNA</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
            {/* Left column with large quote symbol */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-8 -top-10 text-wine/20">
                <Quote size={80} strokeWidth={1} />
              </div>
              <div className="border-l-2 border-wine pl-6 py-2">
                <p className="text-xl md:text-2xl font-light italic text-foreground dark:text-white/90 leading-relaxed">
                  Handgefertigte, exklusive Möbel aus recycelten Barrique-Fässern für Weingüter, Gastronomiebetriebe und die Hotellerie.
                </p>
              </div>
            </motion.div>
            
            {/* Right column with paragraph */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center"
            >
              <p className="text-foreground/80 dark:text-white/80 text-lg leading-relaxed">
                Unser Ziel ist es, maßgeschneiderte Möbelstücke zu schaffen, die nicht nur einzigartig sind, sondern auch nachhaltig produziert werden. Durch die Wiederverwendung von edlen Eichenholz-Weinfässern verleihen wir Ihren Räumlichkeiten einen einzigartigen Charme und schaffen gleichzeitig ein exklusives Ambiente, das Ihre Gäste begeistern wird.
              </p>
            </motion.div>
          </div>
          
          {/* Bottom highlight box */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
          >
            {/* Repositioned philosophy button to center and made it one line */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="bg-wine px-6 py-2 rounded-full whitespace-nowrap">
                <span className="text-white font-medium">Unsere Philosophie</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center pt-6">
              <div className="w-full md:w-1/2 text-center md:text-right">
                {/* Increased spacing to "Nachhaltig" */}
                <h3 className="text-gradient text-2xl md:text-3xl font-normal mb-8">Nachhaltig</h3>
                <h3 className="text-gradient text-2xl md:text-3xl font-normal mb-8">Einzigartig</h3>
                <h3 className="text-gradient text-2xl md:text-3xl font-normal">Exklusiv</h3>
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-wine/50 to-transparent hidden md:block"></div>
              <div className="w-full md:w-1/2">
                <p className="text-foreground/80 dark:text-white/80 text-lg leading-relaxed">
                  Mit jedem unserer Möbelstücke erzählen wir eine Geschichte von Handwerkskunst, Nachhaltigkeit und zeitlosem Design – perfekt für Räume, in denen Menschen zusammenkommen, genießen und verweilen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
