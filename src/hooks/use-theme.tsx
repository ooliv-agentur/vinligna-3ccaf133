
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useAppTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDarkMode = mounted && theme === 'dark';
  const isLightMode = mounted && theme === 'light';
  
  // Get background color based on theme
  const backgroundColor = isDarkMode ? '#505358' : '#ffffff';
  
  // Get text color based on theme for mobile menu
  const menuTextColor = isDarkMode ? 'white' : 'black';
  const menuIconColor = isDarkMode ? 'text-white' : 'text-black';
  
  return {
    theme,
    setTheme,
    isDarkMode,
    isLightMode,
    mounted,
    backgroundColor,
    menuTextColor,
    menuIconColor
  };
}
