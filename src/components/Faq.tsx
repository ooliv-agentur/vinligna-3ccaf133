
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Armchair, Recycle, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const FaqItem = ({ question, answer, icon }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-oak/10">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-wine">{icon}</div>}
          <span className="font-medium">{question}</span>
        </div>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-wine transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pl-10 text-muted-foreground">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs: FaqItemProps[] = [
    {
      question: "Was macht VinLigna-Fassmöbel besonders?",
      answer: "VinLigna fertigt exklusive Möbel aus recycelten Weinfässern, die individuell gestaltet werden können. Unser Sortiment umfasst Fassmöbel mit Türen, Tischplatten aus Glas oder Holz sowie spezielle Möbel für den Terrassenbereich.",
      icon: <Armchair size={20} />
    },
    {
      question: "Welche Arten von Fassmöbeln gibt es bei VinLigna?",
      answer: "Wir bieten eine breite Auswahl, darunter Tische, Stühle, Regale, Sideboards, MiniBars, Weinschränke und Deko-Objekte. Besonders beliebt sind unsere maßgefertigten Fassmöbel für den Außenbereich.",
      icon: <Armchair size={20} />
    },
    {
      question: "Sind VinLigna-Fassmöbel wetterfest und für den Außenbereich geeignet?",
      answer: "Ja! Unsere Terrassenmöbel aus Weinfässern sind speziell behandelt, um wetterfest zu sein. Sie sind ideal für Gärten, Balkone oder Vinotheken mit Außenbereich.",
      icon: <HelpCircle size={20} />
    },
    {
      question: "Kann ich mein eigenes Weinfass in ein Möbelstück verwandeln lassen?",
      answer: "Ja! VinLigna bietet individuelle Anfertigungen, bei denen wir Ihr eigenes Weinfass zu einem Tisch, Schrank oder einer MiniBar umgestalten – mit Wunschgravur oder speziellen Farben.",
      icon: <HelpCircle size={20} />
    },
    {
      question: "Welche Designoptionen gibt es für Fassmöbel?",
      answer: "Unsere Kunden können zwischen Glas- oder Holzplatten für Tische, speziellen Lackierungen, Beiztönen und Metallakzenten wählen. Auch Fassmöbel mit Türen oder Schubladen sind möglich.",
      icon: <Armchair size={20} />
    },
    {
      question: "Warum sind Fassmöbel ein stilvolles Dekorationselement?",
      answer: "Fassmöbel bringen Charakter und Exklusivität in jeden Raum. Durch ihre markante Maserung und die Geschichte des Eichenholzes schaffen sie eine warme, stilvolle Atmosphäre.",
      icon: <Armchair size={20} />
    },
    {
      question: "Sind Fassmöbel nachhaltig?",
      answer: "Ja! Wir verwenden recycelte Barrique-Fässer und geben ihnen ein zweites Leben als langlebige Designmöbel. So entsteht hochwertiges Upcycling, das Ressourcen schont.",
      icon: <Recycle size={20} />
    },
    {
      question: "Wie pflege ich VinLigna-Fassmöbel richtig?",
      answer: "Unsere Möbel sind pflegeleicht: Ein weiches Tuch reicht für die Reinigung. Holzöl oder Wachs sorgt für zusätzlichen Schutz und betont die natürliche Maserung.",
      icon: <HelpCircle size={20} />
    },
    {
      question: "Wie kann ich ein individuelles Fassmöbelstück bestellen?",
      answer: "Kontaktieren Sie uns und teilen Sie Ihre Wünsche mit! Wir beraten Sie zur Größe, Holzart, Veredelung und individuellen Details und fertigen Ihr persönliches Möbelstück an.",
      icon: <Phone size={20} />
    },
    {
      question: "Wo kann ich VinLigna-Fassmöbel kaufen?",
      answer: "Unsere Möbel erhalten Sie direkt bei VinLigna. Kontaktieren Sie uns für eine unverbindliche Beratung und entdecken Sie unsere maßgefertigten Fassmöbel für Wohnräume, Gastronomie und den Außenbereich.",
      icon: <MapPin size={20} />
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-oak-light/10">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
              HÄUFIG GESTELLTE FRAGEN
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Alles über unsere <span className="font-medium">Fassmöbel</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren exklusiven Möbeln aus recycelten Weinfässern.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-0"
            >
              {faqs.slice(0, 5).map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-0"
            >
              {faqs.slice(5, 10).map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 pt-6 border-t border-oak/10 max-w-lg mx-auto text-center"
          >
            <h3 className="text-xl font-medium mb-6">Kontakt</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-wine"/>
                VinLignum Holzmanufaktur GmbH & Co. KG
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-wine invisible"/>
                Industriestraße 19, 67821 Alsenz
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-wine"/>
                <a href="mailto:info@vinligna.com" className="hover:text-wine transition-colors">info@vinligna.com</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone size={18} className="text-wine"/>
                <a href="tel:+4963623094990" className="hover:text-wine transition-colors">+49 6362 309 49 90</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
