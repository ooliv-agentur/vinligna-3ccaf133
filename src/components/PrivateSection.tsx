
import { motion } from 'framer-motion';
import { ArrowRight, Home, Gift, Armchair } from 'lucide-react';
import { cn } from '@/lib/utils';

const PrivateSection = () => {
  return (
    <section id="private" className="py-24 md:py-32 bg-oak-light/20 overflow-hidden">
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
              Für Weinliebhaber
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Exklusive Möbel aus Weinfässern für <span className="font-medium">Ihr Zuhause</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bringen Sie den Charme und die Geschichte der Weinkultur in Ihr Zuhause mit unseren handgefertigten Möbelstücken. Jedes Stück trägt den einzigartigen Charakter der Fässer, die einst edle Weine beherbergten.
            </p>
          </motion.div>

          {/* Products Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-20">
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
                />
              </motion.div>
            ))}
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CategoryCard 
                icon={<Armchair className="w-6 h-6" />}
                title="Möbelkollektion"
                description="Einzigartige Esstische, Stühle und Weinregale, die Ihr Zuhause aufwerten."
                color="bg-wine/10"
                textColor="text-wine-dark"
              />
              <CategoryCard 
                icon={<Home className="w-6 h-6" />}
                title="Wohn- & Weinaccessoires"
                description="Von Weinkühlern bis zu Serviertabletts, perfekt für Weinabende und zum Gastgeben."
                color="bg-oak/10"
                textColor="text-oak-dark"
              />
              <CategoryCard 
                icon={<Gift className="w-6 h-6" />}
                title="Maßgeschneiderte Geschenke"
                description="Individuell gestaltete Stücke, die außergewöhnliche Geschenke für Weinliebhaber darstellen."
                color="bg-foreground/10"
                textColor="text-foreground"
              />
            </div>

            <div className="text-center mt-12">
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-medium bg-wine text-white py-3 px-6 rounded-lg hover:bg-wine-dark transition-colors group"
              >
                <span>Persönliche Beratung anfordern</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
}

const ProductCard = ({ image, title, category }: ProductCardProps) => (
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
      <p className="text-wine text-sm italic">Maßanfertigung nach Kundenwunsch</p>
    </div>
  </div>
);

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  textColor: string;
}

const CategoryCard = ({ icon, title, description, color, textColor }: CategoryCardProps) => (
  <div className="p-6 rounded-lg bg-white border border-background/20 hover:shadow-md transition-shadow">
    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", color)}>
      <div className={textColor}>{icon}</div>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

// B2C-specific benefits for private customers
const products = [
  { 
    id: 1, 
    image: "/product-1.jpg", 
    title: "Esstisch aus Weinfässern", 
    category: "Möbel" 
  },
  { 
    id: 2, 
    image: "/product-2.jpg", 
    title: "Weinregal aus Fassdauben", 
    category: "Weinlagerung" 
  },
  { 
    id: 3, 
    image: "/product-3.jpg", 
    title: "Couchtisch aus Fassböden", 
    category: "Möbel" 
  },
  { 
    id: 4, 
    image: "/product-4.jpg", 
    title: "Stuhl aus Weinfässern", 
    category: "Sitzmöbel" 
  },
  { 
    id: 5, 
    image: "/product-5.jpg", 
    title: "Leuchter aus Fassdauben", 
    category: "Beleuchtung" 
  },
  { 
    id: 6, 
    image: "/product-6.jpg", 
    title: "Weinkühler aus Fässern", 
    category: "Accessoires" 
  }
];

export default PrivateSection;
