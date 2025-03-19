import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import BusinessFaq from '@/components/BusinessFaq';
import TeamSection from '@/components/TeamSection';
import ProductionProcess from '@/components/ProductionProcess';
import BrandAffiliation from '@/components/BrandAffiliation';

// Newly created components
import HeroSection from '@/components/business/HeroSection';
import FullWidthImageSection from '@/components/business/FullWidthImageSection';
import AboutSection from '@/components/business/AboutSection';
import ProductsSection from '@/components/business/ProductsSection';
import BenefitsSection from '@/components/business/BenefitsSection';
import GallerySection from '@/components/business/GallerySection';
import { useAppTheme } from '@/hooks/use-theme';

const BusinessPage = () => {
  const { isDarkMode } = useAppTheme();
  
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

    // Update meta data for Business page
    document.title = "Weinfass Möbel für Weingüter & Gastronomie | VINLIGNA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Maßgeschneiderte Weinfass Möbel für Weingüter, Restaurants & Hotels. VINLIGNA fertigt exklusive Möbel aus Barrique-Fässern – nachhaltig, stilvoll und individuell anpassbar. Jetzt entdecken.");
    }
    
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute("href", "/lovable-uploads/d0e6ed01-5afe-498b-871d-c17c129e711e.png");
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
    <div className={`min-h-screen overflow-x-hidden ${isDarkMode ? 'bg-darkbg' : 'bg-white'}`}>
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
      <BrandAffiliation />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BusinessPage;
