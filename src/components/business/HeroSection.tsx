
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextArrowButton from '../TextArrowButton';

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center px-4 sm:px-6 pt-20 pb-16 overflow-hidden bg-darkbg">
      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 sm:mb-6 px-4 py-1.5 sm:px-6 sm:py-2 bg-transparent text-foreground text-xs sm:text-sm tracking-widest uppercase rounded-full border border-foreground/20"
        >
          FÜR GESCHÄFTSKUNDEN
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight tracking-tight"
        >
          <span className="block text-foreground">Weinfass Möbel für</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-normal text-gradient"
          >
            Weingüter, Gastronomie & Hotellerie
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-16"
        >
          Werten Sie Ihre Räumlichkeiten mit individuell gefertigten Möbeln aus recycelten Weinfässern auf. Erzählen Sie die Geschichte Ihres Unternehmens durch zeitlose, nachhaltige Unikate.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <TextArrowButton text="Jetzt anfragen" href="#contact" />
        </motion.div>
      </div>

      {/* Hero background with overlay */}
      <div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('/lovable-uploads/3a04196f-9e44-4ccd-adb0-b0f1f13a34be.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-darkbg/60"></div>
    </section>
  );
};

export default HeroSection;
