
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FullWidthImageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create a parallax effect by moving the image slightly as we scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, windowHeight * 0.2]);
  
  return (
    <section ref={sectionRef} className="w-full h-[90vh] relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[110%] -z-10"
      >
        <img 
          src="/lovable-uploads/3a04196f-9e44-4ccd-adb0-b0f1f13a34be.png" 
          alt="Weinfass Möbel Showroom" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Traditionelle <span className="text-gradient">Handwerkskunst</span></h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Unsere Möbel vereinen traditionelles Handwerk mit modernem Design. Jedes Stück erzählt die Geschichte des Weins, den es einst beherbergte.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FullWidthImageSection;
