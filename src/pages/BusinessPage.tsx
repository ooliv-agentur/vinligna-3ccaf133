
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Table, Armchair, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import BusinessFaq from '@/components/BusinessFaq';
import TeamSection from '@/components/TeamSection';
import ProductGallery from '@/components/ProductGallery';
import ProductionProcess from '@/components/ProductionProcess';
import { fadeIn, staggerContainer, slideUp } from '@/lib/motion';

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
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      
      {/* Hero Section - Updated to match site style */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Dynamic background with gradient */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-wine/10 via-black to-black/90 opacity-70" />
          
          {/* Subtle pattern overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-block mb-6 px-3 py-1 bg-white/5 backdrop-blur-sm text-wine-light text-xs tracking-widest uppercase rounded-full border border-white/10"
          >
            Für Geschäftskunden
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight"
          >
            <span className="block text-white">Weinfass Möbel für</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-medium block mt-2 bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent"
            >
              Weingüter, Gastronomie & Hotellerie
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10"
          >
            Werten Sie Ihre Räumlichkeiten mit individuell gefertigten Möbeln aus recycelten Weinfässern auf. Erzählen Sie die Geschichte Ihres Unternehmens durch zeitlose, nachhaltige Unikate.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#contact" 
              className="btn-primary group"
            >
              <span>Jetzt anfragen</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center absolute bottom-8 left-0 right-0"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
              className="text-white/60 text-sm mb-2"
            >
              Mehr entdecken
            </motion.span>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="w-px bg-white/20 relative overflow-hidden"
            >
              <motion.div 
                initial={{ y: -60 }}
                animate={{ y: 60 }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-1/2 bg-white/60 absolute"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
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
                Über <span className="highlight">VINLIGNA</span>
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

      {/* Team Section */}
      <TeamSection />

      {/* Products Section */}
      <section className="section-padding-lg bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="section-title-container"
            >
              <span className="section-subtitle">
                Unsere Produkte
              </span>
              <h2 className="section-title text-white">
                Maßgeschneiderte <span className="highlight">Weinfass-Möbel</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Unsere Möbel sind vollständig individualisierbar und auf die speziellen Bedürfnisse von Weingütern, Restaurants und Hotels ausgerichtet.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
              <motion.div variants={fadeIn}>
                <ProductCard 
                  icon={<Table className="w-6 h-6" />}
                  title="Tische und Theken"
                  description="Unsere maßgefertigten Tische und Theken aus recycelten Barrique-Fässern vereinen Funktionalität und Eleganz. Diese Möbelstücke schaffen in Verkostungsräumen oder an Hotelbars eine stilvolle und authentische Atmosphäre."
                  image="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <ProductCard 
                  icon={<Armchair className="w-6 h-6" />}
                  title="Stühle und Sitzmöbel"
                  description="Unsere handgefertigten Stühle und Barhocker bieten Komfort und Stabilität für den täglichen Gebrauch in gastronomischen Umgebungen, während sie gleichzeitig höchsten Komfort bieten."
                  image="/lovable-uploads/87b6ac6c-025f-40d2-9b09-73f8ee6e25b8.png"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <ProductCard 
                  icon={<Layers className="w-6 h-6" />}
                  title="Weinregale und Präsentationsmöbel"
                  description="Unsere maßgeschneiderten Regale bieten Ihnen die Möglichkeit, Ihre Weinauswahl stilvoll und übersichtlich zu präsentieren. Diese exklusiven Möbelstücke sind ein Highlight in jeder Vinothek."
                  image="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto border border-white/10">
                <h3 className="text-xl font-medium mb-4 text-white">Besonderheit für Winzer</h3>
                <p className="text-white/70 mb-0">
                  Für Winzer bieten wir die Möglichkeit, Möbel aus Ihren eigenen, nicht mehr genutzten Weinfässern fertigen zu lassen. Diese können auf Wunsch mit eingebrannten Logos oder individuellen Markenzeichen veredelt werden, sodass Ihre Gäste sofort die Verbindung zu Ihrem Weingut erkennen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProductionProcess isB2C={false} />

      {/* Benefits Section */}
      <section className="section-padding-lg bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="section-title-container"
            >
              <span className="section-subtitle">
                Ihre Vorteile
              </span>
              <h2 className="section-title text-white">
                Vorteile für <span className="highlight">Ihr Unternehmen</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Entdecken Sie, warum VINLIGNA die erste Wahl für Weingüter, Gastronomiebetriebe und Hotels ist.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="h-full">
                  <img 
                    src="/lovable-uploads/bb8a99d9-97f3-42b4-85ad-94d0c5d74fff.png" 
                    alt="Maßgefertigte Weinfass-Möbel" 
                    className="w-full h-full object-cover rounded-lg shadow-md image-hover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:col-span-2 lg:col-span-1 space-y-6"
              >
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Individuelle Lösungen"
                    description="Jedes Möbelstück wird maßgefertigt, um perfekt in Ihre Räumlichkeiten zu passen und Ihren individuellen Stil widerzuspiegeln."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Nachhaltigkeit und Upcycling"
                    description="Wir verwenden recycelte Weinfässer, die nicht mehr für die Weinproduktion genutzt werden. So entstehen aus alten Materialien neue, langlebige Möbelstücke."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Exklusives Design"
                    description="Unsere Möbelstücke aus Barrique-Eichenholz bieten eine besondere Optik, die Ihren Betrieb aufwertet und ein Gefühl von Exklusivität und Tradition vermittelt."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Langlebigkeit und Robustheit"
                    description="Das Eichenholz der Barrique-Fässer ist nicht nur ästhetisch ansprechend, sondern auch extrem robust und für den täglichen Einsatz in gastronomischen Betrieben ausgelegt."
                  />
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="pt-4"
                >
                  <a 
                    href="#contact" 
                    className="btn-primary group"
                  >
                    <span>Verwandeln Sie Ihre Räumlichkeiten</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="section-title-container"
            >
              <span className="section-subtitle">
                Galerie
              </span>
              <h2 className="section-title text-white">
                Unsere <span className="highlight">Projekte</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Unsere Galerie zeigt ausgewählte Projekte, die wir bereits für namhafte Weingüter und Restaurants realisiert haben. Entdecken Sie unsere maßgefertigten Tische, Theken und Regale, die in verschiedenen Gastronomie- und Hotelbetrieben zum Einsatz kommen. Jedes Möbelstück ist ein Unikat und erzählt die Geschichte des Weins, von dem es inspiriert wurde.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="hover-lift"
                >
                  <GalleryItem 
                    image={item.image}
                    title={item.title}
                    category={item.category}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      {/* FAQ Section */}
      <BusinessFaq />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

// ProcessStep Component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <motion.div 
    variants={fadeIn}
    className="relative"
  >
    <div className="text-4xl font-light text-wine/20 mb-4">{number}</div>
    <h4 className="text-lg font-medium mb-2 text-white">{title}</h4>
    <p className="text-sm text-white/60">{description}</p>
    
    {/* Connector line, only show for non-last items on desktop */}
    <div className="hidden md:block absolute top-8 right-0 h-[2px] w-1/2 bg-wine/10 -z-10 last:hidden"></div>
    <div className="hidden md:block absolute top-8 left-1/2 h-[2px] w-1/2 bg-wine/10 -z-10 first:hidden"></div>
  </motion.div>
);

