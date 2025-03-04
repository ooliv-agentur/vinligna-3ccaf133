
import { motion } from 'framer-motion';
import { Package, PencilRuler, Sparkles } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative"
  >
    <div className="text-4xl font-light text-wine/20 mb-4">{number}</div>
    <div className="flex flex-col items-center mb-6">
      <div className="text-wine w-20 h-20 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2 text-center">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground text-center">{description}</p>
    
    {/* Connector line, only show for non-last items on desktop */}
    <div className="hidden md:block absolute top-8 right-0 h-[2px] w-1/2 bg-wine/10 -z-10 last:hidden"></div>
    <div className="hidden md:block absolute top-8 left-1/2 h-[2px] w-1/2 bg-wine/10 -z-10 first:hidden"></div>
  </motion.div>
);

// Custom SVG for barrel icon since Barrel isn't available in lucide-react
const BarrelIcon = ({ size = 48, strokeWidth = 0.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v20" />
    <path d="M16 2v20" />
    <path d="M4 8c0 0 1.5-1.5 8-1.5s8 1.5 8 1.5" />
    <path d="M4 16c0 0 1.5 1.5 8 1.5s8-1.5 8-1.5" />
    <path d="M4 4h16" />
    <path d="M4 20h16" />
  </svg>
);

// Custom SVG for barrel stave icon
const StaveIcon = ({ size = 48, strokeWidth = 0.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3c0 0 1.8 1.5 6 1.5 4.2 0 6-1.5 6-1.5" />
    <path d="M18 21c0 0-1.8-1.5-6-1.5-4.2 0-6 1.5-6 1.5" />
    <path d="M6 8c0 0 1.8 1.5 6 1.5 4.2 0 6-1.5 6-1.5" />
    <path d="M6 16c0 0 1.8-1.5 6-1.5 4.2 0 6 1.5 6 1.5" />
    <path d="M4 3c0 0 0 17 0 18" />
    <path d="M20 3c0 0 0 17 0 18" />
  </svg>
);

interface ProductionProcessProps {
  isB2C?: boolean;
}

const ProductionProcess = ({ isB2C = false }: ProductionProcessProps) => {
  // Different text content for B2C vs B2B
  const contentB2C = {
    sectionTitle: "Unser Handwerk",
    heading: "Vom Fass zum Lieblingsstück",
    description: "Entdecken Sie, wie wir hochwertige Barrique-Fässer in exklusive Möbelstücke für Ihr Zuhause verwandeln.",
    steps: [
      {
        number: "01",
        title: "Auswahl der Fässer",
        description: "Wir wählen sorgfältig gebrauchte Barrique-Fässer aus, die jahrelang edle Weine beherbergt haben und eine besondere Geschichte erzählen.",
        icon: <BarrelIcon strokeWidth={0.8} size={48} />
      },
      {
        number: "02",
        title: "Handwerkliche Verarbeitung",
        description: "Mit traditionellen Handwerkstechniken zerlegen wir die Fässer und verarbeiten die edlen Hölzer zu einzigartigen Wohnaccessoires und Möbelstücken.",
        icon: <StaveIcon strokeWidth={0.8} size={48} />
      },
      {
        number: "03",
        title: "Individuelle Gestaltung",
        description: "Wir gestalten Ihr Wunschmöbel nach Ihren persönlichen Vorstellungen und passen es optimal an Ihren Wohnraum an.",
        icon: <PencilRuler strokeWidth={0.8} size={48} />
      },
      {
        number: "04",
        title: "Perfekte Vollendung",
        description: "Die Oberflächen werden mit hochwertigen Ölen und Wachsen veredelt, um die einzigartige Holzmaserung zur Geltung zu bringen und langlebigen Schutz zu bieten.",
        icon: <Sparkles strokeWidth={0.8} size={48} />
      }
    ]
  };

  const contentB2B = {
    sectionTitle: "Unser Produktionsprozess",
    heading: "Vom Fass zum Möbelstück",
    description: "Entdecken Sie, wie wir hochwertige Barrique-Fässer in exklusive Möbelstücke für Ihr Unternehmen verwandeln.",
    steps: [
      {
        number: "01",
        title: "Fassauswahl",
        description: "Wir verwenden sorgfältig ausgewählte, alte Barrique-Fässer, die aus Weingütern stammen und für die Reifung von Wein verwendet wurden.",
        icon: <BarrelIcon strokeWidth={0.8} size={48} />
      },
      {
        number: "02",
        title: "Verarbeitung",
        description: "Die Fässer werden in Fassdauben zerlegt und von unseren Handwerkern zu einzigartigen Möbelstücken weiterverarbeitet.",
        icon: <StaveIcon strokeWidth={0.8} size={48} />
      },
      {
        number: "03",
        title: "Maßanfertigung",
        description: "Jedes Möbelstück wird in enger Zusammenarbeit mit Ihnen entworfen und exakt an Ihre Anforderungen angepasst.",
        icon: <PencilRuler strokeWidth={0.8} size={48} />
      },
      {
        number: "04",
        title: "Endveredelung",
        description: "Die fertigen Möbelstücke werden mit einem speziellen Finish versehen, das die natürliche Schönheit des Holzes hervorhebt.",
        icon: <Sparkles strokeWidth={0.8} size={48} />
      }
    ]
  };

  const content = isB2C ? contentB2C : contentB2B;

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
              {content.sectionTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              {content.heading.split(" ").slice(0, -1).join(" ")} <span className="font-medium">{content.heading.split(" ").slice(-1)}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {content.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
