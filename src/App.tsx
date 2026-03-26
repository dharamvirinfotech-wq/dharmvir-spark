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
import HireReactjs from "./pages/hire/HireReactjs.tsx";
import HireAngular from "./pages/hire/HireAngular.tsx";
import HireVuejs from "./pages/hire/HireVuejs.tsx";
import HireNextjs from "./pages/hire/HireNextjs.tsx";
import HireTypescript from "./pages/hire/HireTypescript.tsx";
import HireNodejs from "./pages/hire/HireNodejs.tsx";
import HirePython from "./pages/hire/HirePython.tsx";
import HirePhp from "./pages/hire/HirePhp.tsx";
import HireJava from "./pages/hire/HireJava.tsx";
import HireDotnet from "./pages/hire/HireDotnet.tsx";
import HireReactNative from "./pages/hire/HireReactNative.tsx";
import HireFlutter from "./pages/hire/HireFlutter.tsx";
import HireIos from "./pages/hire/HireIos.tsx";
import HireAndroid from "./pages/hire/HireAndroid.tsx";
import HireFullstack from "./pages/hire/HireFullstack.tsx";
import HireMern from "./pages/hire/HireMern.tsx";
import HireDevops from "./pages/hire/HireDevops.tsx";
import HireCloudArchitect from "./pages/hire/HireCloudArchitect.tsx";
import HireAiMl from "./pages/hire/HireAiMl.tsx";
import HireDataScientist from "./pages/hire/HireDataScientist.tsx";
import HireBlockchain from "./pages/hire/HireBlockchain.tsx";
import HireWordpress from "./pages/hire/HireWordpress.tsx";
import HireShopify from "./pages/hire/HireShopify.tsx";
import HireMagento from "./pages/hire/HireMagento.tsx";

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
          <Route path="/technologies/frontend" element={<Frontend />} />
          <Route path="/technologies/backend" element={<Backend />} />
          <Route path="/technologies/mobile" element={<Mobile />} />
          <Route path="/technologies/database" element={<DatabaseStorage />} />
          <Route path="/technologies/cloud" element={<CloudDevops />} />
          <Route path="/technologies/ai" element={<AiMl />} />
          <Route path="/technologies/cms" element={<CmsEcommerce />} />
          <Route path="/technologies/security" element={<SecurityTesting />} />
          <Route path="/hire-developer" element={<HireDeveloper />} />
          <Route path="/hire-developer/reactjs" element={<HireReactjs />} />
          <Route path="/hire-developer/angular" element={<HireAngular />} />
          <Route path="/hire-developer/vuejs" element={<HireVuejs />} />
          <Route path="/hire-developer/nextjs" element={<HireNextjs />} />
          <Route path="/hire-developer/typescript" element={<HireTypescript />} />
          <Route path="/hire-developer/nodejs" element={<HireNodejs />} />
          <Route path="/hire-developer/python" element={<HirePython />} />
          <Route path="/hire-developer/php" element={<HirePhp />} />
          <Route path="/hire-developer/java" element={<HireJava />} />
          <Route path="/hire-developer/dotnet" element={<HireDotnet />} />
          <Route path="/hire-developer/react-native" element={<HireReactNative />} />
          <Route path="/hire-developer/flutter" element={<HireFlutter />} />
          <Route path="/hire-developer/ios" element={<HireIos />} />
          <Route path="/hire-developer/android" element={<HireAndroid />} />
          <Route path="/hire-developer/fullstack" element={<HireFullstack />} />
          <Route path="/hire-developer/mern" element={<HireMern />} />
          <Route path="/hire-developer/devops" element={<HireDevops />} />
          <Route path="/hire-developer/cloud-architect" element={<HireCloudArchitect />} />
          <Route path="/hire-developer/ai-ml" element={<HireAiMl />} />
          <Route path="/hire-developer/data-scientist" element={<HireDataScientist />} />
          <Route path="/hire-developer/blockchain" element={<HireBlockchain />} />
          <Route path="/hire-developer/wordpress" element={<HireWordpress />} />
          <Route path="/hire-developer/shopify" element={<HireShopify />} />
          <Route path="/hire-developer/magento" element={<HireMagento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
