import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            SCANDINAVIAN CLINIC
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
