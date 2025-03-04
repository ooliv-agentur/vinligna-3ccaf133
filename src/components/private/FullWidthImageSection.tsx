
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
          src="/lovable-uploads/a1c28e2a-c340-4f6f-b24e-28eb33d39f4e.png" 
          alt="VINLIGNA Weinfass Möbel Detail" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </section>
  );
};

export default FullWidthImageSection;
