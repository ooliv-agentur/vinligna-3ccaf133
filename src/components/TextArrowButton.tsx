
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppTheme } from '@/hooks/use-theme';

interface TextArrowButtonProps {
  text: string;
  href: string;
  className?: string;
}

const TextArrowButton = ({ text, href, className = '' }: TextArrowButtonProps) => {
  const { isDarkMode } = useAppTheme();
  
  return (
    <a 
      href={href} 
      className={`inline-flex items-center text-wine hover:text-wine-dark transition-colors duration-300 group ${className}`}
    >
      <span className="mr-2 font-medium">{text}</span>
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        className="transition-transform"
      >
        <ArrowRight size={18} className="text-wine" />
      </motion.div>
    </a>
  );
};

export default TextArrowButton;
