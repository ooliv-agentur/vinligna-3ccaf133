
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

// Updated gallery items with new images
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

export default ProductGallery;
