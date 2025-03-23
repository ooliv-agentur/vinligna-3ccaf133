
import React from 'react';
import { useAppTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  const { isDarkMode } = useAppTheme();
  
  return (
    <div className={cn("w-32", className)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 363 74" 
        className={cn("w-full h-auto", isDarkMode ? "fill-white" : "fill-gray-900")}
      >
        <path d="M43.9,1.6L24.8,69.7H10.4L0,1.6h14.2l6.7,49.5h0.4l12.5-49.5H44l12.4,49.5h0.4L63.5,1.6h14.2L67.4,69.7H52.9L43.9,1.6L43.9,1.6z"/>
        <path d="M108.2,1.6v68.2H95.3V1.6H108.2z"/>
        <path d="M155.4,1.6v11.2h-14.9v57h-12.8v-57H113V1.6H155.4z"/>
        <path d="M192.5,1.6v11.2h-23.1v18.6h17.9v10.6h-17.9v18.2h23.5v10.6h-36.3V1.6H192.5z"/>
        <path d="M234.6,1.6v68.2h-12.8V36h-0.4l-13.5,33.7h-12.8V1.6h12.8v33.7h0.4L222,1.6H234.6z"/>
        <path d="M290.7,1.6v68.2h-12.8V36h-0.4l-13.5,33.7h-12.8V1.6h12.8v33.7h0.4l13.7-33.7H290.7z"/>
        <path d="M338.5,11.7l-10,4.8c-1.3-2.3-3.6-3.4-6.8-3.4c-3.2,0-4.8,0.9-4.8,2.8c0,5.4,21.6,2.1,21.6,18.6c0,10.5-9.2,15.7-20.5,15.7
        c-11.5,0-19.2-6.3-22.7-14.1l11-4.8c1.5,3.6,5.3,5.6,10.2,5.6c3.4,0,5.6-0.8,5.6-3.1c0-5.6-21.6-1.8-21.6-18.3c0-10,8.1-15.7,19.2-15.7
        C327.6,0,335.1,4.9,338.5,11.7z"/>
        <path d="M362.8,1.6L343.2,69.7h-13.5l19.5-68.2H362.8z"/>
      </svg>
    </div>
  );
};

export default Logo;
