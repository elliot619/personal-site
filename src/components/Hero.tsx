import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";
import { ABOUT } from "@/lib/constans";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-lg rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-hero opacity-20 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Hello, I'm</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Elliot C.</span>
                <br />
                Chavez Morales
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate web developer who loves to build beautiful,
                performant, and functional apps. Strong attraction for
                aesthetics, performance, and UX.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Code className="w-5 h-5" />
                  Let's Build Together
                </a>
              </Button>

              <Button variant="glow" size="xl" asChild>
                <a href="#about">
                  Learn More
                  <ArrowDown className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {ABOUT.yearsOfExperience}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {ABOUT.projectsBuilt}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">
                  Passion for my craft
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl animate-glow"></div>
              <img
                src={heroImage}
                alt="Elliot Chavez Morales - Web Developer"
                className="relative z-10 w-full h-auto rounded-2xl shadow-card border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
