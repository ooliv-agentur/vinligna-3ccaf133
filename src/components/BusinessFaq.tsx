
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeIn, staggerContainer } from '@/lib/motion';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{question}</span>
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
          <div className="text-white/70">
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
    <section id="faq" className="py-24 md:py-32 bg-black relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">
              Häufig gestellte Fragen
            </span>
            <h2 className="section-title text-white">
              Fragen zu <span className="highlight">Weinfass-Möbeln</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren maßgefertigten Möbeln für Weingüter, Gastronomie und Hotellerie.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          >
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFaq;
