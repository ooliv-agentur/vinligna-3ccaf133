
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Gift, Armchair, Wine, Heart, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Cta from '@/components/Cta';
import ScrollToTop from '@/components/ScrollToTop';
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
    document.title = "VINLIGNA | Exklusive Möbel aus Weinfässern für Weinliebhaber";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Einzigartige, handgefertigte Möbel und Accessoires aus recycelten Weinfässern für Ihr Zuhause. Nachhaltige Unikate für Weinenthusiasten.");
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
            alt="Weinliebhaber-Möbel aus recycelten Weinfässern"
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
            Exklusive Möbel aus Weinfässern <br className="hidden md:block" />
            <span className="font-medium">für Ihr Zuhause</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8"
          >
            Bringen Sie die Eleganz und Geschichte der Weinkultur in Ihr Zuhause mit unseren handgefertigten Unikaten, die Nachhaltigkeit und Luxus perfekt verbinden.
          </motion.p>
        </div>
      </section>

      {/* Main Private Customer Content */}
      <section className="py-24 md:py-32 bg-oak-light/20">
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
                Handgefertigte Unikate für <span className="font-medium">Weinenthusiasten</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jedes Möbelstück erzählt eine Geschichte – vom edlen Wein, den das Fass einst beherbergte, bis zur handwerklichen Verarbeitung, die es in ein einzigartiges Kunstwerk verwandelt.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Benefit 
                icon={<Heart className="w-6 h-6" />}
                title="Einzigartige Unikate"
                description="Jedes Stück ist ein Unikat mit individueller Maserung, Farbe und Geschichte – kein anderes gleicht dem Ihren."
              />
              
              <Benefit 
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Nachhaltige Eleganz"
                description="Durch die Wiederverwertung von Weinfässern schonen wir Ressourcen und schaffen gleichzeitig zeitlose Möbelstücke."
              />
              
              <Benefit 
                icon={<Wine className="w-6 h-6" />}
                title="Erzählt Weingeschichte"
                description="Die Patina und der Duft des Eichenholzes erinnern an die edle Herkunft und die Weine, die das Fass einst beherbergte."
              />
            </div>

            {/* Product Categories */}
            <div className="mb-20">
              <h3 className="text-2xl font-light mb-12 text-center">Unsere <span className="font-medium">Kollektionen</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <ProductCategory 
                  icon={<Armchair className="w-6 h-6" />}
                  title="Möbelkollektion"
                  description="Einzigartige Esstische, Stühle, Couchtische und Weinregale, die Ihr Zuhause aufwerten."
                  features={[
                    "Massivholztische mit Fassdauben",
                    "Individuelle Sitzgelegenheiten",
                    "Maßgefertigte Weinregale"
                  ]}
                  color="bg-wine/10"
                  textColor="text-wine-dark"
                />
                
                <ProductCategory 
                  icon={<Home className="w-6 h-6" />}
                  title="Wohn- & Weinaccessoires"
                  description="Funktionale Kunstwerke, die Weingenuss und Inneneinrichtung perfekt ergänzen."
                  features={[
                    "Weinhalter und Weinkühlständer",
                    "Dekorative Wandelemente",
                    "Beleuchtungsobjekte aus Fässern"
                  ]}
                  color="bg-oak/10"
                  textColor="text-oak-dark"
                />
                
                <ProductCategory 
                  icon={<Gift className="w-6 h-6" />}
                  title="Geschenke für Weinliebhaber"
                  description="Besondere Geschenke, die jeden Weinenthusiasten begeistern werden."
                  features={[
                    "Personalisierte Weinaccessoires",
                    "Exklusive Geschenksets",
                    "Sammlerstücke mit Herkunftsnachweis"
                  ]}
                  color="bg-foreground/10"
                  textColor="text-foreground"
                />
              </div>

              <div className="text-center">
                <a 
                  href="#products" 
                  className="inline-flex items-center text-sm font-medium py-2 px-4 text-wine hover:text-wine-dark transition-colors group"
                >
                  <span>Alle Produkte entdecken</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Featured Products */}
            <div id="products" className="mt-24">
              <h3 className="text-2xl font-light mb-12 text-center">Ausgewählte <span className="font-medium">Produkte</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <ProductCard 
                      image={product.image}
                      title={product.title}
                      category={product.category}
                      price={product.price}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium bg-wine text-white py-3 px-6 rounded-lg hover:bg-wine-dark transition-colors group"
                >
                  <span>Unverbindliche Beratung anfragen</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-center">Was unsere <span className="font-medium">Kunden sagen</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial 
                quote="Der Esstisch aus einem Weinfass ist nicht nur ein Möbelstück, sondern ein Gesprächsthema bei jedem Dinner. Die Handwerkskunst ist beeindruckend."
                author="Michael K."
                role="Weinsammler aus München"
              />
              <Testimonial 
                quote="Als leidenschaftliche Weinliebhaberin wollte ich etwas Besonderes für mein Wohnzimmer. Der Couchtisch aus einem Barrique-Fass übertrifft alle Erwartungen."
                author="Sabine M."
                role="Kundin aus Hamburg"
              />
              <Testimonial 
                quote="Die Weinregale sind nicht nur funktional, sondern echte Kunstwerke. Man spürt die Liebe zum Detail und die Geschichte des Holzes."
                author="Thomas L."
                role="Gastronom & Privatkunde"
              />
              <Testimonial 
                quote="Die persönliche Beratung war hervorragend und das maßgefertigte Stück passt perfekt in unsere Einrichtung. Ein echtes Erbstück."
                author="Familie Berger"
                role="Kunden aus Wien"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-oak-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light mb-12 text-center">Häufig gestellte <span className="font-medium">Fragen</span></h2>
            
            <div className="space-y-6">
              <FaqItem 
                question="Wie werden die Möbel gepflegt und gereinigt?"
                answer="Unsere Möbel werden mit speziellen Ölen behandelt, die das Holz schützen und seine natürliche Schönheit bewahren. Zur Reinigung empfehlen wir ein leicht feuchtes Tuch und spezielle Holzpflegeprodukte, die wir auf Wunsch mitliefern."
              />
              <FaqItem 
                question="Kann ich ein bestimmtes Weingut oder eine bestimmte Weinregion für mein Möbelstück anfragen?"
                answer="Ja, wir haben Zugang zu Fässern aus verschiedenen Weinregionen und von spezifischen Weingütern. Teilen Sie uns Ihre Wünsche mit, und wir bemühen uns, diese zu erfüllen."
              />
              <FaqItem 
                question="Wie lange dauert die Anfertigung eines maßgeschneiderten Möbelstücks?"
                answer="Die Produktionszeit beträgt je nach Komplexität und Größe des Stücks zwischen 4 und 8 Wochen. Für besondere Maßanfertigungen kann es etwas länger dauern."
              />
              <FaqItem 
                question="Können die Möbel auch personalisiert werden?"
                answer="Absolut. Wir bieten verschiedene Personalisierungsoptionen wie Gravuren, Einlegearbeiten oder die Integration persönlicher Elemente an. Sprechen Sie uns an, um Ihre individuellen Vorstellungen zu besprechen."
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

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="mb-4 bg-wine/10 w-16 h-16 rounded-full flex items-center justify-center text-wine">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

