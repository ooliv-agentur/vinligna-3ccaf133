
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const ManufacturerSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <section className="py-12 bg-white dark:bg-darkbg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-sm font-medium text-foreground/70 dark:text-white/70 mb-4 uppercase tracking-wide">
            EIN UNTERNEHMEN DER
          </p>
          
          <div className="w-full max-w-[240px] mx-auto mb-4">
            <img 
              src={isDarkMode 
                ? "/lovable-uploads/daccd260-720c-447c-ae6a-5eecc4f3a5c4.png" 
                : "/lovable-uploads/9597c90f-1f5f-4a8b-9cee-e0e884023b40.png"
              } 
              alt="Manufakturhof Alsenz" 
              className="w-full h-auto"
            />
          </div>
          
          <p className="text-sm font-medium text-foreground/70 dark:text-white/70 uppercase tracking-wide">
            GRUPPE
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturerSection;
