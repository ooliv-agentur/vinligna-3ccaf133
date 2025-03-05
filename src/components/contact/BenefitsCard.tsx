
import { Check } from 'lucide-react';

interface BenefitsCardProps {
  benefits: string[];
}

const BenefitsCard = ({ benefits }: BenefitsCardProps) => {
  return (
    <div className="bg-wine/5 backdrop-blur-sm rounded-3xl p-8">
      <h3 className="text-xl font-light mb-6 text-white">Warum VINLIGNA?</h3>
      <ul className="space-y-3">
        {benefits.slice(0, 4).map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="mt-1.5 mr-3 flex-shrink-0 w-5 h-5 bg-wine rounded-full flex items-center justify-center">
              <Check className="text-white w-3 h-3" />
            </div>
            <p className="text-sm text-white/80">{benefit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsCard;
