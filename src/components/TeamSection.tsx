
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  altText?: string;
}

const TeamMember = ({ name, role, image, altText }: TeamMemberProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative overflow-hidden rounded-lg"
  >
    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
      <img 
        src={image} 
        alt={altText || `${name} - ${role}`} 
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
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
              Die Meister der Fassmöbel
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Kreativität trifft <span className="font-medium">Weinkultur</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Begegnen Sie den talentierten Kunsthandwerkern, die Ihre Vision in einzigartige Möbelstücke verwandeln. Unser leidenschaftliches Team verbindet traditionelles Handwerk mit innovativem Design, um Ihnen ein Stück Weingeschichte für Ihr Zuhause zu schaffen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
