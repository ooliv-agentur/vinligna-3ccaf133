
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Building, Wine } from 'lucide-react';
import { cn } from '@/lib/utils';

const BusinessSection = () => {
  return (
    <section id="business" className="py-24 md:py-32 bg-background overflow-hidden">
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
              For Businesses
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Custom Solutions for <span className="font-medium">Wineries & Hospitality</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elevate your business space with bespoke furniture that tells your unique story. From tasting rooms to hotel lobbies, our custom pieces create unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/business-main.jpg" 
                  alt="Custom wine bar for business" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-foreground rounded-full opacity-5 blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <BusinessSolution 
                icon={<Wine className="w-5 h-5" />}
                title="Custom Tasting Room Furniture"
                description="Create an immersive experience with furniture that connects visitors to your wine's heritage."
              />
              
              <BusinessSolution 
                icon={<Building className="w-5 h-5" />}
                title="Hospitality & Restaurant Solutions"
                description="Distinguished bars, tables, and seating that set your establishment apart."
              />
              
              <BusinessSolution 
                icon={<Factory className="w-5 h-5" />}
                title="Upcycle Your Own Barrels"
                description="Transform your retired barrels into bespoke furniture that tells your winery's story."
              />

              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors group"
                >
                  <span>Request Business Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Project Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-24"
          >
            <h3 className="text-2xl font-light mb-8 text-center">Featured Business Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard 
                image="/project-b2b-1.jpg"
                title="Custom Wine Bar"
                client="La Terre Winery"
                category="Tasting Room"
              />
              <ProjectCard 
                image="/project-b2b-2.jpg"
                title="Barrel Dining Tables"
                client="Bordeaux Restaurant"
                category="Restaurant"
              />
              <ProjectCard 
                image="/project-b2b-3.jpg"
                title="Reception Desk"
                client="Grand Cru Hotel"
                category="Hospitality"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface BusinessSolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BusinessSolution = ({ icon, title, description }: BusinessSolutionProps) => (
  <div className="mb-8 flex">
    <div className="mr-4 mt-1 flex-shrink-0">
      <div className="bg-oak-light w-10 h-10 rounded-full flex items-center justify-center text-foreground">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

interface ProjectCardProps {
  image: string;
  title: string;
  client: string;
  category: string;
}

const ProjectCard = ({ image, title, client, category }: ProjectCardProps) => (
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
        <span className="text-wine">{client}</span> · {category}
      </p>
    </div>
  </div>
);

export default BusinessSection;
