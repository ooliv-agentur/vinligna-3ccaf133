
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import BusinessFaq from '@/components/BusinessFaq';
import TeamSection from '@/components/TeamSection';
import ProductionProcess from '@/components/ProductionProcess';

// Newly created components
import HeroSection from '@/components/business/HeroSection';
import FullWidthImageSection from '@/components/business/FullWidthImageSection';
import AboutSection from '@/components/business/AboutSection';
import ProductsSection from '@/components/business/ProductsSection';
import BenefitsSection from '@/components/business/BenefitsSection';
import GallerySection from '@/components/business/GallerySection';

const BusinessPage = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });

    window.scrollTo(0, 0);

    document.title = "VINLIGNA | Maßgeschneiderte Weinfass-Möbel für Weingüter & Gastronomie";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Maßgefertigte, nachhaltige Weinfass-Möbel für Weingüter, Restaurants und Hotels. Werten Sie Ihren Geschäftsraum mit einzigartigen Unikaten auf.");
    }

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      <HeroSection />
      <FullWidthImageSection />
      <AboutSection />
      <TeamSection />
      <ProductsSection />
      <ProductionProcess isB2C={false} />
      <BenefitsSection />
      <GallerySection />
      <Contact 
        subtitle="Business Kontakt"
        title='Ihre maßgeschneiderte <span class="highlight">Geschäftslösung</span>'
        description="Werten Sie Ihre Räumlichkeiten auf und schaffen Sie ein einzigartiges Ambiente für Ihre Kunden. Kontaktieren Sie uns für individuelle Beratung und maßgeschneiderte Angebote für Ihr Unternehmen."
        formSource="Weingüter, Gastronomie & Hotellerie"
      />
      <BusinessFaq />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BusinessPage;
