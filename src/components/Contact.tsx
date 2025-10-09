import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you start your journey to pain-free movement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-primary/5">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Calgary, Alberta
                    <br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:info@scandinavianclinic.com"
                    className="text-primary hover:underline"
                  >
                    info@scandinavianclinic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-accent/5">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Insurance Coverage
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a Registered Massage Therapist, Eva's treatments are covered by most extended 
              health insurance plans. Please check with your provider for specific coverage details.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-sm text-foreground font-semibold mb-2">
                What to Bring
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your insurance information</li>
                <li>• Any relevant medical records or imaging</li>
                <li>• Comfortable clothing for movement assessment</li>
                <li>• List of current medications if applicable</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
