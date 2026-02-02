import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, XCircle, Stethoscope, ClipboardList, Target, MessageCircle } from "lucide-react";
import rmtHero from "@/assets/rmt-hero.jpg";
import rmtEducation from "@/assets/rmt-education.jpg";
import rmtSessionVideo from "@/assets/rmt-session-video.mp4";

const RMTCore1 = () => {
  const scrollToBooking = () => {
    document.getElementById("rmt-final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const conditions = [
    "Ongoing neck or shoulder pain",
    "Persistent low-back pain",
    "Tennis elbow",
    "Hip or pelvic discomfort",
    "Headaches related to muscle tension or posture",
    "Pain that returns after previous treatments"
  ];

  const sessionSteps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Assessment",
      description: "Movement, history, and physical examination to understand contributing factors.",
      detail: "I use several specific movement tests to evaluate the range of motion and imbalances across different joint segments, ligaments, and muscles. I will closely study how you move and investigate your pattern of pain."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Treatment",
      description: "Hands-on therapy chosen based on findings — not routines."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Plan & Guidance",
      description: "Clear explanation of what's driving the pain and what to do next."
    }
  ];

  const goodFit = [
    "You have ongoing or recurring pain",
    "You want to understand why pain is happening",
    "You prefer structured, clinical care"
  ];

  const notGoodFit = [
    "You want relaxation or pampering",
    "You're looking for a one-off \"feel-good\" massage",
    "You prefer a spa environment"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={rmtHero}
            alt="Clinical RMT treatment session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Registered Massage Therapy
              <br />
              <span className="text-accent">for Persistent Pain</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-medium">
              Clinical assessment. Targeted treatment.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              For people who need thorough assessments, specific treatments, and training programs tailored to their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <a
                  href="https://www.scandinavianclinic.com/booking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Clinical RMT Appointment
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Covered by extended health insurance
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 1: What This Is */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                This Is Clinical RMT
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Scandinavian Clinic provides Registered Massage Therapy focused on identifying and treating the underlying causes of pain — not temporary relief through relaxation techniques.
              </p>
              <p>
                Each session begins with a thorough clinical assessment and reasoning, followed by hands-on treatment chosen specifically for your condition.
              </p>
              <p className="font-semibold text-foreground bg-muted p-6 rounded-lg border-l-4 border-accent">
                If you're looking for a spa-style or relaxation massage, this clinic is likely not the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Conditions Treated */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Reassurance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Reasons Patients Come Here
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{condition}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center italic">
              Treatment is always individualized. This is not a protocol-based clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How Sessions Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Trust & Clarity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What to Expect in a Session
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {sessionSteps.map((step, index) => (
                  <Card key={index} className="p-6 border-0 shadow-card animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {step.description}
                        </p>
                        {step.detail && (
                          <p className="text-sm text-muted-foreground">
                            {step.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
                <p className="text-muted-foreground italic pl-4 border-l-4 border-primary/30">
                  Sessions are focused, clinical, and purposeful — not passive relaxation.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in">
                <video
                  src={rmtSessionVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Who This Is For */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Self-Selection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Is This the Right Clinic for You?
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="p-8 border-0 shadow-card bg-background">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Good Fit
                </h3>
                <ul className="space-y-4">
                  {goodFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Therapist Credibility */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in order-2 lg:order-1">
                <img
                  src={rmtEducation}
                  alt="Clinical education and expertise"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className="animate-fade-in order-1 lg:order-2">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Different Clinical Background
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Treatment at Scandinavian Clinic is informed by advanced manual therapy education and a European clinical training model that emphasizes assessment, biomechanics, and long-term improvement.
                  </p>
                  <p>
                    I have five years of post-secondary education and many courses in manual medicine.
                  </p>
                  <p className="font-medium text-foreground">
                    The focus is not on techniques — but on reasoning, progression, and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="rmt-final-cta" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready for a Clinical Approach to RMT?
            </h2>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a
                href="https://www.scandinavianclinic.com/booking/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Clinical RMT Appointment
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Direct billing not required · Insurance receipts provided
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RMTCore1;
