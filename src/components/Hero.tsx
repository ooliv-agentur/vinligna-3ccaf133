
import { motion } from 'framer-motion';
import { ArrowRight, Building, Wine } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png"
          alt="Weinfass-Workshop mit historischer Wandkunst"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - dunkler oben, heller unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-3 py-1 bg-wine-light/90 backdrop-blur-sm text-oak-dark text-xs tracking-widest uppercase rounded-full"
        >
          Nachhaltige Eleganz
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight"
        >
          Exklusive Fassmöbel aus <br className="hidden md:block" />
          <span className="font-medium">recycelten Weinfässern</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8"
        >
          Wir verwandeln gebrauchte Barrique-Fässer in elegante, einzigartige Möbelstücke, die Tradition, Handwerkskunst und Nachhaltigkeit nahtlos miteinander verbinden.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-16"
        >
          <CustomerButton 
            href="#business"
            title="Für Weingüter & Gastronomie"
            description="Maßgeschneiderte Lösungen für Weingüter & Hotellerie"
            icon={<Building className="w-6 h-6" />}
            variant="business"
          />
          
          <CustomerButton 
            href="#private"
            title="Für Weinliebhaber"
            description="Exklusive Möbel für Weinenthusiasten"
            icon={<Wine className="w-6 h-6" />}
            variant="private"
          />
        </motion.div>

        {/* Scroll indicator - Repositioned above the fold */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scrollen Sie, um mehr zu entdecken</span>
          <div className="w-0.5 h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CustomerButtonProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'business' | 'private';
}

const CustomerButton = ({ href, title, description, icon, variant }: CustomerButtonProps) => {
  return (
    <a 
      href={href}
      className={cn(
        "group relative flex flex-col items-start text-left p-6 md:p-8 rounded-lg transition-all duration-300 hover-lift overflow-hidden border w-full max-w-md",
        variant === 'business' 
          ? "bg-foreground/90 backdrop-blur-sm text-background border-foreground/20" 
          : "bg-wine/90 backdrop-blur-sm text-white border-wine/20"
      )}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={cn(
          "rounded-full p-2",
          variant === 'business' ? "bg-background/10" : "bg-white/10"
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      <div className="mt-auto flex items-center text-sm font-medium">
        <span>Mehr erfahren</span>
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
};

export default Hero;
