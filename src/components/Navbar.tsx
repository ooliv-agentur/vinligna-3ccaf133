import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, MapPin, Wine, User, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="inline-block" aria-label="VINLIGNA">
          <img 
            src={isScrolled 
              ? "/lovable-uploads/eef04cda-cc19-4e97-9136-dcd93f60b698.png" 
              : "/lovable-uploads/50941805-7198-4381-a214-435f243a45b4.png"} 
            alt="VINLIGNA" 
            className="h-6 md:h-8" 
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/business" isScrolled={isScrolled}>Weingüter, Gastronomie & Hotellerie</NavLink>
          <NavLink to="/private" isScrolled={isScrolled}>Weinliebhaber & Privatkunden</NavLink>
          <NavLink to="/#contact" isScrolled={isScrolled}>Kontakt</NavLink>
        </nav>

        <button
          className={cn(
            "md:hidden focus:outline-none z-50",
            isMobileMenuOpen ? "text-white" : (isScrolled ? "text-foreground" : "text-white")
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden flex flex-col"
          >
            <div className="flex flex-col justify-between h-full px-6 py-20 overflow-auto">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex justify-center mb-12"
              >
                <img 
                  src="/lovable-uploads/50941805-7198-4381-a214-435f243a45b4.png" 
                  alt="VINLIGNA" 
                  className="h-8" 
                />
              </motion.div>
              
              <motion.nav 
                className="mb-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <ul className="flex flex-col space-y-6">
                  <MenuNavItem 
                    to="/" 
                    icon={<Home className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.3}
                  >
                    Startseite
                  </MenuNavItem>
                  <MenuNavItem 
                    to="/business" 
                    icon={<Wine className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.4}
                  >
                    Weingüter, Gastronomie & Hotellerie
                  </MenuNavItem>
                  <MenuNavItem 
                    to="/private" 
                    icon={<User className="w-5 h-5 mr-4 text-wine" />}
                    onClick={() => setIsMobileMenuOpen(false)}
                    delay={0.5}
                  >
                    Weinliebhaber & Privatkunden
                  </MenuNavItem>
                </ul>
              </motion.nav>
              
              <motion.div 
                className="mt-12 border-t border-white/10 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-sm uppercase tracking-wider text-white/60 mb-6 font-light">Kontaktieren Sie uns</h3>
                <ul className="space-y-6">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
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
                    transition={{ delay: 0.8, duration: 0.5 }}
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
                    transition={{ delay: 0.9, duration: 0.5 }}
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
                className="mt-8 pt-8 border-t border-white/10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <a 
                  href="/#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center bg-wine hover:bg-wine-light text-white px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Kontakt aufnehmen
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
            : "text-white hover:text-white/80 after:bg-white"
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
          : "text-white hover:text-white/80 after:bg-white"
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
