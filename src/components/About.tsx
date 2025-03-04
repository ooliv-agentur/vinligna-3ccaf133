
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-40 md:py-60 bg-black text-white overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left column - content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium tracking-widest uppercase text-wine mb-6"
              >
                Unsere Philosophie
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-light mb-10 leading-tight"
              >
                Die Kunst der <span className="font-medium bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent">Nachhaltigkeit</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-xl text-white/80"
              >
                <p>
                  Wir verwandeln ausgediente Weinfässer in zeitlose Möbelstücke, die die Geschichte des Weins in Ihr Zuhause bringen. Jedes Stück ist ein Unikat mit eigener Geschichte.
                </p>
                <p>
                  Unsere Handwerkskunst verbindet Nachhaltigkeit mit Luxus und schafft Möbel, die mehr als nur funktional sind – sie sind ein Statement.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <a 
                  href="#gallery" 
                  className="inline-block px-8 py-4 bg-wine hover:bg-wine-light text-white rounded-md transition-colors duration-300 text-lg"
                >
                  Unsere Kreationen entdecken
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right column - large showcase image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/0f5485b5-8cee-4ad4-9f8c-9b4aecaf9d05.png" 
                  alt="Werkstatt mit Weinfässern und daraus gefertigten Möbelstücken" 
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-8 bg-black/60 backdrop-blur-md rounded-xl">
                  <span className="text-wine text-sm uppercase tracking-wider">Nachhaltige Materialien</span>
                  <h3 className="text-white text-xl font-medium mt-2">Jedes Stück erzählt eine Geschichte</h3>
                </div>
              </div>
              
              {/* Decorative floating element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-12 -right-8 bg-wine/10 backdrop-blur-sm p-6 rounded-xl border border-wine/20 hidden lg:block"
              >
                <span className="block text-3xl font-medium text-wine-light">100%</span>
                <span className="text-white/90">nachhaltige Produktion</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
