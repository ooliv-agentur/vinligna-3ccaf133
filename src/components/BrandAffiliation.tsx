
import { useAppTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';

const BrandAffiliation = () => {
  const { isDarkMode } = useAppTheme();
  
  return (
    <section className="py-12 bg-darkbg dark:bg-darkbg">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="uppercase text-sm font-medium text-white/80 dark:text-white/80 mb-4">
            Ein Unternehmen der
          </p>
          
          <div className="w-40 h-auto mb-4">
            <img 
              src={isDarkMode 
                ? "/lovable-uploads/085237aa-3df7-4c1f-8eeb-645dcec2875e.png" 
                : "/lovable-uploads/d3470b99-4149-4ff6-9b35-882d174d4463.png"
              } 
              alt="Manufakturhof Alsenz" 
              className="w-full h-auto"
            />
          </div>
          
          <p className="uppercase text-sm font-medium text-white/80 dark:text-white/80">
            Gruppe
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAffiliation;
