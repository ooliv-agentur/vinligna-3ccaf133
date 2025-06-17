
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import BrandAffiliation from '@/components/BrandAffiliation';

const ImpressumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-12 pb-6 border-b border-muted">Impressum</h1>
            
            <div className="space-y-8 text-foreground/80">
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">VinLignum Holzmanufaktur GmbH & Co. KG</h2>
                <p>Industriestraße 19</p>
                <p>67821 Alsenz</p>
                <p className="mt-4">Tel.: <a href="tel:+4963623094990" className="text-wine hover:text-wine-dark transition-colors">+49 6362 309 49 90</a></p>
              </div>
              
              <div>
                <p>Steuer Nr: 19/201/22074</p>
                <p>USt-IdNr: DE356697466</p>
              </div>
              
              <div>
                <p>Amtsgericht: Kaiserslautern</p>
                <p>Handelsregister-Nummer: HRA 30967</p>
                <p>Geschäftsführer: Rüdiger Gries</p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">Konzept, Design & technische Umsetzung:</h2>
                <p>ooliv</p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">Rechtshinweis:</h2>
                <p className="text-sm leading-relaxed">
                  Alle in den Internet-Seiten von der Manufakturhof Alsenz AG & Co. KG enthaltenen Angaben und Informationen wurden sorgfältig recherchiert und geprüft. Für Richtigkeit, Vollständigkeit und Aktualität kann jedoch weder die Manufakturhof Alsenz AG & Co. KG noch dritte Lieferanten Gewähr übernehmen. Des Weiteren behält sich die Manufakturhof Alsenz AG & Co. KG das Recht vor, Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen. Für den Fall, dass die Manufakturhof Alsenz AG & Co. KG – Internetseiten ohne Wissen von der Manufakturhof Alsenz AG & Co. KG von einer anderen Webseite mittels Hyperlinks angelinkt werden, übernimmt die Manufakturhof Alsenz AG & Co. KG keine Verantwortung für Darstellungen, Inhalt oder irgendeine Verbindung in Internet-Seiten Dritter. Gleiches gilt auch für alle anderen Internet-Seiten, auf die von den Internetseiten von der Manufakturhof Alsenz AG & Co. KG mittels Hyperlink verwiesen wird. Inhalt und Struktur der Internet-Seiten von der Manufakturhof Alsenz AG & Co. KG sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial bedarf der vorherigen Zustimmung von der Manufakturhof Alsenz AG & Co. KG. Rechte Dritter werden davon nicht beeinträchtigt.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-4 text-foreground">Urheberrecht der Bilder:</h2>
                <p>Mira Hampel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <BrandAffiliation />
      <Footer />
    </>
  );
};

export default ImpressumPage;
