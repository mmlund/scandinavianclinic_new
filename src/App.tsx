import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { initTracking, sendTrackingData } from "@/lib/tracking";
import { syncCanonicalToCurrentPath } from "@/hooks/use-page-meta";
import Index from "./pages/Index";
import RMTCore1 from "./pages/RMTCore1";
import RMT from "./pages/RMT";
import DNS from "./pages/DNS";
import RMTCore2 from "./pages/NotUsed";
import RMTCore3 from "./pages/RMTCore3";
import Payment from "./pages/Payment";
import BackPain from "./pages/BackPain";
import Booking from "./pages/Booking";
import ConditionsTreated from "./pages/ConditionsTreated";
import AboutMe from "./pages/AboutMe";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Hours from "./pages/Hours";
import FirstVisit from "./pages/FirstVisit";
import Education from "./pages/Education";
import NotFound from "./pages/NotFound";
import Draft from "./pages/Draft";
import BackPainTreatmentNorthVancouver from "./pages/BackPainTreatmentNorthVancouver";
import SciaticaTreatmentNorthVancouver from "./pages/SciaticaTreatmentNorthVancouver";
import NeckPainTreatmentNorthVancouver from "./pages/NeckPainTreatmentNorthVancouver";

const queryClient = new QueryClient();

function TrackingInit() {
  const location = useLocation();

  useEffect(() => {
    initTracking();
  }, []);

  useEffect(() => {
    // Keep canonical tag in sync with the current route
    syncCanonicalToCurrentPath();
    // Re-fire page_view on client-side navigation
    sendTrackingData({ event_type: "page_view" });
  }, [location.pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrackingInit />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rmt-core1" element={<RMTCore1 />} />
          <Route path="/r-m-t" element={<RMT />} />
          <Route path="/d-n-s" element={<DNS />} />
          <Route path="/rmt-core2" element={<RMTCore2 />} />
          <Route path="/rmt-core3" element={<RMTCore3 />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/backpain" element={<BackPain />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/conditions-treated" element={<ConditionsTreated />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/first-visit" element={<FirstVisit />} />
          <Route path="/education" element={<Education />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/conditions/back-pain-treatment-north-vancouver" element={<BackPainTreatmentNorthVancouver />} />
          <Route path="/conditions/sciatica-treatment-north-vancouver" element={<SciaticaTreatmentNorthVancouver />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
