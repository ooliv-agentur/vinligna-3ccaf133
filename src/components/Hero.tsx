
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppTheme } from '@/hooks/use-theme';
import { useIsMobile } from '@/hooks/use-mobile';
import { heroStyles, themeColors } from '@/lib/theme-constants';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const Hero = () => {
  const { isDarkMode } = useAppTheme();
  const isMobile = useIsMobile();
  
  // Get the background color based on theme
  const backgroundColor = isDarkMode ? themeColors.dark.background : themeColors.light.background;

  return (
    <section 
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12" 
      style={{ backgroundColor: themeColors.dark.background }} // Force dark background for hero
    >
      <motion.div 
        className="container z-10 mx-auto max-w-6xl flex flex-col h-full pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28 md:pb-32 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-transparent text-white text-xs sm:text-sm tracking-widest uppercase rounded-full border border-white/20">
            NACHHALTIGE ELEGANZ
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight md:leading-tight tracking-tight text-center max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-white"
          >
            Exklusive Fassmöbel aus
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-medium block bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent text-balance leading-tight"
          >
            recycelten Weinfässern
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base text-white max-w-2xl mx-auto mb-12 sm:mb-14 text-center leading-relaxed"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, 
          die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        <motion.div
          variants={scaleIn}
          className="w-full max-w-5xl mx-auto mb-6 sm:mb-6"
        >
          <div className="flex flex-col w-full items-center md:grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="w-full">
              <EntryCard 
                title=""
                subtitle="Winzer, Gastronom oder Hotelier"
                description="Maßgeschneiderte Lösungen für Ihre Marke"
                link="/business"
                imageSrc="/lovable-uploads/d71990eb-38c7-4083-8cc8-d26efebbf928.png"
              />
            </div>
            
            <div className="w-full">
              <EntryCard 
                title=""
                subtitle="Weinliebhaber"
                description="Exklusive Designs für Ihr Zuhause"
                link="/private"
                imageSrc="/lovable-uploads/13d643cb-0706-4f3a-a14d-22b3ad717116.png"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="hidden md:flex flex-col items-center absolute bottom-8 left-0 right-0"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="text-white text-sm mb-2"
          >
            Mehr entdecken
          </motion.span>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-px bg-white/20 relative overflow-hidden"
          >
            <motion.div 
              initial={{ y: -60 }}
              animate={{ y: 60 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-1/2 bg-white/60 absolute"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Dark overlay for the entire hero section */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};

interface EntryCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  imageSrc: string;
}

const EntryCard = ({ title, subtitle, description, link, imageSrc }: EntryCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full flex flex-col"
    >
      <Link to={link} className="block w-full group relative">
        <div className="relative rounded-lg overflow-hidden w-full">
          {/* Card image and content - same structure for both mobile and desktop */}
          <div className="block w-full">
            <div className="aspect-[16/12] w-full">
              <motion.div
                initial={{ filter: "blur(5px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={imageSrc} 
                  alt={subtitle} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              
              {/* Light overlay with lower opacity */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                {title && <div className="mb-1 text-white text-sm">{title}</div>}
                <h2 className="text-xl sm:text-2xl font-medium text-white mb-2">{subtitle}</h2>
                <p className="text-white mb-4 text-sm sm:text-base font-light">{description}</p>
                
                <div className="flex items-center text-wine">
                  <span className="font-medium mr-1 text-wine">Entdecken</span>
                  <ArrowRight size={16} className="text-wine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
