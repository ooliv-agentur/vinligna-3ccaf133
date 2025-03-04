
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  altText?: string;
}

const TeamMember = ({ name, role, image, altText }: TeamMemberProps) => (
  <motion.div
    variants={fadeIn}
    className="group relative"
  >
    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
      <img 
        src={image} 
        alt={altText || `${name} - ${role}`} 
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <p className="text-wine mt-1">{role}</p>
      </div>
    </div>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="py-32 md:py-44 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-wine mb-6">
              Die Meister der Fassmöbel
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Kreativität trifft <span className="font-medium bg-gradient-to-r from-wine to-wine-light bg-clip-text text-transparent">Weinkultur</span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              Begegnen Sie den talentierten Kunsthandwerkern, die Ihre Vision in einzigartige Möbelstücke verwandeln. Unser leidenschaftliches Team verbindet traditionelles Handwerk mit innovativem Design, um Ihnen ein Stück Weingeschichte für Ihr Zuhause zu schaffen.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <TeamMember 
              name="Rüdiger Gries" 
              role="Leitung Administration und Finanzen" 
              image="/lovable-uploads/ca69a57e-0b2c-416a-874a-42a51dc91c34.png"
            />
            <TeamMember 
              name="Michael Messinger" 
              role="Leiter Produktentwicklung" 
              image="/lovable-uploads/06e1c8e5-67ad-412d-99a2-e2c2c4609419.png"
            />
            <TeamMember 
              name="Horst Hebel" 
              role="Tischler und Produktionsleiter" 
              image="/lovable-uploads/94f2d719-f448-460a-bee6-8ffd7d37af7c.png"
            />
            <TeamMember 
              name="Rei Suzuki" 
              role="Vertrieb und Kundenbetreuung" 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              altText="Rei Suzuki - Vertrieb und Kundenbetreuung"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