interface ProductCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
}

const ProductCategory = ({ icon, title, description, features, color, textColor }: ProductCategoryProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="p-6 rounded-lg bg-white border border-background/20 hover:shadow-md transition-shadow h-full flex flex-col"
  >
    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", color)}>
      <div className={textColor}>{icon}</div>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <ul className="mt-auto space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-sm flex items-start">
          <span className="text-wine mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
}

const ProductCard = ({ image, title, category, price }: ProductCardProps) => (
  <div className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all hover-lift">
    <div className="relative h-72 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <p className="text-xs text-muted-foreground mb-1">{category}</p>
      <h4 className="font-medium text-lg mb-2">{title}</h4>
      <div className="flex justify-between items-center">
        <p className="text-wine text-sm italic">Maßanfertigung</p>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  </div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ quote, author, role }: TestimonialProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="bg-white rounded-lg p-6 shadow-sm"
  >
    <div className="text-wine text-2xl mb-2">"</div>
    <p className="text-muted-foreground mb-4 italic">{quote}</p>
    <div>
      <p className="font-medium">{author}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
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

// Sample products data
const products = [
  { 
    id: 1, 
    image: "/product-1.jpg", 
    title: "Esstisch aus Weinfässern", 
    category: "Möbel",
    price: "Ab 1.890 €"
  },
  { 
    id: 2, 
    image: "/product-2.jpg", 
    title: "Weinregal aus Fassdauben", 
    category: "Weinlagerung",
    price: "Ab 590 €"
  },
  { 
    id: 3, 
    image: "/product-3.jpg", 
    title: "Couchtisch aus Fassböden", 
    category: "Möbel",
    price: "Ab 890 €"
  },
  { 
    id: 4, 
    image: "/product-4.jpg", 
    title: "Stuhl aus Weinfässern", 
    category: "Sitzmöbel",
    price: "Ab 490 €"
  },
  { 
    id: 5, 
    image: "/product-5.jpg", 
    title: "Leuchter aus Fassdauben", 
    category: "Beleuchtung",
    price: "Ab 290 €"
  },
  { 
    id: 6, 
    image: "/product-6.jpg", 
    title: "Weinkühler aus Fässern", 
    category: "Accessoires",
    price: "Ab 190 €"
  }
];

export default PrivatePage;
