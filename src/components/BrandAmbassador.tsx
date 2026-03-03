import { motion } from 'framer-motion';
import { ExternalLink, Instagram } from 'lucide-react';
import { fadeIn } from '@/lib/motion';

const BrandAmbassador = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.4 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 mt-10"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="bg-wine px-6 py-2 rounded-full whitespace-nowrap">
          <span className="text-white font-medium">Markenbotschafterin 075</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center pt-6">
        {/* Photo */}
        <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
          <img
            src="/lovable-uploads/075_Difan.jpg"
            alt="Difan Xu – Markenbotschafterin 075"
            className="w-full h-full object-cover rounded-xl border border-white/10"
          />
        </div>

        {/* Text + Links */}
        <div className="flex-1 space-y-4">
          <p className="text-foreground/80 dark:text-white/80 text-lg leading-relaxed">
            Wir freuen uns, unsere inspirierende Markenbotschafterin <strong className="text-foreground dark:text-white">Frau Difan Xu</strong> vorzustellen:
          </p>
          <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
            Die gebürtige Österreicherin bringt als Sommelière eine beeindruckende Expertise mit und hat in renommierten Sterne-Restaurants gearbeitet. Mit ihrer Leidenschaft für exzellente Weine und ihrem feinen Gespür für Qualität bringt sie nicht nur Expertise in die Welt des Genusses, sondern auch eine besondere Verbindung zu unserem nachhaltigen Möbel-Design aus Fassdauben mit.
          </p>
          <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
            Difan betreibt in Nürnberg die stilvolle Weinbar 075, die für ihre entspannte, kreative und dennoch gehobene Atmosphäre und exklusive Weinauswahl bekannt ist.
          </p>
          <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
            Als Botschafterin verbindet sie die Leidenschaft für edle Weine mit dem einzigartigen Charme unserer Möbel – perfekt für alle, die Genuss und Design auf höchstem Niveau schätzen.
          </p>
          <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
            Wir sind überzeugt mit Difan die perfekte Botschafterin gefunden zu haben und freuen uns auf die weitere Zusammenarbeit mit ihr.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://075-wein.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wine hover:text-wine/80 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              075 Webseite
            </a>
            <a
              href="https://www.instagram.com/075_weinbar_u_handel/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wine hover:text-wine/80 transition-colors font-medium"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandAmbassador;
