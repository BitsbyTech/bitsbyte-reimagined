import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CyberSecurity from "./pages/services/CyberSecurity";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import DataAnalytics from "./pages/services/DataAnalytics";
import CloudComputing from "./pages/services/CloudComputing";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import FinanceITConsulting from "./pages/services/FinanceITConsulting";
import Blog from "./pages/Blog";
import OurProcess from "./pages/OurProcess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cloud-computing" element={<CloudComputing />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/finance-it-consulting" element={<FinanceITConsulting />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
