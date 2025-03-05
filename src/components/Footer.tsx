
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className="bg-black text-background dark:bg-foreground dark:text-background">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <a href="/" className="inline-block mb-6">
                <img 
                  src="/lovable-uploads/eef04cda-cc19-4e97-9136-dcd93f60b698.png" 
                  alt="VINLIGNA" 
                  className={theme === 'dark' ? "h-8 brightness-0 invert" : "h-8"}
                />
              </a>
              <p className="text-foreground mb-8 max-w-xs dark:text-background/70">
                Exklusive Möbel aus recycelten Weinfässern, die Tradition, Handwerkskunst und Nachhaltigkeit vereinen.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-medium mb-4 text-foreground dark:text-background">Hauptseiten</h4>
              <ul className="space-y-3">
                <FooterLink href="/business">Weingüter, Gastronomie & Hotellerie</FooterLink>
                <FooterLink href="/private">Weinliebhaber & Privatkunden</FooterLink>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-foreground dark:text-background">Kontakt</h4>
              <ul className="space-y-3">
                <FooterLink href="#contact">Kontakt aufnehmen</FooterLink>
                <FooterLink href="mailto:info@vinligna.com">E-Mail senden</FooterLink>
                <FooterLink href="tel:+4963623094990">Anrufen</FooterLink>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-medium mb-4 text-foreground dark:text-background">Rechtliches</h4>
              <ul className="space-y-3">
                <FooterLink href="#impressum">Impressum</FooterLink>
                <FooterLink href="#datenschutz">Datenschutz</FooterLink>
                <FooterLink href="#cookies">Cookies</FooterLink>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-foreground/20 dark:border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-foreground/60 dark:text-background/60 mb-4 md:mb-0">
              © {currentYear} VinLignum Holzmanufaktur GmbH & Co. KG. Alle Rechte vorbehalten.
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
      className="text-sm text-foreground/70 hover:text-foreground transition-colors dark:text-background/70 dark:hover:text-background"
    >
      {children}
    </a>
  </li>
);

export default Footer;
