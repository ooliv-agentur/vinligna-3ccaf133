
import { motion } from 'framer-motion';

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
        <div className="max-w-screen-lg mx-auto text-center text-white mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Unsere <span className="font-medium">Philosophie</span>
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              Bei VINLIGNA verbinden wir Tradition mit Innovation. Jedes Fassmöbel erzählt eine Geschichte – 
              vom Weinberg über das Fass bis hin zu Ihrem Zuhause oder Unternehmen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Philosophy Points */}
          <PhilosophyPoint 
            title="Nachhaltigkeit"
            description="Wir geben jedem Barrique-Fass ein zweites Leben und schonen damit wertvolle Ressourcen."
            delay={0.1}
          />
          <PhilosophyPoint 
            title="Handwerkskunst"
            description="Jedes Möbelstück wird mit Sorgfalt und Liebe zum Detail von erfahrenen Handwerkern gefertigt."
            delay={0.2}
          />
          <PhilosophyPoint 
            title="Individualität"
            description="Ihre Wünsche und Ideen fließen in den Gestaltungsprozess ein, um einzigartige Möbel zu erschaffen."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

interface PhilosophyPointProps {
  title: string;
  description: string;
  delay: number;
}

const PhilosophyPoint = ({ title, description, delay }: PhilosophyPointProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
    >
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default Cta;
