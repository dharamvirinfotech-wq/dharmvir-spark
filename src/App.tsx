import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import Technologies from "./pages/Technologies.tsx";
import HireDeveloper from "./pages/HireDeveloper.tsx";
import NotFound from "./pages/NotFound.tsx";
import WebDevelopment from "./pages/services/WebDevelopment.tsx";
import MobileDevelopment from "./pages/services/MobileDevelopment.tsx";
import AiDevelopment from "./pages/services/AiDevelopment.tsx";
import Ecommerce from "./pages/services/Ecommerce.tsx";
import ProductEngineering from "./pages/services/ProductEngineering.tsx";
import DedicatedTeams from "./pages/services/DedicatedTeams.tsx";
import Frontend from "./pages/technologies/Frontend.tsx";
import Backend from "./pages/technologies/Backend.tsx";
import Mobile from "./pages/technologies/Mobile.tsx";
import DatabaseStorage from "./pages/technologies/DatabaseStorage.tsx";
import CloudDevops from "./pages/technologies/CloudDevops.tsx";
import AiMl from "./pages/technologies/AiMl.tsx";
import CmsEcommerce from "./pages/technologies/CmsEcommerce.tsx";
import SecurityTesting from "./pages/technologies/SecurityTesting.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/ai-development" element={<AiDevelopment />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/product-engineering" element={<ProductEngineering />} />
          <Route path="/services/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/hire-developer" element={<HireDeveloper />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
