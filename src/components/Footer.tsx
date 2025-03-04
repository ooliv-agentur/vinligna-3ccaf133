
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <a href="/" className="text-2xl font-semibold tracking-tight inline-block mb-6">
                VINLIGNA
              </a>
              <p className="text-background/70 mb-8 max-w-xs">
                Exklusive Möbel aus recycelten Weinfässern, die Tradition, Handwerkskunst und Nachhaltigkeit vereinen.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse" 
                  className="px-4 py-3 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-background/30 text-background transition-all"
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-wine text-white py-3 px-6 rounded-lg hover:bg-wine-dark transition-colors group"
                >
                  <span>Abonnieren</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-white">Für Unternehmen</h4>
              <ul className="space-y-3">
                <FooterLink href="#business">Maßgeschneiderte Lösungen</FooterLink>
                <FooterLink href="#business">Gastronomie</FooterLink>
                <FooterLink href="#business">Weingüter</FooterLink>
                <FooterLink href="#business">Restaurants</FooterLink>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-white">Für Enthusiasten</h4>
              <ul className="space-y-3">
                <FooterLink href="#private">Möbel</FooterLink>
                <FooterLink href="#private">Weinregale</FooterLink>
                <FooterLink href="#private">Accessoires</FooterLink>
                <FooterLink href="#private">Geschenkideen</FooterLink>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-white">Über Uns</h4>
              <ul className="space-y-3">
                <FooterLink href="#about">Unsere Geschichte</FooterLink>
                <FooterLink href="#about">Handwerkskunst</FooterLink>
                <FooterLink href="#about">Nachhaltigkeit</FooterLink>
                <FooterLink href="#contact">Werkstatt besuchen</FooterLink>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-white">Kontakt</h4>
              <ul className="space-y-3">
                <FooterLink href="#contact">Kontakt aufnehmen</FooterLink>
                <FooterLink href="mailto:info@vinligna.com">E-Mail senden</FooterLink>
                <FooterLink href="tel:+4963623094990">Anrufen</FooterLink>
                <FooterLink href="#contact">Besuchen</FooterLink>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/60 mb-4 md:mb-0">
              © {currentYear} VinLignum Holzmanufaktur GmbH & Co. KG. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                AGB
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-sm text-background/70 hover:text-white transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
