
/**
 * Theme color constants to ensure consistency across the application
 */

// Base theme colors
export const themeColors = {
  // Light mode colors
  light: {
    background: '#ffffff',
    foreground: 'hsl(20 12% 10%)',
    muted: 'hsl(30 20% 96%)',
    mutedForeground: 'hsl(20 10% 40%)',
    border: 'hsl(20 10% 90%)'
  },
  // Dark mode colors
  dark: {
    background: '#505358', // Our standard gray for dark mode
    foreground: '#ffffff',
    muted: 'hsl(0 0% 15%)',
    mutedForeground: 'hsl(0 0% 70%)',
    border: 'hsl(0 0% 20%)'
  },
  // Brand colors (same in both modes)
  brand: {
    wine: 'hsl(20 57% 53%)', // #D96B37 - soft terracotta
    wineLight: 'hsl(20 65% 89%)', // #EDE0D4 - warm beige
    wineDark: 'hsl(20 57% 40%)', // darker terracotta
    oak: 'hsl(30 30% 60%)',
    oakLight: 'hsl(30 30% 90%)',
    oakDark: 'hsl(20 34% 27%)' // #5C3B2E - dark wood brown
  }
};

/**
 * Get background color based on theme
 */
export const getBackgroundColor = (isDarkMode: boolean): string => {
  return isDarkMode ? themeColors.dark.background : themeColors.light.background;
};

/**
 * Get text color based on theme
 */
export const getTextColor = (isDarkMode: boolean): string => {
  return isDarkMode ? themeColors.dark.foreground : themeColors.light.foreground;
};

/**
 * Hero section and overlay specific styles
 */
export const heroStyles = {
  overlay: {
    backgroundColor: 'rgba(80, 83, 88, 0.6)' // Consistent overlay for hero sections
  },
  text: {
    color: '#ffffff' // Always white text in hero sections
  }
};
