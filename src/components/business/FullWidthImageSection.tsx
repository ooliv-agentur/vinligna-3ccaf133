
const FullWidthImageSection = () => {
  return (
    <section className="w-full h-[90vh] relative">
      <img 
        src="/lovable-uploads/3a04196f-9e44-4ccd-adb0-b0f1f13a34be.png" 
        alt="Weinfass Möbel Showroom" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </section>
  );
};

export default FullWidthImageSection;
