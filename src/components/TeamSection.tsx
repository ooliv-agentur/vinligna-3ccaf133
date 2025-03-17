
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  altText?: string;
}

const TeamMember = ({ name, role, image, altText }: TeamMemberProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      variants={fadeIn}
      className="group relative"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-foreground/5 backdrop-blur-sm border border-foreground/10">
        <img 
          src={image} 
          alt={altText || `${name} - ${role}`} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay and info for desktop (hover effect) */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-darkbg/70 via-darkbg/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-xl font-medium text-foreground">{name}</h3>
              <p className="text-wine mt-1">{role}</p>
            </div>
          </>
        )}
      </div>
      
      {/* Static info display for mobile */}
      {isMobile && (
        <div className="mt-3 text-center">
          <h3 className="text-lg font-medium text-foreground">{name}</h3>
          <p className="text-wine text-sm mt-0.5">{role}</p>
        </div>
      )}
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-32 md:py-44 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section title and subtitle */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="section-title-container"
          >
            <span className="section-subtitle">
              Unser Team
            </span>
            <h2 className="section-title text-foreground">
              Die <span className="text-gradient">Experten</span> hinter VINLIGNA
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Unser Expertenteam vereint Leidenschaft für Handwerkskunst mit innovativem Design, um Ihre Vision zum Leben zu erwecken.
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
