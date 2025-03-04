
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

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
    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-wine/20 shadow-xl shadow-black/20 transform transition-all duration-500 group-hover:scale-110">
      <img 
        src={image} 
        alt={altText || `${name} - ${role}`} 
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-2xl font-medium text-white mb-1">{name}</h3>
        <p className="text-wine mt-1 opacity-90">{role}</p>
        <div className="w-12 h-0.5 bg-wine mt-3 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
      </div>
    </div>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="py-32 md:py-44 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto scale-120 transform origin-center">
          {/* Section title and subtitle */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="section-subtitle">
              Unser Team
            </span>
            <h2 className="section-title text-white">
              Die <span className="text-gradient">Experten</span> hinter VINLIGNA
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Unser Expertenteam vereint Leidenschaft für Handwerkskunst mit innovativem Design, um Ihre Vision zum Leben zu erwecken.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
              image="/lovable-uploads/24033f25-23a2-44c9-b2b9-d716dee98159.png"
              altText="Rei Suzuki - Vertrieb und Kundenbetreuung"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
