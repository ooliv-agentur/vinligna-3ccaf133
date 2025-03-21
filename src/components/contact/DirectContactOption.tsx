
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppTheme } from '@/hooks/use-theme';

const DirectContactOption = () => {
  const { isDarkMode } = useAppTheme();
  
  const buttonClasses = cn(
    "inline-flex items-center justify-center w-full text-sm font-medium py-3 px-6 rounded-xl transition-all",
    isDarkMode
      ? "bg-white/10 text-white hover:bg-white/15 border border-white/20"
      : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
  );
  
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        href="mailto:info@vinligna.com"
        className={buttonClasses}
      >
        <Mail className="w-4 h-4 mr-2" />
        <span>info@vinligna.com</span>
      </a>
      
      <a
        href="tel:+496362309490"
        className={buttonClasses}
      >
        <Phone className="w-4 h-4 mr-2" />
        <span>+49 6362 309 49 90</span>
      </a>
    </div>
  );
};

export default DirectContactOption;
