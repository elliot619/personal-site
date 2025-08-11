import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Sylla & Apply Digital",
      position: "Senior Front-end Developer",
      location: "Freedom Mobile, KraftHeinz & Schumacher Homes",
      period: "08/2021 - Current",
      description: "Front end and back end development of existing and new apps and solutions. Technical lead and mentor in the React.js team. The creation of a components library and its usage with multiple apps. Mentorship of younger developers in technical presentations, and acted as a backup tech lead for a Kit project to them formalize as the main developer.",
      technologies: ["React.js", "JavaScript", "Node.js", "Components Library", "Technical Leadership"]
    },
    {
      company: "Luxoft",
      position: "Front-end Developer",
      location: "Expedia",
      period: "07/2020-08/2021",
      description: "Support for an existing mutable Node.js for better app by making hot fixes. Then, worked on defining a stabilization plan and its implementation. Migrated the existing code from node 8 to 12 and also the custom framework that the app was built on from version 7 to 10. Finally, did the migration to standard dependency resolvers along its implementation on the UI side.",
      technologies: ["Node.js", "JavaScript", "Migration", "Framework Updates", "UI Development"]
    },
    {
      company: "Open Force",
      position: "Front-end Developer",
      location: "DHL",
      period: "10/2020 - 12/2020",
      description: "Worked with the UX team to deliver changes for an in-development application for last time SMS, MMS and RCS custom flows. Had the chance to implement good practices around agile and decisional about the tech stack we used.",
      technologies: ["UX Collaboration", "SMS/MMS/RCS", "Agile", "Custom Flows"]
    },
    {
      company: "Clientrix MX",
      position: "Full Stack Developer",
      location: "Multiple Global Brands",
      period: "05/2015 - 10/2019",
      description: "Development of native android apps and web Blazor. Front and back end development to generate web services for internal and third-party use for the online gaming and betting sector.",
      technologies: ["Android", "Blazor", "Web Services", "Gaming", "Full Stack"]
    },
    {
      company: "Various Companies",
      position: "Software Engineer & Developer",
      location: "Mexico & International",
      period: "10/2014 - 05/2015",
      description: "Early career roles including AMS developer at Softtek Universal, full stack development at Grupo LAN, manual testing at ArkusNexus, and engineering internship at CST Kavlico. Gained foundational experience across multiple technologies and industries.",
      technologies: [".NET", "Web Applications", "Testing", "Engineering", "Multi-industry"]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7+ years of building exceptional digital experiences across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-primary font-semibold">
                      <ExternalLink className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Education</span>
          </h3>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Bachelor's Degree</h4>
                  <span className="text-sm text-muted-foreground">2005-2008</span>
                </div>
                <div className="space-y-2">
                  <p className="text-primary font-medium">Computational Engineering</p>
                  <p className="text-muted-foreground">UABC University</p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in computer engineering with focus on software development
                  </p>
                </div>
                
                <div className="mt-6 space-y-2">
                  <h5 className="font-medium">Additional Training</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Electricity Technician</div>
                    <div>• Complete Degree</div>
                    <div>• EST No. 58 (2005-2008)</div>
                    <div>• CETIS No. 58 (2005-2008)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;