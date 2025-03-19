
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProductGallery from '@/components/ProductGallery';
import BrandAffiliation from '@/components/BrandAffiliation';

const Index = () => {
  useEffect(() => {
    // Set SEO meta tags
    document.title = "VINLIGNA | Exklusive Fassmöbel aus recycelten Weinfässern";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "VINLIGNA verwandelt recycelte Weinfässer in handgefertigte Möbel für Weingüter, Gastronomie und Weinliebhaber. Entdecken Sie nachhaltige Eleganz für Ihr Zuhause oder Geschäft.");
    }
    
    // Ensure favicon is set
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute("href", "/lovable-uploads/d0e6ed01-5afe-498b-871d-c17c129e711e.png");
    }
    
    // Smooth scroll for anchor links
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

    // Page entry animation - add a class to body when page is loaded
    document.body.classList.add('page-loaded');

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-background">
      <Navbar />
      <Hero />
      <About />
      <ProductGallery />
      <Contact 
        subtitle="Kontakt"
        title='Lassen Sie uns ins <span class="highlight">Gespräch</span> kommen'
        description="Wir sind für all Ihre Fragen da - egal ob Privatperson oder Unternehmen. Nehmen Sie Kontakt auf und entdecken Sie die Welt der Möbel aus Weinfässern."
        formSource="VINLIGNA Startseite"
      />
      <Faq />
      <BrandAffiliation />
      
      {/* Manufakturhof Alsenz Link */}
      <div className="bg-neutral-50 dark:bg-neutral-900 py-12 text-center">
        <div className="container mx-auto">
          <a 
            href="https://manufakturhof-alsenz.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block transition-transform hover:scale-105"
            aria-label="Besuchen Sie Manufakturhof Alsenz"
          >
            <img 
              src="/lovable-uploads/085237aa-3df7-4c1f-8eeb-645dcec2875e.png" 
              alt="Manufakturhof Alsenz" 
              className="h-20 mx-auto"
            />
          </a>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
