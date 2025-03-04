
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Building, Wine, GlassWater } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Cta from '@/components/Cta';
import ScrollToTop from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';

const BusinessPage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });

    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Update page title and meta description for SEO
    document.title = "VINLIGNA | Maßgeschneiderte Weinfass-Möbel für Weingüter & Gastronomie";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Maßgefertigte, nachhaltige Weinfass-Möbel für Weingüter, Restaurants und Hotels. Werten Sie Ihren Geschäftsraum mit einzigartigen Unikaten auf.");
    }

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png"
            alt="Weinfass-Möbel für Weingüter und Gastronomie"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-3 py-1 bg-wine-light/90 backdrop-blur-sm text-oak-dark text-xs tracking-widest uppercase rounded-full"
          >
            Für Geschäftskunden
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight"
          >
            Maßgeschneiderte Weinfass-Möbel für <br className="hidden md:block" />
            <span className="font-medium">Weingüter, Gastronomie & Hotellerie</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8"
          >
            Werten Sie Ihre Räumlichkeiten mit individuell gefertigten Möbeln aus recycelten Weinfässern auf. Erzählen Sie die Geschichte Ihres Unternehmens durch zeitlose, nachhaltige Unikate.
          </motion.p>
        </div>
      </section>

      {/* Main Business Content */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Einzigartige Lösungen für <span className="font-medium">Ihre Branche</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unsere maßgefertigten Möbelstücke aus recycelten Weinfässern schaffen authentische Erlebnisse für Ihre Gäste und Kunden, während sie Ihre Markenidentität widerspiegeln.
              </p>
            </motion.div>

            {/* Industry Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <IndustrySolution 
                icon={<Wine className="w-6 h-6" />}
                title="Weingüter"
                description="Nutzen Sie die Verbindung zwischen Ihren Weinen und unseren Möbeln, um Ihren Verkostungsraum zu einem unvergesslichen Erlebnis zu machen."
                features={[
                  "Verkostungstheken aus Ihren eigenen Fässern",
                  "Individuelle Präsentationsmöbel",
                  "Authentische Sitzgelegenheiten für Verkostungen"
                ]}
              />
              
              <IndustrySolution 
                icon={<Building className="w-6 h-6" />}
                title="Restaurants & Hotels"
                description="Schaffen Sie eine einzigartige Atmosphäre, die Ihre Gäste begeistert und zum Wiederbesuch einlädt."
                features={[
                  "Theken und Bars mit Weingeschichte",
                  "Exklusive Tische für Weinproben",
                  "Stilvolle Raumteiler und Dekorationselemente"
                ]}
              />
              
              <IndustrySolution 
                icon={<GlassWater className="w-6 h-6" />}
                title="Weinhandel"
                description="Präsentieren Sie Ihre Weinauswahl in einem Ambiente, das die Wertigkeit Ihrer Produkte unterstreicht."
                features={[
                  "Präsentationsregale aus Fassdauben",
                  "Verkostungstische mit integrierter Geschichte",
                  "Authentische Verkaufsumgebung"
                ]}
              />
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <h3 className="text-2xl font-light mb-12 text-center">Vom Weinfass zum Unikat: <span className="font-medium">Unser Prozess</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <ProcessStep 
                  number="01"
                  title="Beratung & Konzeption"
                  description="Wir verstehen Ihre Bedürfnisse und entwickeln ein maßgeschneidertes Konzept für Ihre Räumlichkeiten."
                />
                <ProcessStep 
                  number="02"
                  title="Design & Planung"
                  description="Unsere Designer erstellen detaillierte Entwürfe, die Funktionalität und Ästhetik perfekt vereinen."
                />
                <ProcessStep 
                  number="03"
                  title="Handwerkliche Fertigung"
                  description="Erfahrene Handwerker verwandeln Weinfässer in einzigartige Möbelstücke mit präziser Detailarbeit."
                />
                <ProcessStep 
                  number="04"
                  title="Installation & Service"
                  description="Wir kümmern uns um die fachgerechte Installation und bieten langfristigen Support."
                />
              </div>
            </div>

            {/* Case Studies */}
            <div className="mt-24">
              <h3 className="text-2xl font-light mb-12 text-center">Erfolgreiche <span className="font-medium">Referenzprojekte</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CaseStudy 
                  image="/project-b2b-1.jpg"
                  title="Weinprobe-Theke"
                  client="Weingut Sonnenhof"
                  description="Maßgefertigte Verkostungstheke aus den eigenen Barrique-Fässern des renommierten Weinguts."
                />
                <CaseStudy 
                  image="/project-b2b-2.jpg"
                  title="Restaurant-Einrichtung"
                  client="Gourmet Restaurant EICHE"
                  description="Komplette Neugestaltung des Gastraums mit Tischen, Sitzmöbeln und einer zentralen Bar aus Weinfässern."
                />
                <CaseStudy 
                  image="/project-b2b-3.jpg"
                  title="Hotel-Empfangsbereich"
                  client="Weinhotel Rebenhof"
                  description="Markante Empfangstheke und Loungemöbel, die die Weinbautradition der Region widerspiegeln."
                />
              </div>

              <div className="text-center mt-12">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors group"
                >
                  <span>Jetzt unverbindlich beraten lassen</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Specifically for Business Customers */}
      <section className="py-20 bg-oak-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-center">Häufig gestellte <span className="font-medium">Fragen</span></h2>
            
            <div className="space-y-6">
              <FaqItem 
                question="Wie lange dauert es von der Bestellung bis zur Installation?"
                answer="Der gesamte Prozess von der ersten Beratung bis zur Installation dauert je nach Projektumfang und Komplexität zwischen 6 und 12 Wochen. Für Großprojekte erstellen wir einen detaillierten Zeitplan."
              />
              <FaqItem 
                question="Können wir unsere eigenen Weinfässer für die Möbel verwenden?"
                answer="Ja, wir verwenden gerne Ihre eigenen Fässer, um besonders authentische und mit Ihrer Geschichte verbundene Möbelstücke zu kreieren. Dies ist eine unserer Spezialitäten und wird besonders von Weingütern geschätzt."
              />
              <FaqItem 
                question="Gibt es besondere Pflegehinweise für die Weinfass-Möbel?"
                answer="Unsere Möbel sind für den professionellen Einsatz konzipiert und entsprechend robust verarbeitet. Wir liefern mit jedem Stück eine Pflegeanleitung und bieten einen Wartungsservice an, um die Langlebigkeit zu gewährleisten."
              />
              <FaqItem 
                question="Ist eine individuelle Anpassung an unser Corporate Design möglich?"
                answer="Selbstverständlich. Wir integrieren Ihre Markenidentität in das Design und können Logos, spezifische Farbschemata und andere Elemente Ihres Corporate Designs einarbeiten."
              />
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

