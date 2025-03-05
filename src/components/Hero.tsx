
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextArrowButton from './TextArrowButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-12 bg-mode-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div 
        className="container z-10 mx-auto max-w-6xl flex flex-col h-full pt-6 md:pt-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 bg-wine text-white text-sm tracking-widest uppercase border border-wine/20 rounded-full">
            Nachhaltige Eleganz
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-10 leading-tight md:leading-tight tracking-tight text-center max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block text-mode-white"
          >
            Exklusive Fassmöbel aus
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-medium block bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent text-balance leading-tight"
          >
            recycelten Weinfässern
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base text-mode-white-80 max-w-2xl mx-auto mb-8 md:mb-12 text-center leading-relaxed"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, 
          die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        <motion.div
          variants={scaleIn}
          className="w-full max-w-5xl mx-auto mb-10 md:mb-8 p-0 m-0"
          style={{ padding: 0, margin: "2.5rem auto 2rem" }}
        >
          <div 
            className="flex flex-col w-full items-center md:grid md:grid-cols-2 gap-10 md:gap-8 p-0 m-0" 
            style={{ padding: 0, margin: 0 }}
          >
            <div 
              className="w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0" 
              style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
            >
              <EntryCard 
                title=""
                subtitle="Winzer, Gastronom oder Hotelier"
                description="Maßgeschneiderte Lösungen für Ihre Marke"
                link="/business"
                imageSrc="/lovable-uploads/112627aa-d494-4e9d-939e-39625817461d.png"
              />
            </div>
            
            <div 
              className="w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
              style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
            >
              <EntryCard 
                title=""
                subtitle="Weinliebhaber"
                description="Exklusive Designs für Ihr Zuhause"
                link="/private"
                imageSrc="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
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
            transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="text-mode-white text-sm mb-2"
          >
            Mehr entdecken
          </motion.span>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ duration: 1, delay: 1.4 }}
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
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 flex flex-col p-0 m-0"
      style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
    >
      <Link 
        to={link} 
        className="block w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 group relative p-0 m-0"
        style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
      >
        <div 
          className="relative rounded-lg overflow-hidden w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
          style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
        >
          <div 
            className="block md:hidden w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
            style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
          >
            <div 
              className="aspect-[16/14] w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
              style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
            >
              <motion.div
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 w-full h-full p-0 m-0"
                style={{ padding: 0, margin: 0 }}
              >
                <img 
                  src={imageSrc} 
                  alt={subtitle} 
                  className="w-full h-full object-cover" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/30"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <div className="mb-1 text-background dark:text-white/70 text-base">{title}</div>
                <h2 className="text-2xl font-medium text-background dark:text-white mb-3">{subtitle}</h2>
                <p className="text-background/70 dark:text-white/70 mb-6 text-base font-light">{description}</p>
                
                <TextArrowButton text="Entdecken" href={link} />
              </div>
            </div>
          </div>

          <div 
            className="hidden md:block h-full w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
            style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
          >
            <div 
              className="aspect-[16/12] h-full w-full min-w-full max-w-none flex-grow-0 flex-shrink-0 p-0 m-0"
              style={{ width: "100%", minWidth: "100%", maxWidth: "none", flexGrow: 0, flexShrink: 0, padding: 0, margin: 0 }}
            >
              <motion.div
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 w-full h-full p-0 m-0"
                style={{ padding: 0, margin: 0 }}
              >
                <img 
                  src={imageSrc} 
                  alt={subtitle} 
                  className="w-full h-full object-cover" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/30"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-left transform transition-all duration-300 group-hover:translate-y-0">
                <div className="mb-1 text-background dark:text-white/70 text-base">{title}</div>
                <h2 className="text-2xl sm:text-3xl font-medium text-background dark:text-white mb-3">{subtitle}</h2>
                <p className="text-background/70 dark:text-white/70 mb-6 sm:mb-8 text-base font-light">{description}</p>
                
                <TextArrowButton text="Entdecken" href={link} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Hero;
