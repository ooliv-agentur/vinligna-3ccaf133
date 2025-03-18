
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
  
  return {
    theme,
    setTheme,
    isDarkMode,
    isLightMode,
    mounted
  };
}
