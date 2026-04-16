import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

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
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Scandinavian Clinic logo" className="w-10 h-10 rounded-md shadow-sm" />
            <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-accent drop-shadow-lg"
            }`}>
              SCANDINAVIAN CLINIC
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about-me" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
            <Link to="/conditions-treated" className="text-foreground hover:text-primary transition-colors font-medium">Conditions</Link>
            <Link to="/facilities" className="text-foreground hover:text-primary transition-colors font-medium">Facilities</Link>
            <Link to="/r-m-t" className="text-foreground hover:text-primary transition-colors font-medium">RMT</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/booking">Book Appointment</Link>
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
              <Link to="/about-me" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">About</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Services</Link>
              <Link to="/conditions-treated" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Conditions</Link>
              <Link to="/facilities" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Facilities</Link>
              <Link to="/r-m-t" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">RMT</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 text-left">Contact</Link>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mx-4">
                <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
