
import { motion } from 'framer-motion';

const ProductGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-4">
              Galerie
            </span>
            <h2 className="text-3xl font-light mb-6">
              Unsere <span className="font-medium">Kreationen</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unsere Galerie zeigt eine Auswahl an maßgefertigten Möbeln, die wir bereits für Privatkunden gefertigt haben. Von Tischen bis hin zu Sideboards – sehen Sie, wie unsere Möbel in stilvollen Weinkellern und Wohnräumen zur Geltung kommen. Jedes Möbelstück bringt Eleganz und Geschichte in Ihr Zuhause.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <GalleryItem 
                  image={item.image}
                  title={item.title}
                  category={item.category}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

const GalleryItem = ({ image, title, category }: GalleryItemProps) => (
  <div className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="p-4 bg-white border-t">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">
        <span className="text-wine">{category}</span>
      </p>
    </div>
  </div>
);

// Sample gallery items
const galleryItems = [
  { 
    image: "/product-1.jpg", 
    title: "Esstisch aus Weinfassdauben", 
    category: "Möbelkollektion" 
  },
  { 
    image: "/product-2.jpg", 
    title: "Weinregal aus Barrique-Fässern", 
    category: "Weinlagerung" 
  },
  { 
    image: "/product-3.jpg", 
    title: "Couchtisch mit Glasplatte", 
    category: "Wohnzimmermöbel" 
  },
  { 
    image: "/product-4.jpg", 
    title: "Designstuhl aus Fassdauben", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/product-5.jpg", 
    title: "Hängelampe aus Fassringen", 
    category: "Beleuchtung" 
  },
  { 
    image: "/product-6.jpg", 
    title: "Weinkühler aus Fassboden", 
    category: "Accessoires" 
  }
];

export default ProductGallery;
