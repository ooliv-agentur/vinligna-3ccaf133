
import { motion } from 'framer-motion';
import { ArrowRight, Building, Wine, Sparkles, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-screen-lg mx-auto text-center text-white mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Entdecken Sie unsere Lösungen für <span className="font-medium">Ihr individuelles Bedürfnis</span>
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              Wählen Sie zwischen unseren speziell entwickelten Angeboten für Geschäftskunden oder entdecken Sie exklusive Designs für private Weinliebhaber.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Business Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full"
          >
            <div className="relative h-full rounded-xl overflow-hidden group cursor-pointer bg-foreground/80 hover:bg-foreground/70 transition-all duration-300 shadow-xl border border-white/10">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-300">
                <img 
                  src="/lovable-uploads/50941805-7198-4381-a214-435f243a45b4.png" 
                  alt="Weingut mit Fassmöbeln" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-foreground/40" />
              </div>
              
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-white">Für Weingüter & Gastronomie</h3>
                  <p className="text-white/80 mb-6">Maßgeschneiderte Lösungen, die Ihre Marke stärken und ein unvergessliches Kundenerlebnis schaffen.</p>
                  
                  <div className="space-y-4 mb-8">
                    <FeatureItem icon={<Sparkles className="w-5 h-5" />} text="Markenindividuelle Anpassungen" />
                    <FeatureItem icon={<Leaf className="w-5 h-5" />} text="Nachhaltige Unternehmensrepräsentation" />
                    <FeatureItem icon={<Wine className="w-5 h-5" />} text="Exklusive Weinpräsentationsmöbel" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to="/business" 
                    className="inline-flex items-center justify-center text-sm font-medium rounded-lg px-6 py-3 transition-all duration-300 bg-background text-foreground hover:bg-background/90 group w-full md:w-auto"
                  >
                    <span>Geschäftslösungen entdecken</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Private Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full"
          >
            <div className="relative h-full rounded-xl overflow-hidden group cursor-pointer bg-wine/80 hover:bg-wine/70 transition-all duration-300 shadow-xl border border-white/10">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-300">
                <img 
                  src="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png" 
                  alt="Privates Wohnzimmer mit Fassmöbeln" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/90 to-wine/40" />
              </div>
              
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                    <Wine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-white">Für Weinliebhaber</h3>
                  <p className="text-white/80 mb-6">Exklusive Designs, die Ihre Leidenschaft für Wein zum Ausdruck bringen und Ihr Zuhause bereichern.</p>
                  
                  <div className="space-y-4 mb-8">
                    <FeatureItem icon={<Sparkles className="w-5 h-5" />} text="Einzigartige Einzelstücke" />
                    <FeatureItem icon={<Leaf className="w-5 h-5" />} text="Nachhaltige Wohnraumgestaltung" />
                    <FeatureItem icon={<Wine className="w-5 h-5" />} text="Stilvolle Weinaufbewahrung" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to="/private" 
                    className="inline-flex items-center justify-center text-sm font-medium rounded-lg px-6 py-3 transition-all duration-300 bg-wine-light text-wine-dark hover:bg-wine-light/90 group w-full md:w-auto"
                  >
                    <span>Private Kollektionen ansehen</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 rounded-full bg-white/10 p-1.5">
        {icon}
      </div>
      <p className="text-white/90">{text}</p>
    </div>
  );
};

export default Cta;
