
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

const ThemeToggle = ({ className = '', isScrolled }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-6 h-6 ${className}`} />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`w-6 h-6 flex items-center justify-center transition-colors duration-300 rounded-full relative z-[400] ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
