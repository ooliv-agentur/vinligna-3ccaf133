
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      variants={fadeIn}
      className="border-b border-white/10"
    >
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-white">{question}</span>
        <ChevronDown 
          className={cn(
            "h-6 w-6 text-wine transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-white/70 text-lg">
            {answer}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Faq = () => {
  const faqs: FaqItemProps[] = [
    {
      question: "Was macht VINLIGNA-Fassmöbel besonders?",
      answer: "VINLIGNA fertigt exklusive Möbel aus recycelten Weinfässern, die individuell gestaltet werden können. Unser Sortiment umfasst Fassmöbel mit Türen, Tischplatten aus Glas oder Holz sowie spezielle Möbel für den Terrassenbereich."
    },
    {
      question: "Welche Arten von Fassmöbeln gibt es bei VINLIGNA?",
      answer: "Wir bieten eine breite Auswahl, darunter Tische, Stühle, Regale, Sideboards, MiniBars, Weinschränke und Deko-Objekte. Besonders beliebt sind unsere maßgefertigten Fassmöbel für den Außenbereich."
    },
    {
      question: "Sind VINLIGNA-Fassmöbel wetterfest und für den Außenbereich geeignet?",
      answer: "Ja! Unsere Terrassenmöbel aus Weinfässern sind speziell behandelt, um wetterfest zu sein. Sie sind ideal für Gärten, Balkone oder Vinotheken mit Außenbereich."
    },
    {
      question: "Kann ich mein eigenes Weinfass in ein Möbelstück verwandeln lassen?",
      answer: "Ja! VINLIGNA bietet individuelle Anfertigungen, bei denen wir Ihr eigenes Weinfass zu einem Tisch, Schrank oder einer MiniBar umgestalten – mit Wunschgravur oder speziellen Farben."
    },
    {
      question: "Welche Designoptionen gibt es für Fassmöbel?",
      answer: "Unsere Kunden können zwischen Glas- oder Holzplatten für Tische, speziellen Lackierungen, Beiztönen und Metallakzenten wählen. Auch Fassmöbel mit Türen oder Schubladen sind möglich."
    },
    {
      question: "Warum sind Fassmöbel ein stilvolles Dekorationselement?",
      answer: "Fassmöbel bringen Charakter und Exklusivität in jeden Raum. Durch ihre markante Maserung und die Geschichte des Eichenholzes schaffen sie eine warme, stilvolle Atmosphäre."
    },
    {
      question: "Sind Fassmöbel nachhaltig?",
      answer: "Ja! Wir verwenden recycelte Barrique-Fässer und geben ihnen ein zweites Leben als langlebige Designmöbel. So entsteht hochwertiges Upcycling, das Ressourcen schont."
    },
    {
      question: "Wie pflege ich VINLIGNA-Fassmöbel richtig?",
      answer: "Unsere Möbel sind pflegeleicht: Ein weiches Tuch reicht für die Reinigung. Holzöl oder Wachs sorgt für zusätzlichen Schutz und betont die natürliche Maserung."
    },
    {
      question: "Wie kann ich ein individuelles Fassmöbelstück bestellen?",
      answer: "Kontaktieren Sie uns und teilen Sie Ihre Wünsche mit! Wir beraten Sie zur Größe, Holzart, Veredelung und individuellen Details und fertigen Ihr persönliches Möbelstück an."
    },
    {
      question: "Wo kann ich VINLIGNA-Fassmöbel kaufen?",
      answer: "Unsere Möbel erhalten Sie direkt bei VINLIGNA. Kontaktieren Sie uns für eine unverbindliche Beratung und entdecken Sie unsere maßgefertigten Fassmöbel für Wohnräume, Gastronomie und den Außenbereich. 📞 Kontakt: 📍 VinLignum Holzmanufaktur GmbH & Co. KG 📍 Industriestraße 19, 67821 Alsenz 📧 info@vinligna.de 📞 +49 6362 309 49 90"
    }
  ];

  return (
    <section id="faq" className="py-32 md:py-44 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-6">
              HÄUFIG GESTELLTE FRAGEN
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Alles über unsere <span className="font-medium bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent">Fassmöbel</span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren exklusiven Möbeln aus recycelten Weinfässern.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-0">
              {faqs.slice(0, 5).map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
            
            <div className="space-y-0">
              {faqs.slice(5).map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
          </motion.div>

          {/* Call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center text-wine hover:text-wine-light transition-colors cursor-pointer group">
              <span className="text-lg">Weitere Informationen anfragen</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
                className="ml-2"
              >
                <ArrowRight size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
