
import React from 'react';
import { Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface BenefitItemProps {
  title: string;
  description: string;
  icon?: string;
}

export const BenefitItem = ({ title, description, icon }: BenefitItemProps) => {
  // Find the correct icon component from Lucide icons
  let IconComponent: React.ReactNode = <Check className="text-white w-3 h-3" />;
  
  // Only try to use the custom icon if one is specified
  if (icon) {
    const DynamicIcon = (LucideIcons as any)[icon];
    if (DynamicIcon) {
      IconComponent = <DynamicIcon className="text-white w-3 h-3" />;
    }
  }
  
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-5 h-5 bg-wine rounded-full flex items-center justify-center">
          {IconComponent}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1 text-foreground">{title}</h4>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
};
