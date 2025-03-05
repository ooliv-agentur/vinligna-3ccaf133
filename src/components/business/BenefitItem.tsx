
import { Check } from 'lucide-react';

interface BenefitItemProps {
  title: string;
  description: string;
}

export const BenefitItem = ({ title, description }: BenefitItemProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="w-5 h-5 bg-wine rounded-full flex items-center justify-center">
        <Check className="text-background w-3 h-3" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-medium mb-1 text-foreground">{title}</h4>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  </div>
);
