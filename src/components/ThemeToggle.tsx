
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

const ThemeToggle = ({ className = '', isScrolled }: ThemeToggleProps) => {
  const { theme, setTheme, mounted } = useAppTheme();

  if (!mounted) {
    return <div className={`w-6 h-6 ${className}`} />;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={cn(
        "w-6 h-6 flex items-center justify-center transition-colors duration-300 rounded-full relative z-[400]",
        theme === 'light' ? "text-foreground hover:text-wine" : "text-foreground hover:text-white/80",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
