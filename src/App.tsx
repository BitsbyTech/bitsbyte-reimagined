import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CyberSecurity from "./pages/services/CyberSecurity";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import DataAnalytics from "./pages/services/DataAnalytics";
import CloudComputing from "./pages/services/CloudComputing";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import FinanceITConsulting from "./pages/services/FinanceITConsulting";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
