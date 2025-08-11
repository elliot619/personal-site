import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Coffee, Monitor } from "lucide-react";
import codeEditorImage from "@/assets/code-editor.jpg";

const About = () => {
  const interests = [
    "Aesthetics & Design",
    "Performance Optimization", 
    "User Experience",
    "Modern Web Technologies",
    "Open Source",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web developer with over 7 years of experience building 
                  beautiful, performant applications. I specialize in modern JavaScript 
                  frameworks and have a strong attraction for aesthetics, performance, and UX.
                </p>
                
                <p>
                  My journey spans from front-end development with React and Next.js to 
                  full-stack solutions with Node.js. I enjoy participating in all aspects 
                  of software development, from initial concept to deployment and maintenance.
                </p>
                
                <p>
                  Currently based in Kitchener, ON, Canada, I'm always looking for new 
                  challenges and opportunities to create exceptional digital experiences.
                </p>
              </div>
            </div>

            {/* Location & Contact Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Kitchener, ON, Canada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-accent" />
                    <span className="text-sm">Remote Friendly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5 text-primary" />
                    <span className="text-sm">Fueled by Coffee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <span className="text-sm">Loves Clean Code</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Drives Me</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl blur-2xl"></div>
            <Card className="relative bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={codeEditorImage}
                  alt="Code Editor showing React development"
                  className="w-full h-auto"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-muted-foreground ml-4 font-mono">
                      currently-coding.tsx
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="text-primary">const</span> passion = {"{"}
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">
                      <span className="text-accent">frontend</span>: <span className="text-green-400">"React, TypeScript"</span>,
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">
                      <span className="text-accent">backend</span>: <span className="text-green-400">"Node.js, PostgreSQL"</span>,
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">
                      <span className="text-accent">focus</span>: <span className="text-green-400">"Beautiful UX"</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{"}"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;