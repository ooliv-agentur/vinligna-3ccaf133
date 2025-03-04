
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-screen-lg mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Are You Ready to <span className="font-medium">Transform Your Space</span>?
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you're a business looking for custom wine furniture, or a wine enthusiast seeking a statement piece for your home, discover how VINLIGNA can bring the history of wine into your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#business" 
                className="inline-flex items-center justify-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg border border-white/20 hover:bg-foreground/80 transition-colors group"
              >
                <span>Custom Solutions for Businesses</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#private" 
                className="inline-flex items-center justify-center text-sm font-medium bg-wine text-white py-3 px-6 rounded-lg hover:bg-wine-dark transition-colors group"
              >
                <span>Exclusive Designs for Wine Enthusiasts</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
