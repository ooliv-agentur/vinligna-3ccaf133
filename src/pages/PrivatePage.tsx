import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Wine, Heart, ShieldCheck, Table, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import TeamSection from '@/components/TeamSection';
import ProductGallery from '@/components/ProductGallery';
import Faq from '@/components/Faq';
import ProductionProcess from '@/components/ProductionProcess';
import { cn } from '@/lib/utils';

const PrivatePage = () => {
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
    document.title = "VINLIGNA | Möbel aus Weinfässern – Handgefertigte Unikate für Weinliebhaber";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Entdecken Sie exklusive Möbel aus recycelten Barrique-Fässern. Handgefertigte Unikate für Weinliebhaber, die Nachhaltigkeit und Luxus vereinen. Maßanfertigung nach Ihren Wünschen.");
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
            alt="Möbel aus Weinfässern – Handgefertigte Unikate für Weinliebhaber"
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
            Für Weinliebhaber
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight"
          >
            Möbel aus Weinfässern – <br className="hidden md:block" />
            <span className="font-medium">Handgefertigte Unikate für Weinliebhaber</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8"
          >
            Bringen Sie die Eleganz und Geschichte der Weinkultur in Ihr Zuhause mit unseren handgefertigten Unikaten, die Nachhaltigkeit und Luxus vereinen.
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
                Über <span className="font-medium">uns</span>
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
                Bei VINLIGNA stehen exklusive Möbelstücke im Fokus, die aus recycelten Barrique-Fässern gefertigt werden. Unsere Möbel sind mehr als nur Einrichtungsgegenstände – sie sind ein Ausdruck Ihrer Leidenschaft für Wein und gehobenes Design. Jedes Stück erzählt die Geschichte des Weins, der einst in den Fässern reifte, und bringt diese Geschichte in Ihr Zuhause.
              </p>
              <p>
                Unsere Möbel vereinen Nachhaltigkeit und Luxus und sind handgefertigte Unikate, die nach Ihren individuellen Wünschen gefertigt werden. Ob im Weinkeller, im Esszimmer oder im Wohnbereich – VINLIGNA-Möbel sind für Menschen gemacht, die das Besondere suchen und ihr Zuhause stilvoll gestalten wollen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-wine-light/10 rounded-lg p-8 text-center"
            >
              <h3 className="text-xl font-medium mb-4">Nachhaltigkeit trifft auf Luxus</h3>
              <p className="text-muted-foreground">
                VINLIGNA verbindet nachhaltiges Design mit zeitloser Eleganz. Die Barrique-Fässer, die wir verwenden, stammen aus renommierten Weingütern und wurden zuvor zur Reifung edler Weine verwendet. Jedes Möbelstück ist ein handgefertigtes Unikat, das die Schönheit des Weins in Ihren Wohnraum bringt und die Geschichte des Weins bewahrt.
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
                Handgefertigte <span className="font-medium">Unikate</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unsere Möbel sind zu 100% individualisierbar und werden speziell nach Ihren Wünschen gefertigt. Egal, ob Sie ein Einzelstück für Ihren Weinkeller oder ein elegantes Interieur für Ihr Wohnzimmer suchen – bei VINLIGNA finden Sie die perfekte Lösung.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <ProductCategory 
                icon={<Table className="w-6 h-6" />}
                title="Tische aus Fassdauben"
                description="Unsere handgefertigten Tische bringen den Charme und die Geschichte des Weins in Ihr Zuhause. Jeder Tisch ist ein Unikat, gefertigt aus recycelten Weinfässern, die zuvor für die Reifung edler Weine verwendet wurden. Die rustikale, aber elegante Ästhetik dieser Möbelstücke macht sie ideal für Weinverkostungen oder gesellige Abende."
                image="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png"
              />
              
              <ProductCategory 
                icon={<BookOpen className="w-6 h-6" />}
                title="Sideboards und Regale"
                description="Unsere maßgefertigten Sideboards und Regale vereinen Ästhetik und Funktionalität. Sie bieten nicht nur Stauraum, sondern setzen auch stilvolle Akzente in Ihrem Zuhause. Die natürliche Maserung des Eichenholzes sorgt dafür, dass jedes Möbelstück einzigartig ist."
                image="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
              />
              
              <ProductCategory 
                icon={<Table className="w-6 h-6" />}
                title="Stühle und Sitzmöbel"
                description="Unsere Stühle und Barhocker aus Fassdauben verbinden Komfort mit einem unverwechselbaren Design. Jedes Möbelstück erzählt die Geschichte des Weins und verleiht Ihrem Raum eine warme, einladende Atmosphäre."
                image="/lovable-uploads/87b6ac6c-025f-40d2-9b09-73f8ee6e25b8.png"
              />
              
              <ProductCategory 
                icon={<Wine className="w-6 h-6" />}
                title="Accessoires und Geschenkartikel"
                description="Neben Möbelstücken bieten wir auch eine Auswahl an kleineren Accessoires, die sich perfekt als stilvolle Dekoration oder als Geschenke für Weinliebhaber eignen. Jedes Accessoire wird aus recycelten Weinfässern gefertigt und verleiht Ihrem Zuhause das gewisse Etwas."
                image="/lovable-uploads/ccaefbf7-98fe-4699-a949-fd82a00ba26d.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />
      
      {/* Process Section */}
      <ProductionProcess isB2C={true} />

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
                Vorteile für <span className="font-medium">Weinliebhaber</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie, was unsere Möbelstücke so besonders macht und wie sie Ihr Zuhause bereichern können.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 lg:col-span-1">
                <div className="h-full">
                  <img 
                    src="/lovable-uploads/bb8a99d9-97f3-42b4-85ad-94d0c5d74fff.png" 
                    alt="Handgefertigte Weinfass-Möbel für Weinliebhaber" 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-1 space-y-6">
                <BenefitItem 
                  title="Individuelle Maßanfertigung"
                  description="Jedes Möbelstück wird speziell nach Ihren Vorstellungen und Anforderungen gefertigt. Jedes Stück ist ein Unikat, das Ihre Leidenschaft für Wein und Design in Ihrem Zuhause widerspiegelt."
                />
                
                <BenefitItem 
                  title="Nachhaltigkeit und Upcycling"
                  description="Unsere Möbelstücke werden aus recycelten Barrique-Fässern gefertigt, die zuvor in Weingütern für die Reifung edler Weine genutzt wurden. Mit einem Möbelstück von VINLIGNA leisten Sie einen Beitrag zur Nachhaltigkeit und holen sich ein Stück Weintradition nach Hause."
                />
                
                <BenefitItem 
                  title="Exklusives Design"
                  description="Das besondere Eichenholz verleiht unseren Möbeln eine luxuriöse Optik, die in jedem Raum ein Highlight setzt. Jedes Möbelstück bringt nicht nur Funktionalität, sondern auch ein edles Design in Ihr Zuhause."
                />
                
                <BenefitItem 
                  title="Vielfältige Auswahl"
                  description="Ob Tische, Stühle, Sideboards oder kleine Accessoires – VINLIGNA bietet Ihnen eine Vielzahl an Produkten, die perfekt zu Ihrem Lebensstil und Ihrer Einrichtung passen."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* FAQ Section */}
      <Faq />

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

interface ProductCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ProductCategory = ({ icon, title, description, image }: ProductCategoryProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
  >
    <div className="order-2 md:order-1">
      <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </div>
    <div className="order-1 md:order-2">
      <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-0.5">
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

export default PrivatePage;
