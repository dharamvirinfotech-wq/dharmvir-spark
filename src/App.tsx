import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { store } from "@/store";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import HireLaravel from "./pages/hire/HireLaravel.tsx";
import HireDjango from "./pages/hire/HireDjango.tsx";
import HireGolang from "./pages/hire/HireGolang.tsx";
import HireRubyOnRails from "./pages/hire/HireRubyOnRails.tsx";
import HireSwift from "./pages/hire/HireSwift.tsx";
import HireKotlin from "./pages/hire/HireKotlin.tsx";
import HireGraphql from "./pages/hire/HireGraphql.tsx";
import HireAws from "./pages/hire/HireAws.tsx";
import HireMeanStack from "./pages/hire/HireMeanStack.tsx";
import HireUiUx from "./pages/hire/HireUiUx.tsx";
import HireQa from "./pages/hire/HireQa.tsx";
import HireSalesforce from "./pages/hire/HireSalesforce.tsx";
import HirePowerBi from "./pages/hire/HirePowerBi.tsx";
import HireRust from "./pages/hire/HireRust.tsx";
import HireGameDev from "./pages/hire/HireGameDev.tsx";
import DeveloperProfile from "./pages/DeveloperProfile.tsx";
import Promotion from "./pages/Promotion.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import AdminUsers from "./pages/admin/Users.tsx";
import AdminInquiries from "./pages/admin/Inquiries.tsx";
import SeoServices from "./pages/promotion/SeoServices.tsx";
import OnPageSeo from "./pages/promotion/OnPageSeo.tsx";
import OrganicSeo from "./pages/promotion/OrganicSeo.tsx";
import OffPageSeo from "./pages/promotion/OffPageSeo.tsx";
import LinkBuilding from "./pages/promotion/LinkBuilding.tsx";
import DigitalPr from "./pages/promotion/DigitalPr.tsx";
import EcommerceSeo from "./pages/promotion/EcommerceSeo.tsx";
import LocalSeo from "./pages/promotion/LocalSeo.tsx";
import TechnicalSeo from "./pages/promotion/TechnicalSeo.tsx";
import PpcManagement from "./pages/promotion/PpcManagement.tsx";
import SocialMediaMarketing from "./pages/promotion/SocialMediaMarketing.tsx";
import ContentMarketing from "./pages/promotion/ContentMarketing.tsx";
import EmailMarketing from "./pages/promotion/EmailMarketing.tsx";
import InfluencerMarketing from "./pages/promotion/InfluencerMarketing.tsx";
import VideoMarketing from "./pages/promotion/VideoMarketing.tsx";
import AffiliateMarketing from "./pages/promotion/AffiliateMarketing.tsx";
import AiContentGeneration from "./pages/promotion/AiContentGeneration.tsx";
import AiAnalytics from "./pages/promotion/AiAnalytics.tsx";
import ChatbotMarketing from "./pages/promotion/ChatbotMarketing.tsx";
import PredictiveMarketing from "./pages/promotion/PredictiveMarketing.tsx";
import AiAdOptimization from "./pages/promotion/AiAdOptimization.tsx";
import AiEmailAutomation from "./pages/promotion/AiEmailAutomation.tsx";
const queryClient = new QueryClient();

const App = () => (
  <ReduxProvider store={store}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
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
          <Route path="/hire-developer/laravel" element={<HireLaravel />} />
          <Route path="/hire-developer/django" element={<HireDjango />} />
          <Route path="/hire-developer/golang" element={<HireGolang />} />
          <Route path="/hire-developer/ruby-on-rails" element={<HireRubyOnRails />} />
          <Route path="/hire-developer/swift" element={<HireSwift />} />
          <Route path="/hire-developer/kotlin" element={<HireKotlin />} />
          <Route path="/hire-developer/graphql" element={<HireGraphql />} />
          <Route path="/hire-developer/aws" element={<HireAws />} />
          <Route path="/hire-developer/mean-stack" element={<HireMeanStack />} />
          <Route path="/hire-developer/ui-ux" element={<HireUiUx />} />
          <Route path="/hire-developer/qa" element={<HireQa />} />
          <Route path="/hire-developer/salesforce" element={<HireSalesforce />} />
          <Route path="/hire-developer/power-bi" element={<HirePowerBi />} />
          <Route path="/hire-developer/rust" element={<HireRust />} />
          <Route path="/hire-developer/game-developer" element={<HireGameDev />} />
          <Route path="/developer/:slug" element={<DeveloperProfile />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/promotion/seo-services" element={<SeoServices />} />
          <Route path="/promotion/on-page-seo" element={<OnPageSeo />} />
          <Route path="/promotion/organic-seo" element={<OrganicSeo />} />
          <Route path="/promotion/off-page-seo" element={<OffPageSeo />} />
          <Route path="/promotion/link-building" element={<LinkBuilding />} />
          <Route path="/promotion/digital-pr" element={<DigitalPr />} />
          <Route path="/promotion/ecommerce-seo" element={<EcommerceSeo />} />
          <Route path="/promotion/local-seo" element={<LocalSeo />} />
          <Route path="/promotion/technical-seo" element={<TechnicalSeo />} />
          <Route path="/promotion/ppc-management" element={<PpcManagement />} />
          <Route path="/promotion/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/promotion/content-marketing" element={<ContentMarketing />} />
          <Route path="/promotion/email-marketing" element={<EmailMarketing />} />
          <Route path="/promotion/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/promotion/video-marketing" element={<VideoMarketing />} />
          <Route path="/promotion/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/promotion/ai-content-generation" element={<AiContentGeneration />} />
          <Route path="/promotion/ai-analytics" element={<AiAnalytics />} />
          <Route path="/promotion/chatbot-marketing" element={<ChatbotMarketing />} />
          <Route path="/promotion/predictive-marketing" element={<PredictiveMarketing />} />
          <Route path="/promotion/ai-ad-optimization" element={<AiAdOptimization />} />
          <Route path="/promotion/ai-email-automation" element={<AiEmailAutomation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/inquiries"
            element={
              <ProtectedRoute roles={["admin", "editor"]}>
                <AdminInquiries />
              </ProtectedRoute>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ReduxProvider>
);

export default App;
