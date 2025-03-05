import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProductGallery from '@/components/ProductGallery';

const Index = () => {
  useEffect(() => {
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
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <ProductGallery />
      <Contact 
        subtitle="Kontakt"
        title='Lassen Sie uns ins <span class="highlight">Gespräch</span> kommen'
        description="Wir sind für all Ihre Fragen da - egal ob Privatperson oder Unternehmen. Nehmen Sie Kontakt auf und entdecken Sie die Welt der Möbel aus Weinfässern."
      />
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
