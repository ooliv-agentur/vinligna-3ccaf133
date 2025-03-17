
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage = ({ src, alt, className }: GalleryImageProps) => (
  <motion.div
    variants={fadeIn}
    className={`rounded-lg overflow-hidden shadow-md ${className}`}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </motion.div>
);

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 overflow-hidden bg-darkbg">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">Galerie</span>
            <h2 className="section-title">
              Unsere <span className="highlight">Projekte</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Unsere Galerie zeigt ausgewählte Projekte, die wir bereits für namhafte Weingüter und 
              Restaurants realisiert haben. Entdecken Sie unsere maßgefertigten Tische, Theken und 
              Regale, die in verschiedenen Gastronomie- und Hotelbetrieben zum Einsatz kommen. Jedes 
              Möbelstück ist ein Unikat und erzählt die Geschichte des Weins, von dem es inspiriert wurde.
            </p>
          </motion.div>
          
          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <GalleryImage 
              src="/lovable-uploads/7f45ad6d-9caf-49bb-b904-0bc56c619db1.png" 
              alt="Weinregal aus Fassdauben" 
            />
            <GalleryImage 
              src="/lovable-uploads/a2056748-a7b3-40d0-8f30-e20b2e8ddbaf.png" 
              alt="Stuhl aus Eichenholz mit Metallgestell" 
            />
            <GalleryImage 
              src="/lovable-uploads/1673f963-80e6-4615-9da2-6270e96704bb.png" 
              alt="Servierbrett aus Fassdauben" 
            />
            <GalleryImage 
              src="/lovable-uploads/b8ccf011-269c-4d03-9fab-ec9ce9533125.png" 
              alt="Wandpaneele aus Fassdauben" 
            />
            <GalleryImage 
              src="/lovable-uploads/ad85486d-8323-4eee-83f8-e14b19340777.png" 
              alt="Fassschrank für Weinlagerung" 
            />
            <GalleryImage 
              src="/lovable-uploads/9f2ed395-b8b4-45ec-91f1-51a11aae8cbd.png" 
              alt="Hocker aus Fass mit Metallfüßen" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
