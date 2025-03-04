
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
                  Unser Ansatz
                </span>
                <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                  Ein nachhaltiges zweites Leben für <br />
                  <span className="font-medium">Weinfässer</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Jedes VINLIGNA-Stück wird aus recycelten Barrique-Fässern gefertigt und gibt dem edlen Eichenholz ein zweites Leben. Jedes Möbelstück erzählt eine Geschichte – von Zeit, von Wein und von zeitloser Eleganz.
                </p>
                <p className="text-muted-foreground mb-6">
                  Ob es sich um eine maßgeschneiderte Weinbar für ein Hotel oder einen besonderen Esstisch für einen privaten Weinliebhaber handelt, VINLIGNA verkörpert sowohl Luxus als auch Nachhaltigkeit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <FeatureCard 
                    title="Authentische Handwerkskunst" 
                    description="Jedes Stück wird von erfahrenen Handwerkern gefertigt" 
                  />
                  <FeatureCard 
                    title="Nachhaltige Eleganz" 
                    description="Upcycling gealterter Barrique-Fässer in zeitlose Designs" 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <FeatureCard 
                    title="100% Individualisierbar" 
                    description="Von der Holzoberfläche bis zur Gravur Ihres Logos" 
                  />
                  <FeatureCard 
                    title="Designed to Impress" 
                    description="Ob im gehobenen Restaurant oder in Ihrer privaten Weinlounge" 
                  />
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="/about-main.jpg" 
                  alt="Handcrafted wine barrel furniture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl border border-white/20"
              >
                <img 
                  src="/about-detail.jpg" 
                  alt="Barrel detail craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-oak rounded-full opacity-10 blur-3xl"></div>
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
