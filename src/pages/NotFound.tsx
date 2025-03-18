
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandAffiliation from "@/components/BrandAffiliation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-24 px-6 bg-white dark:bg-background">
        <div className="text-center max-w-md">
          <div className="inline-block mb-8 p-4 rounded-full bg-oak-light">
            <h1 className="text-6xl font-light text-wine">404</h1>
          </div>
          <h2 className="text-2xl font-medium mb-4 text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center text-sm font-medium bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
      <BrandAffiliation />
      <Footer />
    </div>
  );
};

export default NotFound;
