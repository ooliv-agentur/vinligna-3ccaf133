
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png"
          alt="Weinfass-Workshop mit historischer Wandkunst"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - dunkler oben, heller unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-3 py-1 bg-wine-light/90 backdrop-blur-sm text-oak-dark text-xs tracking-widest uppercase rounded-full"
        >
          Nachhaltige Eleganz
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight"
        >
          Exklusive Fassmöbel aus <br className="hidden md:block" />
          <span className="font-medium">recycelten Weinfässern</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        {/* Entry Points - Modern Technical Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Business Entry Point */}
          <EntryPoint 
            title="Für Weingüter & Gastronomie"
            description="Maßgeschneiderte Lösungen für Ihre Marke"
            link="/business"
            color="wine"
            delay={0.4}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                <path d="M5 8h14" />
                <path d="M5 12h14" />
                <path d="M5 16h14" />
                <path d="M3 20h18" />
                <path d="M17 4h1a2 2 0 0 1 2 2v1" />
                <path d="M16 4V2" />
                <path d="M8 4H7a2 2 0 0 0-2 2v1" />
                <path d="M8 4V2" />
              </svg>
            }
          />

          {/* Private Entry Point */}
          <EntryPoint 
            title="Für Weinliebhaber"
            description="Exklusive Designs für Ihr Zuhause"
            link="/private"
            color="oak-dark"
            delay={0.5}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                <path d="M8 22h8" />
                <path d="M7 10h10" />
                <path d="M10 2h4" />
                <path d="M12 2v8" />
                <path d="M12 10v12" />
              </svg>
            }
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scrollen Sie, um mehr zu entdecken</span>
          <div className="w-0.5 h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EntryPointProps {
  title: string;
  description: string;
  link: string;
  color: 'wine' | 'oak-dark';
  delay: number;
  icon: React.ReactNode;
}

const EntryPoint = ({ title, description, link, color, delay, icon }: EntryPointProps) => {
  const bgColor = color === 'wine' ? 'bg-wine/90' : 'bg-oak-dark/90';
  const hoverBgColor = color === 'wine' ? 'hover:bg-wine' : 'hover:bg-oak-dark';
  const borderColor = color === 'wine' ? 'border-wine-light/30' : 'border-oak-light/30';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Link 
        to={link} 
        className={cn(
          "block h-full p-8 rounded-2xl backdrop-blur-md border",
          bgColor, hoverBgColor, borderColor,
          "transition-all duration-300 shadow-lg hover:shadow-xl"
        )}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            whileHover={{ 
              scale: 1,
              opacity: 1,
              rotate: [0, 5, 0, -5, 0],
              transition: { duration: 0.5 }
            }}
            className="mb-6"
          >
            {icon}
          </motion.div>
          
          <h3 className="text-2xl font-medium mb-2 text-white">{title}</h3>
          <p className="text-white/80 mb-6">{description}</p>
          
          <div className="mt-auto inline-flex items-center font-medium text-white group">
            <span>Entdecken</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="ml-2"
            >
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
