
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

const AboutSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-white">
              Über <span className="text-gradient">VINLIGNA</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-lg prose-invert mx-auto mb-12"
          >
            <p className="text-white/80">
              VINLIGNA bietet handgefertigte, exklusive Möbel aus recycelten Barrique-Fässern für Weingüter, Gastronomiebetriebe und die Hotellerie. Unser Ziel ist es, maßgeschneiderte Möbelstücke zu schaffen, die nicht nur einzigartig sind, sondern auch nachhaltig produziert werden. Durch die Wiederverwendung von edlen Eichenholz-Weinfässern verleihen wir Ihren Räumlichkeiten einen einzigartigen Charme und schaffen gleichzeitig ein exklusives Ambiente, das Ihre Gäste begeistern wird.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
