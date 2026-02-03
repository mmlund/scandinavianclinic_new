import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Search, Brain, Target, BookOpen, MapPin, Shield, Calendar, Award } from "lucide-react";
import heroVideo from "@/assets/rmt-hero-video.mp4";
import educationImage from "@/assets/education-anatomy.jpg";
import reasoningImage from "@/assets/manual-therapy-session.jpg";
import assessmentImage from "@/assets/clinical-assessment.jpg";
import treatmentImage from "@/assets/targeted-treatment.jpg";
import correctiveImage from "@/assets/corrective-exercise.jpg";

const RMTCore3 = () => {
  const goodFit = [
    "Value understanding the cause of your problem",
    "Prefer structured, assessment-based care",
    "Have tried other approaches without lasting results",
    "Want a thoughtful, clinical treatment process"
  ];

  const notGoodFit = [
    "Are primarily seeking relaxation or stress-relief massage",
    "Prefer spa-style experiences",
    "Want passive treatment without assessment"
  ];

  const approachPoints = [
    {
      icon: Search,
      title: "Assessment before treatment",
      description: "Each session begins with understanding pain patterns, movement patterns, joint behaviour, and contributing factors. Carefully identifying cause(s) guides treatment strategy."
    },
    {
      icon: Brain,
      title: "Individualized clinical logic",
      description: "Treatment is chosen because it fits your presentation — not because it's part of a routine."
    },
    {
      icon: Target,
      title: "Precision over force",
      description: "The goal is to provide effective input at the right place and in the right amount."
    },
    {
      icon: BookOpen,
      title: "Education and prevention",
      description: "The right training and education will keep the problem from coming back and are a key part of any treatment."
    }
  ];

  const sessionSteps = [
    {
      number: "1",
      title: "Clinical assessment",
      description: "Discussion, observation, and movement testing to understand contributing factors.",
      image: assessmentImage
    },
    {
      number: "2",
      title: "Targeted manual therapy",
      description: "Hands-on treatment selected based on assessment findings — not routines.",
      image: treatmentImage
    },
    {
      number: "3",
      title: "Corrective focus",
      description: "Addressing the underlying contributors to reduce recurrence and dependency.",
      image: correctiveImage
    }
  ];

  const credentials = [
    { icon: Award, text: "Registered Massage Therapy (RMT)" },
    { icon: Shield, text: "Eligible for extended health insurance" },
    { icon: MapPin, text: "Located in North Vancouver" },
    { icon: Calendar, text: "Appointment-based clinical practice" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Registered Massage Therapy with{" "}
                <span className="text-primary">Advanced European Clinical Training</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                Assessment-driven RMT care for patients who value depth, reasoning, and precision.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                This clinic provides clinical massage therapy — not spa massage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground py-6 px-8 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <a
                    href="https://www.scandinavianclinic.com/booking/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book an RMT Assessment & Treatment
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Covered by extended health insurance
              </p>
            </div>

            {/* Video */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Matters Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why the therapist's training matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Not all education emphasizes the same depth of clinical reasoning.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My background prioritizes assessment, biomechanics, and problem-solving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Scandinavian Clinic, the approach to Registered Massage Therapy is informed by European university-level manual therapy education, where the primary goal is to understand <strong>why</strong> a problem exists — not just where it hurts.
              </p>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                This background influences how each patient is assessed, treated, and guided.
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src={educationImage}
                alt="Clinical education and patient explanation"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasoning-Based Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A reasoning-based approach to RMT
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rather than applying the same techniques to every patient, treatment decisions are based on clinical findings.
              </p>
              <div className="space-y-6">
                {approachPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-8 italic">
                This approach is particularly relevant for patients with persistent, complex, or recurring issues.
              </p>
            </div>
            <div className="animate-fade-in lg:sticky lg:top-24">
              <img
                src={reasoningImage}
                alt="Clinical reasoning and manual therapy"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What to expect in an RMT session
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessionSteps.map((step, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-lg text-foreground font-medium mb-2">
              Sessions are structured, focused, and collaborative.
            </p>
            <p className="text-muted-foreground italic">
              This is not a relaxation-based massage experience.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Is this the right RMT clinic for you?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Good Fit */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                This clinic is a good fit if you:
              </h3>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Good Fit */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-muted-foreground" />
                This clinic is not a good fit if you:
              </h3>
              <ul className="space-y-4">
                {notGoodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 animate-fade-in">
            Clarity here helps ensure a better experience for both patient and therapist.
          </p>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 animate-fade-in">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground">
                <credential.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{credential.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Looking for a more thoughtful approach to RMT care?
            </h2>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground py-6 px-8 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a
                href="https://www.scandinavianclinic.com/booking/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an RMT Assessment & Treatment
              </a>
            </Button>
            <p className="text-primary-foreground/80 mt-4 text-sm">
              Appointments focus on assessment, clinical reasoning, and targeted treatment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RMTCore3;
