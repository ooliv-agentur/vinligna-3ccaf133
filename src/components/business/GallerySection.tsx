
import { motion } from 'framer-motion';
import { GalleryItem } from './GalleryItem';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useAppTheme } from '@/hooks/use-theme';

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
    image: "/lovable-uploads/1911550f-8f90-4564-aa29-6d30f92e3a3e.png", 
    title: "Weinflaschenhalter aus Fassdauben", 
    category: "Accessoires" 
  },
  { 
    image: "/lovable-uploads/b84aadc7-6b01-474d-a099-ebb1701d546d.png", 
    title: "Weinkühler aus Eichenholz", 
    category: "Accessoires" 
  },
  { 
    image: "/lovable-uploads/37b00b71-227d-4a8e-bc0a-2d311de84ebc.png", 
    title: "Gastrobehälter mit Fassholz", 
    category: "Gastronomie" 
  },
  { 
    image: "/lovable-uploads/4a0725c4-b7cc-414b-a224-aa18dee17031.png", 
    title: "Reagenzglas-Blumenhalter", 
    category: "Tischdekoration" 
  },
  { 
    image: "/lovable-uploads/eb57318d-28a7-460b-9f30-4d49e691756e.png", 
    title: "Blumengesteck aus Fassholz", 
    category: "Tischdekoration" 
  },
  { 
    image: "/lovable-uploads/45a731ae-28c8-4cff-9d1e-4ae325fe4b38.png", 
    title: "Stuhldetail mit Metallgestell", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/469d7ded-2467-4c77-8021-11fe6d5bb9e8.png", 
    title: "Stuhldetail mit Fassholzsitz", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/f53c85b6-d250-43e5-82e3-7d403fda8280.png", 
    title: "Designstuhl aus Fassholz", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/2354dd84-c7b1-4b2c-85db-6a83a151553a.png", 
    title: "Schlüsselanhänger aus Fassholz", 
    category: "Accessoires" 
  },
  { 
    image: "/lovable-uploads/40ac9771-116d-4508-92c2-08196a175aae.png", 
    title: "Visitenkartenhalter", 
    category: "Büroausstattung" 
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
  },
  { 
    image: "/lovable-uploads/b0ca96f4-380d-4b38-b0fb-7a2c9dee7570.png", 
    title: "Designer-Stuhl aus Fassholz", 
    category: "Sitzmöbel" 
  },
  { 
    image: "/lovable-uploads/5a53bbed-9875-4004-aea2-164c6edf6c2b.png", 
    title: "Rotweinfässer Dauben", 
    category: "Materialdetail" 
  },
  { 
    image: "/lovable-uploads/4963d0d8-94ba-4528-bd14-936b5c71c8e7.png", 
    title: "Gebogene Fassdauben", 
    category: "Materialdetail" 
  },
  { 
    image: "/lovable-uploads/55177c88-0036-4bd0-9412-882574039cda.png", 
    title: "Schneidebretter aus Fassholz", 
    category: "Küchenaccessoires" 
  },
  { 
    image: "/lovable-uploads/2225d56a-8d6b-40db-884a-8696534c8460.png", 
    title: "Schneidebrett mit VINLIGNA-Gravur", 
    category: "Küchenaccessoires" 
  }
];

const GallerySection = () => {
  const { isDarkMode } = useAppTheme();
  
  return (
    <section className={`section-padding ${isDarkMode ? 'bg-darkbg' : 'bg-white'}`}>
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
              Unsere Galerie zeigt ausgewählte Projekte, die wir bereits für namhafte Weingüter und Restaurants realisiert haben. 
              Entdecken Sie unsere maßgefertigten Tische, Theken, Regale und exklusiven Accessoires wie Weinflaschenhalter, Weinkühler 
              und Blumenhalter, die in verschiedenen Gastronomie- und Hotelbetrieben zum Einsatz kommen. 
              Von funktionalen Büroausstattungen bis zu dekorativen Elementen – jedes Stück erzählt die Geschichte des Weins, 
              von dem es inspiriert wurde.
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
