
import React from 'react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export const ProductCard = ({ icon, title, description, image }: ProductCardProps) => (
  <div className="flex flex-col h-full hover-scale">
    <div className="relative h-56 overflow-hidden rounded-t-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover image-hover"
      />
    </div>
    <div className="flex-1 p-6 bg-white/5 backdrop-blur-sm rounded-b-lg border border-t-0 border-white/10">
      <div className="mb-4 bg-wine-light/20 w-12 h-12 rounded-full flex items-center justify-center text-wine">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);
