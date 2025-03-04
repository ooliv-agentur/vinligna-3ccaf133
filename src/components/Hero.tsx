
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/lovable-uploads/hero-background-video.mp4" type="video/mp4" />
          {/* Fallback to image if video cannot be played */}
          <img 
            src="/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png"
            alt="Weinfass-Workshop mit historischer Wandkunst"
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Darker gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest uppercase rounded-full border border-white/10"
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

        {/* Elegant Entry Points with Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Business Entry Point - Redesigned as elegant glass card */}
          <EntryCard 
            title="Weingüter & Gastronomie"
            description="Maßgeschneiderte Lösungen für Ihre Marke"
            link="/business"
            imageSrc="/lovable-uploads/112627aa-d494-4e9d-939e-39625817461d.png"
            delay={0.4}
          />

          {/* Private Entry Point - Redesigned as elegant glass card */}
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
          <span className="text-white/70 text-sm mb-2">Scrollen Sie, um mehr zu entdecken</span>
          <div className="w-0.5 h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
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
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Link 
        to={link} 
        className="block h-full group relative"
      >
        {/* Card image with overlay */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
          
          {/* Card content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
            <h3 className="text-2xl font-light text-white mb-1">{title}</h3>
            <p className="text-white/70 mb-6 text-sm">{description}</p>
            
            <div className="flex items-center text-white/90 text-sm font-light group">
              <span className="border-b border-white/30 group-hover:border-white transition-colors duration-300">Entdecken</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-2"
              >
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
