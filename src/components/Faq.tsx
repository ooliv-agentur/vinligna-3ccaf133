
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-oak/10">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
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
          <div className="text-muted-foreground">
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
      question: "Was sind Möbel aus Weinfässern?",
      answer: "Möbel aus Weinfässern sind handgefertigte Unikate, die aus recycelten Barrique-Fässern gefertigt werden. Sie bringen den Charakter und die Geschichte des Weins in Ihr Zuhause und verbinden rustikalen Charme mit exklusivem Design."
    },
    {
      question: "Welche Möbel aus Weinfässern gibt es bei VinLigna?",
      answer: "Unser Sortiment umfasst Tische, Stühle, Regale, Sideboards und Dekorationsartikel. Jedes Stück wird nach Ihren Wünschen gestaltet und kann perfekt in Weinkeller, Wohnräume oder Esszimmer integriert werden."
    },
    {
      question: "Warum sind Möbel aus Weinfässern nachhaltig?",
      answer: "Unsere Möbel entstehen durch Upcycling alter Weinfässer, die sonst entsorgt würden. So erhalten sie ein zweites Leben als stilvolle Designmöbel und tragen zur Ressourcenschonung und Nachhaltigkeit bei."
    },
    {
      question: "Sind Möbel aus Weinfässern für den Außenbereich geeignet?",
      answer: "Ja! Einige unserer Möbel sind für den Garten oder die Terrasse konzipiert. Sie erhalten eine spezielle wetterfeste Versiegelung, um sie vor Feuchtigkeit und UV-Strahlung zu schützen."
    },
    {
      question: "Kann ich Möbel aus meinem eigenen Weinfass anfertigen lassen?",
      answer: "Ja, wir bieten individuelle Maßanfertigungen an. Wenn Sie ein besonderes Fass besitzen, können wir daraus ein einzigartiges Möbelstück für Ihren Weinkeller oder Wohnbereich gestalten."
    },
    {
      question: "Wie werden Möbel aus Weinfässern behandelt, um langlebig zu sein?",
      answer: "Unsere Möbel werden mit hochwertigen Ölen und Lacken veredelt, um das Holz zu schützen. Die ursprüngliche Maserung bleibt erhalten und sorgt für die unverwechselbare Optik."
    },
    {
      question: "Sind Möbel aus Weinfässern ein gutes Geschenk für Weinliebhaber?",
      answer: "Definitiv! Neben großen Möbelstücken bieten wir auch Accessoires wie Weinkühler, Schneidbretter und Kerzenhalter an – perfekte Geschenkideen für alle, die Wein und außergewöhnliches Design lieben."
    },
    {
      question: "Passen Möbel aus Weinfässern zu modernen Wohnstilen?",
      answer: "Ja! Unsere Möbel kombinieren rustikales Eichenholz mit modernem Design. Sie lassen sich perfekt in elegante Wohnräume, minimalistische Einrichtungen oder gemütliche Weinkeller integrieren."
    },
    {
      question: "Wie kann ich Möbel aus Weinfässern bei VinLigna bestellen?",
      answer: "Kontaktieren Sie uns für eine individuelle Beratung! Wir gestalten Ihr Wunschmöbel nach Maß und liefern es direkt zu Ihnen nach Hause."
    },
    {
      question: "Woher stammen die Weinfässer für die Möbel?",
      answer: "Unsere Barrique-Fässer stammen von renommierten Weingütern, in denen sie jahrelang zur Weinreifung genutzt wurden. Jede Holzmaserung erzählt eine Geschichte und macht jedes Möbelstück einzigartig."
    }
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
