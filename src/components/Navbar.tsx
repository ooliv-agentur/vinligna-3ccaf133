
import { useState, useEffect } from 'react';
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
        <a href="/" className="text-2xl font-semibold tracking-tight">
          VINLIGNA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#business">For Business</NavLink>
          <NavLink href="#private">For Enthusiasts</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
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
            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#business" onClick={() => setIsMobileMenuOpen(false)}>
              For Business
            </MobileNavLink>
            <MobileNavLink href="#private" onClick={() => setIsMobileMenuOpen(false)}>
              For Enthusiasts
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg font-medium py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
