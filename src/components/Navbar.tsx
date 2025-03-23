
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAppTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Button } from './ui/button';

const navigation = [
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Business', href: '/business' },
  { name: 'Privat', href: '/private' },
  { name: 'Über Uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const { isDarkMode } = useAppTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarClass = cn(
    "fixed w-full top-0 z-50 transition-colors duration-300",
    isScrolled ? "bg-darkbg/95 backdrop-blur-sm" : "bg-transparent",
    isDarkMode ? "border-b border-white/5" : "border-b border-gray-100"
  );

  // Inside the component, make sure the light mode icons are black
  const burgerButtonClass = cn(
    "flex items-center justify-center w-10 h-10 rounded-md focus:outline-none lg:hidden",
    isDarkMode ? "text-white" : "text-black" // This ensures black in light mode
  );

  const closeButtonClass = cn(
    "absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-md",
    isDarkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10" // This ensures black in light mode
  );

  // Ensure the mobile menu text is also black in light mode
  const mobileLinkClass = cn(
    "flex items-center gap-3 py-3 px-4 rounded-lg transition-colors",
    isDarkMode 
      ? "text-white hover:bg-white/10" 
      : "text-black hover:bg-black/10" // This ensures black text in light mode
  );

  return (
    <nav className={navbarClass}>
      <div className="container max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isDarkMode ? "text-white hover:text-gray-300" : "text-gray-700 hover:text-gray-900",
                  location.pathname === item.href ? "underline underline-offset-4" : ""
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link to="/kontakt">
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className={burgerButtonClass}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 w-full h-full bg-darkbg z-50 p-4"
        initial={{ x: "100%" }}
        animate={isMobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <button
          onClick={closeMobileMenu}
          type="button"
          className={closeButtonClass}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-start justify-center h-full space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={mobileLinkClass}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="outline" className="w-full">
            <Link to="/kontakt" onClick={closeMobileMenu}>
              Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
