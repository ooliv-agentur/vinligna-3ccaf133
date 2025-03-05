
interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
}

export const GalleryItem = ({ image, title, category }: GalleryItemProps) => (
  <div className="group relative h-full overflow-hidden rounded-lg bg-foreground/5 backdrop-blur-sm border border-foreground/10">
    <div className="relative aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="font-medium text-xl text-foreground mb-1">{title}</h3>
        <p className="text-wine">
          {category}
        </p>
      </div>
    </div>
  </div>
);
