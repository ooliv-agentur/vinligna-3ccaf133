
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppTheme } from '@/hooks/use-theme';
import { useIsMobile } from '@/hooks/use-mobile';
import TextArrowButton from './TextArrowButton';

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

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 bg-darkbg">
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
          <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-transparent text-foreground text-xs sm:text-sm tracking-widest uppercase rounded-full border border-foreground/20">
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
            className="block text-mode-white"
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
          className="text-sm sm:text-base text-mode-white-80 max-w-2xl mx-auto mb-6 sm:mb-8 text-center leading-relaxed"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, 
          die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        <motion.div
          variants={scaleIn}
          className="w-full max-w-5xl mx-auto mb-6 sm:mb-6"
          style={{ margin: "0.5rem auto 1rem" }}
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
            className="text-mode-white text-sm mb-2"
          >
            Mehr entdecken
          </motion.span>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-px bg-foreground/20 relative overflow-hidden"
          >
            <motion.div 
              initial={{ y: -60 }}
              animate={{ y: 60 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-1/2 bg-foreground/60 absolute"
            />
          </motion.div>
        </motion.div>
      </motion.div>
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
          {/* Mobile version */}
          {isMobile ? (
            <div className="block w-full">
              <div className="aspect-[16/14] w-full">
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
                
                {/* Dark overlay - 50% of original opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/35 to-black/35"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left">
                  {title && <div className="mb-1 text-white/70 text-sm sm:text-base">{title}</div>}
                  <h2 className="text-xl sm:text-2xl font-medium text-white mb-2 sm:mb-3">{subtitle}</h2>
                  <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base font-light">{description}</p>
                  
                  <div className="flex items-center">
                    <span className="text-wine font-medium mr-1">Entdecken</span>
                    <ArrowRight size={16} className="text-wine" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop version */
            <div className="hidden md:block h-full w-full">
              <div className="aspect-[16/12] h-full w-full">
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
                
                {/* Dark overlay - 50% of original opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/35 to-black/35"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left transform transition-all duration-300 group-hover:translate-y-0">
                  {title && <div className="mb-1 text-white/70 text-base">{title}</div>}
                  <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3">{subtitle}</h2>
                  <p className="text-white/70 mb-6 sm:mb-8 text-base font-light">{description}</p>
                  
                  <div className="flex items-center">
                    <span className="text-wine font-medium mr-1">Entdecken</span>
                    <ArrowRight size={16} className="text-wine" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
