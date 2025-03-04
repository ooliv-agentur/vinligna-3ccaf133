
import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

// Text reveal component for animated headings
const RevealText = ({ children, delay = 0, className }: { children: string, delay?: number, className?: string }) => {
  return (
    <span className="reveal-text-container">
      <span 
        className={cn("reveal-text", className)}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Parallax background image with overlay */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png"
          alt="Weinfass-Workshop mit historischer Wandkunst"
          className="w-full h-full object-cover object-center"
        />
        {/* Monochrome overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/50" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* Badge - with staggered animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block mb-8 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs tracking-widest uppercase rounded-full border border-white/10"
        >
          Nachhaltige Eleganz
        </motion.div>

        {/* Heading - with text reveal animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
          <div className="mb-2">
            <RevealText delay={0.1}>Exklusive Fassmöbel aus</RevealText>
          </div>
          <div>
            <RevealText delay={0.3} className="font-medium">recycelten Weinfässern</RevealText>
          </div>
        </h1>

        {/* Subheading - with fade up animation */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-16"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        {/* Elegant Entry Points with Image Cards - inspired by isiglobal.com */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-20"
        >
          {/* Business Entry Point - Redesigned as elegant image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            whileHover={{ y: -8 }}
          >
            <Link 
              to="/business" 
              className="block h-full group image-card rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src="/lovable-uploads/112627aa-d494-4e9d-939e-39625817461d.png"
                  alt="Weingüter & Gastronomie" 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="image-card-content">
                    <h3 className="text-2xl font-light text-white mb-2">Weingüter & Gastronomie</h3>
                    <p className="text-white/70 mb-6 text-sm">Maßgeschneiderte Lösungen für Ihre Marke</p>
                    <div className="flex items-center text-white/90 text-sm font-light">
                      <span className="line-animation">Entdecken</span>
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Private Entry Point - Redesigned as elegant image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            whileHover={{ y: -8 }}
          >
            <Link 
              to="/private" 
              className="block h-full group image-card rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png" 
                  alt="Weinliebhaber" 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="image-card-content">
                    <h3 className="text-2xl font-light text-white mb-2">Weinliebhaber</h3>
                    <p className="text-white/70 mb-6 text-sm">Exklusive Designs für Ihr Zuhause</p>
                    <div className="flex items-center text-white/90 text-sm font-light">
                      <span className="line-animation">Entdecken</span>
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - with smooth animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2">Entdecken Sie mehr</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white/70" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
