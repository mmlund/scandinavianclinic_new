import { Link } from "react-router-dom";
import heroEva from "@/assets/hero-eva.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroEva}
          alt="Professional orthopedic therapy environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Active Treatment
            <br />
            <span className="text-accent">for an Active Lifestyle</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Your muscles are the best tools for treating pain and developing optimal movement patterns
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/beforebook"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Book Your Appointment
            </Link>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-primary-foreground/30"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder Links for Staging */}
      <div className="absolute top-24 right-4 z-20 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-border">
        <p className="text-sm font-semibold text-foreground mb-2">Placeholder Links</p>
        <div className="flex flex-col gap-2">
          <Link to="/rmt-core1" className="text-primary hover:text-primary/80 text-sm transition-colors">
            /rmt-core1
          </Link>
          <Link to="/rmt-core3" className="text-primary hover:text-primary/80 text-sm transition-colors">
            /rmt-core3
          </Link>
          <Link to="/backpain" className="text-primary hover:text-primary/80 text-sm transition-colors">
            /backpain
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
