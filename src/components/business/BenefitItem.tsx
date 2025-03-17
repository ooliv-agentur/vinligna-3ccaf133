
import { Check, LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface BenefitItemProps {
  title: string;
  description: string;
  icon?: string;
}

export const BenefitItem = ({ title, description, icon }: BenefitItemProps) => {
  // Dynamically render the icon if provided
  const IconComponent = icon ? (LucideIcons as Record<string, LucideIcon>)[icon] : null;
  
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-5 h-5 bg-wine rounded-full flex items-center justify-center">
          {IconComponent ? (
            <IconComponent className="text-white w-3 h-3" />
          ) : (
            <Check className="text-white w-3 h-3" />
          )}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1 text-foreground">{title}</h4>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
    </div>
  );
};
