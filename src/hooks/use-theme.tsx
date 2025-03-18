
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { getBackgroundColor, getTextColor } from '@/lib/theme-constants';

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
  const backgroundColor = getBackgroundColor(isDarkMode);
  const textColor = getTextColor(isDarkMode);
  
  return {
    theme,
    setTheme,
    isDarkMode,
    isLightMode,
    mounted,
    backgroundColor,
    textColor
  };
}
