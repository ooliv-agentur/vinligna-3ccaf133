
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
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

const BusinessFaq = () => {
  const faqs: FaqItemProps[] = [
    {
      question: "Was sind Weinfass Möbel und warum eignen sie sich für Gastronomie und Hotellerie?",
      answer: "Weinfass Möbel sind maßgefertigte Möbelstücke aus recycelten Barrique-Fässern, die in Weingütern zur Weinreifung genutzt wurden. Sie schaffen eine authentische, stilvolle Atmosphäre in Restaurants, Vinotheken und Hotels und unterstreichen das exklusive Ambiente."
    },
    {
      question: "Welche Vorteile bieten Weinfass Möbel für Weingüter und Gastronomiebetriebe?",
      answer: "Unsere Weinfass Möbel sind robust, langlebig und individuell anpassbar. Sie bieten eine edle Optik, unterstreichen das Thema Wein und setzen Ihre Räumlichkeiten stilvoll in Szene – ob als Theke, Tisch oder Präsentationsmöbel."
    },
    {
      question: "Kann VinLigna Möbel aus meinen eigenen Weinfässern fertigen?",
      answer: "Ja! Wir können Ihre nicht mehr genutzten Weinfässer in individuelle Möbelstücke verwandeln. Auf Wunsch versehen wir diese mit eingebrannten Logos oder Markenzeichen, um Ihre Markenidentität zu stärken."
    },
    {
      question: "Welche Weinfass Möbel sind besonders beliebt für Vinotheken und Restaurants?",
      answer: "Besonders gefragt sind maßgefertigte Tische, Theken, Barhocker und Weinregale. Sie vereinen Design und Funktionalität und schaffen eine stilvolle Umgebung für Weinverkostungen oder Restaurantbesuche."
    },
    {
      question: "Sind Weinfass Möbel für den intensiven Gastronomiebetrieb geeignet?",
      answer: "Ja! Unsere Möbel werden aus hochwertigem Eichenholz gefertigt, das extrem widerstandsfähig ist. Zusätzlich erhalten die Oberflächen eine schützende Endveredelung, die sie für den täglichen Gebrauch robust macht."
    },
    {
      question: "Können Weinfass Möbel für den Außenbereich eingesetzt werden?",
      answer: "Ja, wir bieten speziell behandelte Terrassenmöbel aus Weinfässern an. Diese sind wetterfest versiegelt und ideal für den Einsatz in Außenbereichen von Restaurants, Weingütern oder Hotels."
    },
    {
      question: "Wie läuft der Bestellprozess für maßgefertigte Weinfass Möbel ab?",
      answer: "Nach Ihrer Anfrage beraten wir Sie zu Design, Material und Individualisierungsmöglichkeiten. Anschließend fertigt unser Team Ihr Möbelstück nach Ihren Vorgaben an und liefert es betriebsbereit aus."
    },
    {
      question: "Wie können Weinfass Möbel das Weinerlebnis für Gäste verbessern?",
      answer: "Unsere Möbel bringen die Geschichte des Weins in Ihre Räumlichkeiten. Sie sorgen für eine exklusive Atmosphäre, die Weinliebhaber begeistert und die Verbindung zwischen Wein, Handwerk und Design spürbar macht."
    },
    {
      question: "Wie kann ich sicherstellen, dass die Weinfass Möbel zu meinem Interieur passen?",
      answer: "Wir bieten eine Vielzahl an Farboptionen, Oberflächenbehandlungen und Kombinationen mit Glas oder Metall, sodass jedes Möbelstück optimal in Ihr Konzept integriert wird."
    },
    {
      question: "Warum sollte ich mich für VinLigna entscheiden?",
      answer: "VinLigna steht für handgefertigte Unikate aus echten Weinfässern, höchste Qualität und individuelle Anpassung. Wir kombinieren traditionelles Handwerk mit modernem Design und schaffen so maßgeschneiderte Lösungen für Weingüter, Restaurants und Hotels."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-oak-light/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
              Häufig gestellte Fragen
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Fragen zu <span className="font-medium">Weinfass-Möbeln</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren maßgefertigten Möbeln für Weingüter, Gastronomie und Hotellerie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-0"
          >
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </motion.div>
          
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
                <a href="mailto:info@vinligna.de" className="hover:text-wine transition-colors">info@vinligna.de</a>
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

export default BusinessFaq;
