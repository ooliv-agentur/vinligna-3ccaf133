
import { useAppTheme } from '@/hooks/use-theme';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

/**
 * Helper function to generate theme-aware classNames
 */
export function themeClass(options: {
  base?: string;
  light?: string;
  dark?: string;
  mobile?: string;
  desktop?: string;
  lightMobile?: string;
  darkMobile?: string;
  lightDesktop?: string;
  darkDesktop?: string;
}) {
  const { isDarkMode } = useAppTheme();
  const isMobile = useIsMobile();
  
  return cn(
    options.base,
    isDarkMode ? options.dark : options.light,
    isMobile ? options.mobile : options.desktop,
    isDarkMode && isMobile ? options.darkMobile : null,
    isDarkMode && !isMobile ? options.darkDesktop : null,
    !isDarkMode && isMobile ? options.lightMobile : null,
    !isDarkMode && !isMobile ? options.lightDesktop : null
  );
}

/**
 * Generate gradient overlay classes with consistent opacity levels
 */
export function overlayClass(opacity: 'light' | 'medium' | 'dark' | 'very-dark') {
  const opacityMap = {
    'light': 'from-black/60 via-black/40 to-black/20',
    'medium': 'from-black/80 via-black/60 to-black/30',
    'dark': 'from-black/90 via-black/70 to-black/40',
    'very-dark': 'from-black via-black/90 to-black/70'
  };
  
  return `bg-gradient-to-t ${opacityMap[opacity]}`;
}

/**
 * Get section background color based on theme
 */
export function getSectionBackground() {
  const { isDarkMode } = useAppTheme();
  return isDarkMode ? 'bg-darkbg' : 'bg-white';
}

/**
 * Get text color based on theme for mobile menu
 */
export function getMobileMenuTextColor() {
  const { isDarkMode } = useAppTheme();
  return isDarkMode ? 'text-white' : 'text-black';
}
