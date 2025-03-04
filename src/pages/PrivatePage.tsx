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
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from '@/lib/motion';
import FullWidthImageSection from '@/components/private/FullWidthImageSection';

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
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-6 px-6 py-2 bg-transparent text-white text-sm tracking-widest uppercase rounded-full border border-white/20"
          >
            FÜR WEINLIEBHABER
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-light mb-6 leading-tight tracking-tight"
          >
            <span className="block text-white">Möbel aus Weinfässern</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-normal block mt-4 text-gradient"
            >
              Handgefertigte Unikate für Weinliebhaber
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-16"
          >
            Bringen Sie die Eleganz und Geschichte der Weinkultur in Ihr Zuhause mit unseren handgefertigten Unikaten, die Nachhaltigkeit und Luxus vereinen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-wine hover:bg-wine-light text-white px-8 py-4 rounded-md transition-colors duration-300 group"
            >
              <span>Jetzt anfragen</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Hero background with overlay */}
        <div 
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            backgroundImage: `url('/lovable-uploads/bd5f84a4-a4f9-423f-88f7-1fce764501b2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 -z-10 bg-black/60"></div>
      </section>

      {/* Full Width Image Section */}
      <FullWidthImageSection />

      {/* About Section */}
      <section className="section-padding relative overflow-hidden bg-black">
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-wine/5 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wine/5 to-transparent opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="section-title text-white">
                Über <span className="text-gradient font-normal">uns</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
              {/* Left column with large quote symbol */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-8 -top-10 text-wine/20">
                  <Wine size={80} strokeWidth={1} />
                </div>
                <div className="border-l-2 border-wine pl-6 py-2">
                  <p className="text-xl md:text-2xl font-light italic text-white/90 leading-relaxed">
                    Bei VINLIGNA stehen exklusive Möbelstücke im Fokus, die aus recycelten Barrique-Fässern gefertigt werden.
                  </p>
                </div>
              </motion.div>
              
              {/* Right column with paragraph */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-center"
              >
                <p className="text-white/80 text-lg leading-relaxed">
                  Unsere Möbel vereinen Nachhaltigkeit und Luxus und sind handgefertigte Unikate, die nach Ihren individuellen Wünschen gefertigt werden. Ob im Weinkeller, im Esszimmer oder im Wohnbereich – VINLIGNA-Möbel sind für Menschen gemacht, die das Besondere suchen und ihr Zuhause stilvoll gestalten wollen.
                </p>
              </motion.div>
            </div>
            
            {/* Bottom highlight box */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-wine px-6 py-2 rounded-full">
                <span className="text-white font-medium">Nachhaltigkeit trifft auf Luxus</span>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 text-center md:text-right">
                  <h3 className="text-gradient text-2xl md:text-3xl font-normal mb-4">Nachhaltig</h3>
                  <h3 className="text-gradient text-2xl md:text-3xl font-normal mb-4">Einzigartig</h3>
                  <h3 className="text-gradient text-2xl md:text-3xl font-normal">Exklusiv</h3>
                </div>
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-wine/50 to-transparent hidden md:block"></div>
                <div className="w-full md:w-1/2">
                  <p className="text-white/80 text-lg leading-relaxed">
                    VINLIGNA verbindet nachhaltiges Design mit zeitloser Eleganz. Die Barrique-Fässer, die wir verwenden, stammen aus renommierten Weingütern und wurden zuvor zur Reifung edler Weine verwendet. Jedes Möbelstück ist ein handgefertigtes Unikat, das die Schönheit des Weins in Ihren Wohnraum bringt und die Geschichte des Weins bewahrt.
                  </p>
                </div>
              </div>
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
                Handgefertigte <span className="text-gradient">Unikate</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Unsere Möbel sind zu 100% individualisierbar und werden speziell nach Ihren Wünschen gefertigt. Egal, ob Sie ein Einzelstück für Ihren Weinkeller oder ein elegantes Interieur für Ihr Wohnzimmer suchen – bei VINLIGNA finden Sie die perfekte Lösung.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
            >
              <motion.div variants={fadeIn}>
                <ProductCategory 
                  icon={<Table className="w-6 h-6" />}
                  title="Tische aus Fassdauben"
                  description="Unsere handgefertigten Tische bringen den Charme und die Geschichte des Weins in Ihr Zuhause. Jeder Tisch ist ein Unikat, gefertigt aus recycelten Weinfässern, die zuvor für die Reifung edler Weine verwendet wurden."
                  image="/lovable-uploads/ce069aff-5e1d-415f-adba-547b6495298d.png"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <ProductCategory 
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Sideboards und Regale"
                  description="Unsere maßgefertigten Sideboards und Regale vereinen Ästhetik und Funktionalität. Sie bieten nicht nur Stauraum, sondern setzen auch stilvolle Akzente in Ihrem Zuhause. Die natürliche Maserung des Eichenholzes sorgt dafür, dass jedes Möbelstück einzigartig ist."
                  image="/lovable-uploads/e9d912cb-d45d-4016-8e8b-8250bd78de47.png"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <ProductCategory 
                  icon={<Table className="w-6 h-6" />}
                  title="Stühle und Sitzmöbel"
                  description="Unsere Stühle und Barhocker aus Fassdauben verbinden Komfort mit einem unverwechselbaren Design. Jedes Möbelstück erzählt die Geschichte des Weins und verleiht Ihrem Raum eine warme, einladende Atmosphäre."
                  image="/lovable-uploads/87b6ac6c-025f-40d2-9b09-73f8ee6e25b8.png"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <ProductCategory 
                  icon={<Wine className="w-6 h-6" />}
                  title="Accessoires und Geschenkartikel"
                  description="Neben Möbelstücken bieten wir auch eine Auswahl an kleineren Accessoires, die sich perfekt als stilvolle Dekoration oder als Geschenke für Weinliebhaber eignen. Jedes Accessoire wird aus recycelten Weinfässern gefertigt und verleiht Ihrem Zuhause das gewisse Etwas."
                  image="/lovable-uploads/ccaefbf7-98fe-4699-a949-fd82a00ba26d.png"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />
      
      {/* Process Section */}
      <ProductionProcess isB2C={true} />

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
                Vorteile für <span className="text-gradient">Weinliebhaber</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Entdecken Sie, was unsere Möbelstücke so besonders macht und wie sie Ihr Zuhause bereichern können.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="h-full">
                  <img 
                    src="/lovable-uploads/bb8a99d9-97f3-42b4-85ad-94d0c5d74fff.png" 
                    alt="Handgefertigte Weinfass-Möbel für Weinliebhaber" 
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
                    title="Individuelle Maßanfertigung"
                    description="Jedes Möbelstück wird speziell nach Ihren Vorstellungen und Anforderungen gefertigt. Jedes Stück ist ein Unikat, das Ihre Leidenschaft für Wein und Design in Ihrem Zuhause widerspiegelt."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Nachhaltigkeit und Upcycling"
                    description="Unsere Möbelstücke werden aus recycelten Barrique-Fässern gefertigt, die zuvor in Weingütern für die Reifung edler Weine genutzt wurden. Mit einem Möbelstück von VINLIGNA leisten Sie einen Beitrag zur Nachhaltigkeit und holen sich ein Stück Weintradition nach Hause."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Exklusives Design"
                    description="Das besondere Eichenholz verleiht unseren Möbeln eine luxuriöse Optik, die in jedem Raum ein Highlight setzt. Jedes Möbelstück bringt nicht nur Funktionalität, sondern auch ein edles Design in Ihr Zuhause."
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <BenefitItem 
                    title="Vielfältige Auswahl"
                    description="Ob Tische, Stühle, Sideboards oder kleine Accessoires – VINLIGNA bietet Ihnen eine Vielzahl an Produkten, die perfekt zu Ihrem Lebensstil und Ihrer Einrichtung passen."
                  />
                </motion.div>
              </motion.div>
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

interface ProductCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ProductCategory = ({ icon, title, description, image }: ProductCategoryProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center hover-scale">
    <div className="order-2 md:order-1">
      <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
    </div>
    <div className="order-1 md:order-2">
      <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover image-hover"
        />
      </div>
    </div>
  </div>
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
      <h4 className="text-lg font-medium mb-1 text-white">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

export default PrivatePage;
