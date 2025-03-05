import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, MapPin, Wine, User, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, showContactForm]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setShowContactForm(false);
    }
  }, [isMobileMenuOpen]);

  const handleContactClick = (e: React.MouseEvent) => {
    if (isMobileMenuOpen) {
      e.preventDefault();
      setShowContactForm(true);
    }
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoSrc = "/lovable-uploads/eef04cda-cc19-4e97-9136-dcd93f60b698.png"; // Always use dark logo
    
  const logoClass = cn(
    "h-6 md:h-8",
    isScrolled
      ? (theme === 'dark' ? "brightness-0 invert" : "")  // Dark theme on scroll: invert, Light theme: normal
      : (theme === 'dark' ? "brightness-0 invert" : "")  // Dark theme no scroll: invert, Light theme: normal
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out py-4 px-4 sm:px-6 md:px-12',
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="inline-block" aria-label="VINLIGNA">
            <img 
              src={logoSrc}
              alt="VINLIGNA" 
              className={logoClass}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/business" isScrolled={isScrolled}>Weingüter, Gastronomie & Hotellerie</NavLink>
            <NavLink to="/private" isScrolled={isScrolled}>Weinliebhaber & Privatkunden</NavLink>
            <NavLink to="/#contact" isScrolled={isScrolled}>Kontakt</NavLink>
            <ThemeToggle isScrolled={isScrolled} />
          </nav>

          <button
            className={cn(
              "md:hidden focus:outline-none z-[200]",
              isMobileMenuOpen ? "text-white fixed right-4 sm:right-6" : (isScrolled ? "text-foreground" : "text-white")
            )}
            onClick={handleToggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && !showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] bg-black"
            style={{
              touchAction: "none"
            }}
          >
            <div className="flex flex-col justify-between h-full px-4 sm:px-6 py-16 sm:py-20">
              <div className="flex justify-between items-center mb-8 sm:mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <img 
                    src="/lovable-uploads/50941805-7198-4381-a214-435f243a45b4.png" 
                    alt="VINLIGNA" 
                    className="h-6 sm:h-8" 
                  />
                </motion.div>
                
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <motion.nav 
                className="mb-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <ul className="flex flex-col space-y-4 sm:space-y-6">
                  <MenuNavItem 
                    to="/" 
                    icon={<Home className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.15}
                  >
                    Startseite
                  </MenuNavItem>
                  <MenuNavItem 
                    to="/business" 
                    icon={<Wine className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.2}
                  >
                    Weingüter, Gastronomie & Hotellerie
                  </MenuNavItem>
                  <MenuNavItem 
                    to="/private" 
                    icon={<User className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.25}
                  >
                    Weinliebhaber & Privatkunden
                  </MenuNavItem>
                </ul>
              </motion.nav>
              
              <motion.div 
                className="mt-8 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4 sm:mb-6 font-light">Kontaktieren Sie uns</h3>
                <ul className="space-y-4 sm:space-y-6">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-4 text-wine" />
                    <a href="mailto:info@vinligna.com" className="text-white hover:text-wine transition-colors">
                      info@vinligna.com
                    </a>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-4 text-wine" />
                    <a href="tel:+4963623094990" className="text-white hover:text-wine transition-colors">
                      +49 6362 309 49 90
                    </a>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, duration: 0.3 }}
                    className="flex items-start"
                  >
                    <MapPin className="w-5 h-5 mr-4 text-wine flex-shrink-0 mt-1" />
                    <address className="not-italic text-white/80">
                      VinLignum Holzmanufaktur<br />
                      Industriestraße 19<br />
                      67821 Alsenz
                    </address>
                  </motion.li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center bg-wine hover:bg-wine-light text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md transition-colors duration-300"
                >
                  Kontakt aufnehmen
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] bg-black"
            style={{
              touchAction: "none"
            }}
          >
            <div className="flex flex-col h-full px-4 sm:px-6 py-10 sm:py-12">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <img 
                  src="/lovable-uploads/50941805-7198-4381-a214-435f243a45b4.png" 
                  alt="VINLIGNA" 
                  className="h-6" 
                />
                <button
                  className="text-white focus:outline-none z-[999]"
                  onClick={() => setShowContactForm(false)}
                  aria-label="Close contact form"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-white text-xl sm:text-2xl font-light mb-1 sm:mb-2">Lassen Sie uns ins</h2>
                <h2 className="text-wine text-xl sm:text-2xl font-light mb-3 sm:mb-4">Gespräch kommen</h2>
                <p className="text-white/80 text-xs sm:text-sm">
                  Wir sind für all Ihre Fragen da - egal ob Privatperson oder Unternehmen. 
                  Nehmen Sie Kontakt auf und entdecken Sie die Welt der Möbel aus Weinfässern.
                </p>
              </div>
              
              <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-white/60 text-sm mb-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Ihr vollständiger Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-wine"
                  />
                </div>
                
                <div className="flex flex-col space-y-3 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label className="block text-white/60 text-sm mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="Ihre Email-Adresse" 
                      className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-wine"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-white/60 text-sm mb-1">Telefon</label>
                    <input 
                      type="tel" 
                      placeholder="Ihre Telefonnummer" 
                      className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-wine"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-1">Nachricht</label>
                  <textarea 
                    rows={4} 
                    placeholder="Wie können wir Ihnen helfen?" 
                    className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-wine"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-wine hover:bg-wine-light text-white py-2.5 sm:py-3 rounded-md transition-colors duration-300 mt-3 sm:mt-4"
                >
                  Nachricht senden
                </button>
                
                <div className="text-white/60 text-xs text-center mt-3 sm:mt-4">
                  Wir werden Ihre Daten vertraulich behandeln und nur für die Bearbeitung Ihrer Anfrage verwenden.
                </div>
              </form>
              
              <div className="mt-auto pt-6 sm:pt-8 flex justify-center">
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Zurück zum Menü
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  isScrolled?: boolean;
}

const NavLink = ({ to, children, isScrolled }: NavLinkProps) => {
  const isHashLink = to.startsWith('/#');
  
  if (isHashLink) {
    return (
      <a
        href={to.substring(1)}
        className={cn(
          "text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300",
          isScrolled 
            ? "text-foreground hover:text-foreground/80 after:bg-foreground" 
            : "text-foreground dark:text-white hover:text-foreground/80 dark:hover:text-white/80 after:bg-foreground dark:after:bg-white"
        )}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300",
        isScrolled 
          ? "text-foreground hover:text-foreground/80 after:bg-foreground" 
          : "text-foreground dark:text-white hover:text-foreground/80 dark:hover:text-white/80 after:bg-foreground dark:after:bg-white"
      )}
    >
      {children}
    </Link>
  );
};

interface MenuNavItemProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  delay?: number;
}

const MenuNavItem = ({ to, children, icon, onClick, delay = 0 }: MenuNavItemProps) => {
  const isHashLink = to.startsWith('/#');
  
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center text-xl text-white hover:text-wine transition-colors group"
    >
      {icon}
      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-wine group-hover:after:w-full after:transition-all after:duration-300">
        {children}
      </span>
    </motion.div>
  );
  
  if (isHashLink) {
    return (
      <li>
        <a
          href={to.substring(1)}
          onClick={onClick}
        >
          {content}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
      >
        {content}
      </Link>
    </li>
  );
};

export default Navbar;