// ProductCard Component
interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ icon, title, description, image }: ProductCardProps) => (
  <div className="flex flex-col h-full hover-scale">
    <div className="relative h-56 overflow-hidden rounded-t-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover image-hover"
      />
    </div>
    <div className="flex-1 p-6 bg-white/5 backdrop-blur-sm rounded-b-lg border border-t-0 border-white/10">
      <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

// BenefitItem Component
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
      <h4 className="text-lg font-medium mb-1 text-white">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

// Gallery Item Component
interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

const GalleryItem = ({ image, title, category }: GalleryItemProps) => (
  <div className="group rounded-lg overflow-hidden shadow-md">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover image-hover"
      />
    </div>
    <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-sm text-white/60">
        <span className="text-wine">{category}</span>
      </p>
    </div>
  </div>
);

// Gallery items data
const galleryItems = [
  { 
    image: "/lovable-uploads/b8ccf011-269c-4d03-9fab-ec9ce9533125.png", 
    title: "Fassdauben-Wandpaneele", 
    category: "Wandgestaltung" 
  },
  { 
    image: "/lovable-uploads/112627aa-d494-4e9d-939e-39625817461d.png", 
    title: "Designstuhl mit Metallgestell", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/8a04c9c9-5b3b-4585-8717-9b2c85d1d3c0.png", 
    title: "Serviertablett aus Fassdauben", 
    category: "Accessoires" 
  },
  { 
    image: "/lovable-uploads/035a7515-089b-446d-ad34-076e3a7e4e7a.png", 
    title: "Detail einer Fassdaubenplatte", 
    category: "Materialdetail" 
  },
  { 
    image: "/lovable-uploads/b76b103c-cb5b-478f-9710-6d7835023833.png", 
    title: "Barhocker aus Eichenholz", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/ab9f2933-6513-46ff-aaa7-a7ba417f3859.png", 
    title: "Rundhocker mit Metallgestell", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/c68a3594-9eee-429e-bcba-b99a121cbd1d.png", 
    title: "Detailansicht Holzmaserung", 
    category: "Materialdetail" 
  },
  { 
    image: "/lovable-uploads/9f2ed395-b8b4-45ec-91f1-51a11aae8cbd.png", 
    title: "Holzhocker mit Fassdauben-Sitz", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/9474a86e-3029-4095-9f7d-bdab1f66558d.png", 
    title: "Eichenholz Rundtisch", 
    category: "Tische" 
  }
];

export default BusinessPage;
