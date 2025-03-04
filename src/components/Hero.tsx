
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 md:py-32 bg-black">
      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8 px-3 py-1 bg-white/10 text-white text-xs tracking-widest uppercase"
        >
          NACHHALTIGE ELEGANZ
        </motion.div>

        {/* Heading - more minimal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight"
        >
          Exklusive Fassmöbel aus <br className="hidden md:block" />
          <span className="font-medium">recycelten Weinfässern</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-16"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        {/* Entry Cards - redesigned to match reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-20"
        >
          {/* Business Entry Point */}
          <EntryCard 
            title="Weingüter & Gastronomie"
            description="Maßgeschneiderte Lösungen für Ihre Marke"
            link="/business"
            imageSrc="/lovable-uploads/112627aa-d494-4e9d-939e-39625817461d.png"
            delay={0.4}
          />

          {/* Private Entry Point */}
          <EntryCard 
            title="Weinliebhaber"
            description="Exklusive Designs für Ihr Zuhause"
            link="/private"
            imageSrc="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png" 
            delay={0.5}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2">Mehr entdecken</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/60 absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EntryCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  delay: number;
}

const EntryCard = ({ title, description, link, imageSrc, delay }: EntryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      className="relative"
    >
      <Link 
        to={link} 
        className="block relative aspect-[4/3] overflow-hidden group border border-[#FF5733]" // Orange border from reference image
      >
        {/* Image */}
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        
        {/* Content layout similar to reference image */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Title area */}
          <div>
            <h3 className="text-2xl text-white font-light mb-1">{title}</h3>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
          
          {/* "Entdecken" with modern hover effect */}
          <div className="flex items-center text-white text-sm mt-4">
            <span className="relative">
              <span className="block">Entdecken</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
            <motion.div 
              className="ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            >
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
