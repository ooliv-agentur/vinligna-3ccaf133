import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import BusinessPage from "./pages/BusinessPage";
import PrivatePage from "./pages/PrivatePage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AGBPage from "./pages/AGBPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              <Route path="/b2b" element={<BusinessPage />} />
              <Route path="/b2c" element={<PrivatePage />} />
              
              <Route path="/business" element={<Navigate to="/b2b" replace />} />
              <Route path="/private" element={<Navigate to="/b2c" replace />} />
              
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/agb" element={<AGBPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LazyMotion>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
