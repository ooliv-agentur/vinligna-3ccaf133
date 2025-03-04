import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Table, Armchair, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Cta from '@/components/Cta';
import ScrollToTop from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';
import BusinessFaq from '@/components/BusinessFaq';
import TeamSection from '@/components/TeamSection';

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
            Weinfass Möbel für <br className="hidden md:block" />
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

      {/* About Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Über <span className="font-medium">VINLIGNA</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="prose prose-lg mx-auto mb-12"
            >
              <p>
                VINLIGNA bietet handgefertigte, exklusive Möbel aus recycelten Barrique-Fässern für Weingüter, Gastronomiebetriebe und die Hotellerie. Unser Ziel ist es, maßgeschneiderte Möbelstücke zu schaffen, die nicht nur einzigartig sind, sondern auch nachhaltig produziert werden. Durch die Wiederverwendung von edlen Eichenholz-Weinfässern verleihen wir Ihren Räumlichkeiten einen einzigartigen Charme und schaffen gleichzeitig ein exklusives Ambiente, das Ihre Gäste begeistern wird.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Products Section */}
      <section className="py-24 md:py-32 bg-oak-light/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24"
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
                Unsere Produkte
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Maßgeschneiderte <span className="font-medium">Weinfass-Möbel</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unsere Möbel sind vollständig individualisierbar und auf die speziellen Bedürfnisse von Weingütern, Restaurants und Hotels ausgerichtet.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <ProductCard 
                icon={<Table className="w-6 h-6" />}
                title="Tische und Theken"
                description="Unsere maßgefertigten Tische und Theken aus recycelten Barrique-Fässern vereinen Funktionalität und Eleganz. Diese Möbelstücke schaffen in Verkostungsräumen oder an Hotelbars eine stilvolle und authentische Atmosphäre."
                image="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png"
              />
              
              <ProductCard 
                icon={<Armchair className="w-6 h-6" />}
                title="Stühle und Sitzmöbel"
                description="Unsere handgefertigten Stühle und Barhocker bieten Komfort und Stabilität für den täglichen Gebrauch in gastronomischen Umgebungen, während sie gleichzeitig höchsten Komfort bieten."
                image="/lovable-uploads/87b6ac6c-025f-40d2-9b09-73f8ee6e25b8.png"
              />
              
              <ProductCard 
                icon={<Layers className="w-6 h-6" />}
                title="Weinregale und Präsentationsmöbel"
                description="Unsere maßgeschneiderten Regale bieten Ihnen die Möglichkeit, Ihre Weinauswahl stilvoll und übersichtlich zu präsentieren. Diese exklusiven Möbelstücke sind ein Highlight in jeder Vinothek."
                image="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 text-center"
            >
              <div className="bg-wine-light/10 rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-medium mb-4">Besonderheit für Winzer</h3>
                <p className="text-muted-foreground mb-0">
                  Für Winzer bieten wir die Möglichkeit, Möbel aus Ihren eigenen, nicht mehr genutzten Weinfässern fertigen zu lassen. Diese können auf Wunsch mit eingebrannten Logos oder individuellen Markenzeichen veredelt werden, sodass Ihre Gäste sofort die Verbindung zu Ihrem Weingut erkennen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
                Unser Produktionsprozess
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Vom Fass zum <span className="font-medium">Möbelstück</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie, wie wir hochwertige Barrique-Fässer in exklusive Möbelstücke für Ihr Unternehmen verwandeln.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep 
                number="01"
                title="Fassauswahl"
                description="Wir verwenden sorgfältig ausgewählte, alte Barrique-Fässer, die aus Weingütern stammen und für die Reifung von Wein verwendet wurden."
              />
              <ProcessStep 
                number="02"
                title="Verarbeitung"
                description="Die Fässer werden in Fassdauben zerlegt und von unseren Handwerkern zu einzigartigen Möbelstücken weiterverarbeitet."
              />
              <ProcessStep 
                number="03"
                title="Maßanfertigung"
                description="Jedes Möbelstück wird in enger Zusammenarbeit mit Ihnen entworfen und exakt an Ihre Anforderungen angepasst."
              />
              <ProcessStep 
                number="04"
                title="Endveredelung"
                description="Die fertigen Möbelstücke werden mit einem speziellen Finish versehen, das die natürliche Schönheit des Holzes hervorhebt."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 bg-oak-light/5 overflow-hidden">
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
                Ihre Vorteile
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                Vorteile für <span className="font-medium">Ihr Unternehmen</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie, warum VINLIGNA die erste Wahl für Weingüter, Gastronomiebetriebe und Hotels ist.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 lg:col-span-1">
                <div className="h-full">
                  <img 
                    src="/lovable-uploads/bb8a99d9-97f3-42b4-85ad-94d0c5d74fff.png" 
                    alt="Maßgefertigte Weinfass-Möbel" 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-1 space-y-6">
                <BenefitItem 
                  title="Individuelle Lösungen"
                  description="Jedes Möbelstück wird maßgefertigt, um perfekt in Ihre Räumlichkeiten zu passen und Ihren individuellen Stil widerzuspiegeln."
                />
                
                <BenefitItem 
                  title="Nachhaltigkeit und Upcycling"
                  description="Wir verwenden recycelte Weinfässer, die nicht mehr für die Weinproduktion genutzt werden. So entstehen aus alten Materialien neue, langlebige Möbelstücke."
                />
                
                <BenefitItem 
                  title="Exklusives Design"
                  description="Unsere Möbelstücke aus Barrique-Eichenholz bieten eine besondere Optik, die Ihren Betrieb aufwertet und ein Gefühl von Exklusivität und Tradition vermittelt."
                />
                
                <BenefitItem 
                  title="Langlebigkeit und Robustheit"
                  description="Das Eichenholz der Barrique-Fässer ist nicht nur ästhetisch ansprechend, sondern auch extrem robust und für den täglichen Einsatz in gastronomischen Betrieben ausgelegt."
                />
                
                <div className="pt-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors group"
                  >
                    <span>Verwandeln Sie Ihre Räumlichkeiten</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <BusinessFaq />

      <Cta />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

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

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ icon, title, description, image }: ProductCardProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col h-full"
  >
    <div className="relative h-56 overflow-hidden rounded-t-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="flex-1 p-6 bg-white rounded-b-lg border border-t-0 border-background/10 shadow-sm">
      <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </motion.div>
);

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="w-5 h-5 bg-wine rounded-full flex items-center justify-center">
        <Check className="text-white w-3 h-3" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-medium mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default BusinessPage;
