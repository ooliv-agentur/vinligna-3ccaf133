import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAppTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

// Create a Logo component to be used in the Navbar
const Logo = () => {
  const { isDarkMode } = useAppTheme();
  
  return (
    <div className="flex items-center">
      <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.432 6.00006H24.432L16.584 30.0001H13.584L5.73602 6.00006H8.78402L15.132 26.1481L21.432 6.00006Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M24.8334 30.0001V6.00006H27.6334V30.0001H24.8334Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M32.8031 30.0001V6.00006H35.6031V27.4321H47.7591V30.0001H32.8031Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M54.3102 30.0001V6.00006H57.1102V27.4321H69.2662V30.0001H54.3102Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M71.3375 30.0001V6.00006H74.1375V30.0001H71.3375Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M92.2758 30.0001L83.0518 10.7761V30.0001H80.2518V6.00006H83.1958L92.0278 24.5281V6.00006H94.8278V30.0001H92.2758Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M108.375 30.0001L99.7347 6.00006H102.807L109.731 25.8481L116.655 6.00006H119.631L111.087 30.0001H108.375Z" fill={isDarkMode ? "#fff" : "#000"} />
        <path d="M132.432 30.0001H129.48L123.84 20.5201H122.736V30.0001H119.952V6.00006H125.496C127.224 6.00006 128.688 6.31206 129.888 6.93606C131.104 7.54406 132.016 8.40806 132.624 9.52806C133.248 10.6321 133.56 11.9361 133.56 13.4401C133.56 15.1361 133.152 16.6401 132.336 17.9521C131.536 19.2641 130.272 20.1761 128.544 20.6881L132.432 30.0001ZM122.736 18.1361H125.352C126.72 18.1361 127.736 17.7321 128.4 16.9241C129.064 16.1161 129.396 14.9961 129.396 13.5641C129.396 12.1001 129.064 11.0161 128.4 10.3121C127.736 9.60806 126.72 9.25606 125.352 9.25606H122.736V18.1361Z" fill={isDarkMode ? "#fff" : "#000"} />
      </svg>
    </div>
  );
};

const navigation = [
  { name: 'Business', href: '/business' },
  { name: 'Private', href: '/private' },
  { name: 'Design', href: '/design' },
  { name: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useAppTheme();

  useEffect(() => {
    // Close the mobile menu when the route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent py-6 relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-wine",
                isDarkMode ? "text-white/80" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {isDarkMode ? "☀️" : "🌙"}
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className={cn("h-4 w-4", isDarkMode ? "text-white" : "text-gray-700")} />
            ) : (
              <Menu className={cn("h-4 w-4", isDarkMode ? "text-white" : "text-gray-700")} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md rounded-b-lg overflow-hidden"
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="py-4 px-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-wine",
                isDarkMode ? "text-white/80" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="sm" className="w-full justify-center" onClick={toggleTheme}>
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
