import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RMTCore1 from "./pages/RMTCore1";
import RMTCore2 from "./pages/RMTCore2";
import RMTCore3 from "./pages/RMTCore3";
import Payment from "./pages/Payment";
import BackPain from "./pages/BackPain";
import BeforeBook from "./pages/BeforeBook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rmt-core1" element={<RMTCore1 />} />
          <Route path="/rmt-core2" element={<RMTCore2 />} />
          <Route path="/rmt-core3" element={<RMTCore3 />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/backpain" element={<BackPain />} />
          <Route path="/beforebook" element={<BeforeBook />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
