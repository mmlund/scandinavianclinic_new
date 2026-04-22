import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { homeSchema } from "@/lib/schemas";

const Index = () => {
  usePageMeta({
    title: "Registered Massage Therapy North Vancouver | Scandinavian Clinic",
    description: "Expert orthopedic manual therapy combining Swedish-trained techniques with active rehabilitation. Specializing in pain treatment, movement optimization, and DNS training in North Vancouver.",
    canonical: "https://scandinavianclinic.com/",
    jsonLd: homeSchema,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
