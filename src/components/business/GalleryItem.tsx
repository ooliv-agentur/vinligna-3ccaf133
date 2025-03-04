
interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

export const GalleryItem = ({ image, title, category }: GalleryItemProps) => (
  <div className="group rounded-lg overflow-hidden shadow-md">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover image-hover"
      />
    </div>
    <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-sm text-white/60">
        <span className="text-wine">{category}</span>
      </p>
    </div>
  </div>
);
