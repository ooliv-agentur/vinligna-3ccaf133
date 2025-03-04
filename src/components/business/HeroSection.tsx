
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-black">
      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6 px-6 py-2 bg-transparent text-white text-sm tracking-widest uppercase rounded-full border border-white/20"
        >
          FÜR GESCHÄFTSKUNDEN
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight"
        >
          <span className="block text-white">Weinfass Möbel für</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-normal block mt-4 text-gradient"
          >
            Weingüter, Gastronomie & Hotellerie
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-16"
        >
          Werten Sie Ihre Räumlichkeiten mit individuell gefertigten Möbeln aus recycelten Weinfässern auf. Erzählen Sie die Geschichte Ihres Unternehmens durch zeitlose, nachhaltige Unikate.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-wine hover:bg-wine-light text-white px-8 py-4 rounded-md transition-colors duration-300 group"
          >
            <span>Jetzt anfragen</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
    </section>
  );
};

export default HeroSection;
