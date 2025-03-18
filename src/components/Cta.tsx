
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Cta = () => {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-oak-dark/90 to-foreground/95 bg-fixed"
        />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/28b41d24-990f-4d58-b8b7-26195a6320cd.png')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-white"
            >
              <div className="w-16 h-1 bg-wine mb-8 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight tracking-wide text-foreground dark:text-white">
                Unsere <span className="font-medium italic">Philosophie</span>
              </h2>
              
              <div className="space-y-6 relative">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-white/90 text-lg leading-relaxed"
                >
                  Unsere Philosophie basiert auf der Überzeugung, dass höchste Leistung
                  zu einem fairen Preis nur durch offenen und ehrlichen Umgang
                  miteinander erreicht werden kann.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-white/90 text-lg leading-relaxed"
                >
                  Im Zentrum unserer Arbeit stehen Sie
                  und Ihre individuellen Ideen und Wünsche. Wir hören Ihnen zu, tauschen
                  uns über die Möglichkeiten aus und sind offen für Ihre speziellen
                  Lösungen.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-white/90 text-lg leading-relaxed"
                >
                  Unser Ziel ist es, durch die Bündelung unserer Ideen und
                  Fähigkeiten das beste Ergebnis zu erzielen. Diese Werte leben wir in
                  jedem Projekt, denn Ihre Zufriedenheit ist unser Antrieb.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mx-auto max-w-md lg:max-w-full"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <PhilosophyCard 
                  title="Kommunikation"
                  description="Offener Dialog und ehrliche Beratung in jedem Schritt des Prozesses"
                  delay={0.1}
                  className="col-span-2"
                />
                <PhilosophyCard 
                  title="Maßarbeit"
                  description="Individuelle Lösungen nach Ihren speziellen Wünschen"
                  delay={0.2}
                />
                <PhilosophyCard 
                  title="Nachhaltigkeit"
                  description="Upcycling mit Respekt für die Ressourcen und Tradition"
                  delay={0.3}
                />
                <PhilosophyCard 
                  title="Vertrauen"
                  description="Transparente Prozesse für langfristige Kundenbeziehungen"
                  delay={0.4}
                  className="col-span-2"
                />
              </div>
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-wine/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-oak/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PhilosophyCardProps {
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const PhilosophyCard = ({ title, description, delay, className }: PhilosophyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300",
        "border border-white/10 hover:border-white/30 group",
        "bg-gradient-to-br from-white/5 to-white/10",
        className
      )}
    >
      <h3 className="text-xl font-medium mb-2 text-white group-hover:text-wine transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export default Cta;
