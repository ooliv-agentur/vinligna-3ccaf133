
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FullWidthImageSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="w-full h-[90vh] relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/lovable-uploads/3a04196f-9e44-4ccd-adb0-b0f1f13a34be.png" 
          alt="Weinfass Möbel Showroom" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </section>
  );
};

export default FullWidthImageSection;
