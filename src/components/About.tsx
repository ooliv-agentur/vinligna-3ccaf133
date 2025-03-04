
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-oak-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
                  Die Philosophie hinter VINLIGNA
                </span>
                <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                  Exquisite Weinkultur für <br />
                  <span className="font-medium">Unternehmen und Privathaushalte</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  In jedem VINLIGNA-Stück vereinen sich Jahrhunderte alte Tradition mit modernem Design. Wir verwandeln ausgediente Barrique-Fässer in edle Möbelkunstwerke und bewahren dabei die Geschichte und den Charakter des Holzes, das einst edle Weine beherbergte.
                </p>
                <p className="text-muted-foreground mb-6">
                  Unsere Möbel erzählen Geschichten von Weinbergen, Kellereien und Reifeprozessen. Sie bringen die Seele des Weins in Ihr Zuhause oder Unternehmen – als Ausdruck Ihrer Leidenschaft für Wein und exklusives Design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <FeatureCard 
                    title="Traditionelle Handwerkskunst" 
                    description="Von Meistern gefertigt, die die Seele des Holzes verstehen" 
                  />
                  <FeatureCard 
                    title="Luxuriöses Upcycling" 
                    description="Eine nachhaltige Transformation von Weinfässern zu Designobjekten" 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            </div>

            <div className="relative h-[600px] md:h-[650px]">
              {/* Main image with larger size */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute z-10 w-[85%] h-[70%] top-0 right-0 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
              >
                <img 
                  src="/lovable-uploads/7d68f803-8997-4648-9249-af03963b23eb.png" 
                  alt="VINLIGNA Handwerkerteam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
              </motion.div>
              
              {/* Secondary image, positioned differently */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-0 bottom-0 w-[60%] h-[45%] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 z-20"
              >
                <img 
                  src="/lovable-uploads/e0b43253-a61b-417b-ae4e-62e3d7bc17d1.png" 
                  alt="Barrel detail craftsmanship" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/3 right-1/4 w-32 h-32 bg-wine/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 left-1/4 w-40 h-40 bg-oak/20 rounded-full blur-3xl"></div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -z-10 w-full h-full bg-gradient-to-br from-oak-light/20 via-transparent to-wine-light/30 rounded-3xl"
              ></motion.div>
            </div>
          </div>
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
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-oak/20 flex-1">
    <h3 className="font-medium text-base mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default About;