interface IndustrySolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const IndustrySolution = ({ icon, title, description, features }: IndustrySolutionProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="p-6 bg-white rounded-lg shadow-sm border border-background/10 hover:shadow-md transition-shadow h-full flex flex-col"
  >
    <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground mb-5">{description}</p>
    <ul className="mt-auto space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-sm flex items-start">
          <span className="text-wine mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative"
  >
    <div className="text-4xl font-light text-wine/20 mb-4">{number}</div>
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
    
    {/* Connector line, only show for non-last items on desktop */}
    <div className="hidden md:block absolute top-8 right-0 h-[2px] w-1/2 bg-wine/10 -z-10 last:hidden"></div>
    <div className="hidden md:block absolute top-8 left-1/2 h-[2px] w-1/2 bg-wine/10 -z-10 first:hidden"></div>
  </motion.div>
);

interface CaseStudyProps {
  image: string;
  title: string;
  client: string;
  description: string;
}

const CaseStudy = ({ image, title, client, description }: CaseStudyProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-5 bg-white border-t">
      <h4 className="font-medium">{title}</h4>
      <p className="text-wine text-sm mb-2">{client}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-white rounded-lg p-5 shadow-sm"
  >
    <h4 className="font-medium mb-2">{question}</h4>
    <p className="text-sm text-muted-foreground">{answer}</p>
  </motion.div>
);

export default BusinessPage;
