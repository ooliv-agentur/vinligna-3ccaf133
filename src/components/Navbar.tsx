
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/business" isScrolled={isScrolled}>Weingüter, Gastronomie & Hotellerie</NavLink>
          <NavLink to="/private" isScrolled={isScrolled}>Weinliebhaber & Privatkunden</NavLink>
          <NavLink to="/#contact" isScrolled={isScrolled}>Kontakt</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden focus:outline-none",
            isScrolled ? "text-foreground" : "text-white"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4"
        >
          <nav className="flex flex-col space-y-4 px-6">
            <MobileNavLink to="/business" onClick={() => setIsMobileMenuOpen(false)}>
              Weingüter, Gastronomie & Hotellerie
            </MobileNavLink>
            <MobileNavLink to="/private" onClick={() => setIsMobileMenuOpen(false)}>
              Weinliebhaber & Privatkunden
            </MobileNavLink>
            <MobileNavLink to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Kontakt
            </MobileNavLink>
          </nav>
        </motion.div>
      )}
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
  // Check if this is a hash link (e.g., #contact) that should be on the homepage
  const isHashLink = to.startsWith('/#');
  
  if (isHashLink) {
    return (
      <a
        href={to.substring(1)} // Remove the leading '/' for hash links
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

const MobileNavLink = ({ to, children, onClick }: NavLinkProps) => {
  // Check if this is a hash link (e.g., #contact) that should be on the homepage
  const isHashLink = to.startsWith('/#');
  
  if (isHashLink) {
    return (
      <a
        href={to.substring(1)} // Remove the leading '/' for hash links
        onClick={onClick}
        className="text-lg font-medium py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-lg font-medium py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Navbar;
