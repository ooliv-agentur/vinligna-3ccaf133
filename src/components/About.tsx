
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const About = () => {
  return (
    <section id="about" className="py-32 md:py-44 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-6">
                Die Philosophie hinter VINLIGNA
              </span>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Exquisite Weinkultur für <br />
                <span className="font-medium bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent">Unternehmen und Privathaushalte</span>
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                In jedem VINLIGNA-Stück vereinen sich Jahrhunderte alte Tradition mit modernem Design. Wir verwandeln ausgediente Barrique-Fässer in edle Möbelkunstwerke und bewahren dabei die Geschichte und den Charakter des Holzes, das einst edle Weine beherbergte.
              </p>
              <p className="text-white/80 mb-10 text-lg">
                Unsere Möbel erzählen Geschichten von Weinbergen, Kellereien und Reifeprozessen. Sie bringen die Seele des Weins in Ihr Zuhause oder Unternehmen – als Ausdruck Ihrer Leidenschaft für Wein und exklusives Design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <FeatureCard 
                  title="Traditionelle Handwerkskunst" 
                  description="Von Meistern gefertigt, die die Seele des Holzes verstehen" 
                />
                <FeatureCard 
                  title="Luxuriöses Upcycling" 
                  description="Eine nachhaltige Transformation von Weinfässern zu Designobjekten" 
                />
                <FeatureCard 
                  title="Persönliche Designberatung" 
                  description="Maßgeschneiderte Lösungen für Ihren individuellen Geschmack" 
                />
                <FeatureCard 
                  title="Limitierte Stücke" 
                  description="Exklusive Einzelstücke mit einzigartigem Charakter" 
                />
              </div>
            </motion.div>

            <div className="relative h-[600px] md:h-[650px]">
              {/* Main image with larger size */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute z-10 w-[85%] h-[70%] top-0 right-0 rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/lovable-uploads/7d68f803-8997-4648-9249-af03963b23eb.png" 
                  alt="VINLIGNA Handwerkerteam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
              
              {/* Secondary image, positioned differently */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-0 bottom-0 w-[60%] h-[45%] rounded-xl overflow-hidden shadow-2xl z-20"
              >
                <img 
                  src="/lovable-uploads/e0b43253-a61b-417b-ae4e-62e3d7bc17d1.png" 
                  alt="Barrel detail craftsmanship" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
              </motion.div>
              
              {/* Background decorative element */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -z-10 w-full h-full top-10 -right-10 border-2 border-wine/30 rounded-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <motion.div 
    variants={scaleIn}
    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
  >
    <h3 className="font-medium text-lg mb-2 text-white">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

export default About;
