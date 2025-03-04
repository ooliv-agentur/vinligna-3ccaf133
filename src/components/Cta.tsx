
import { motion } from 'framer-motion';
import { ArrowRight, Building, Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              Entdecken Sie unsere Lösungen für <span className="font-medium">Ihr individuelles Bedürfnis</span>
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              Wählen Sie zwischen unseren speziell entwickelten Angeboten für Geschäftskunden oder entdecken Sie exklusive Designs für private Weinliebhaber.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <CustomerCard 
                icon={<Building className="w-8 h-8" />}
                title="Für Weingüter & Gastronomie"
                description="Maßgeschneiderte Lösungen, die Ihre Marke stärken und ein unvergessliches Kundenerlebnis schaffen."
                buttonText="Geschäftslösungen entdecken"
                to="/business"
                variant="business"
              />
              
              <CustomerCard 
                icon={<Wine className="w-8 h-8" />}
                title="Für Weinliebhaber"
                description="Exklusive Designs, die Ihre Leidenschaft für Wein zum Ausdruck bringen und Ihr Zuhause bereichern."
                buttonText="Private Kollektionen ansehen"
                to="/private"
                variant="private"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CustomerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  to: string;
  variant: 'business' | 'private';
}

const CustomerCard = ({ icon, title, description, buttonText, to, variant }: CustomerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: variant === 'business' ? 0.1 : 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-b ${
        variant === 'business' 
          ? 'from-foreground/95 to-foreground/80' 
          : 'from-wine/95 to-wine/80'
      } p-8 text-white shadow-lg border border-white/10 hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -translate-y-8 translate-x-8">
        {icon}
      </div>
      
      <div className="relative z-10">
        <div className="mb-4 rounded-full p-3 inline-block bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
        
        <h3 className="text-2xl font-medium mb-3">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        
        <Link 
          to={to} 
          className={`inline-flex items-center justify-center text-sm font-medium rounded-lg px-6 py-3 transition-all duration-300 ${
            variant === 'business' 
              ? 'bg-background text-foreground hover:bg-background/90' 
              : 'bg-wine-light text-wine-dark hover:bg-wine-light/90'
          } group`}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Cta;
