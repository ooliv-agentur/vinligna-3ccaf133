
import { motion } from 'framer-motion';
import { GalleryItem } from './GalleryItem';
import { fadeIn, staggerContainer } from '@/lib/motion';

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

const GallerySection = () => {
  return (
    <section className="section-padding">
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
            <h2 className="section-title text-foreground">
              Unsere <span className="text-gradient">Projekte</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
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
  );
};

export default GallerySection;
