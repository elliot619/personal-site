import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { ABOUT } from "@/lib/constants";

interface IExperienceEntry {
  company: string;
  position: string;
  clients?: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const experiences: IExperienceEntry[] = [
    {
      company: "Svitla & Apply Digital",
      position: "Senior Software Engineer",
      clients: "Freedom Mobile, KraftHeinz, Schumacher Homes & Mirion",
      location: "Remote / Mexico & Canada",
      period: "08/2021 - Current",
      description:
        "Led full-stack web development for existing and new applications. Served as technical lead for multiple KraftHeinz projects and mentored team members. Delivered technical presentations, defined infrastructure implementations, conducted code reviews, internationalized applications, established testing plans with QA, and collaborated with UX/design teams to deliver high-quality solutions.",
      technologies: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Headless CMS",
        "Technical Leadership",
      ],
    },
    {
      company: "Luxoft",
      position: "Front-end Engineer",
      clients: "Expedia Group",
      location: "Remote / Mexico",
      period: "07/2020 - 08/2021",
      description:
        "Supported and developed new features for an existing and problematic Node.js web application. Worked on defining a stabilization plan and its implementation, which consisted of migrating the existing code from Node 8 to the latest version and updating the custom framework from version 7 to 10.",
      technologies: [
        "Node.js",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Agile",
      ],
    },
    {
      company: "Open Market",
      position: "Front-end Engineer",
      location: "Remote / Mexico",
      period: "10/2020 - 12/2020",
      description:
        "Collaborated with the UX team to create, develop, and deliver changes for a web application that allows clients to create custom campaigns using SMS, MMS, and RCS. Defined and implemented the application infrastructure, along with establishing best practices for agile methodology.",
      technologies: [
        "React.js",
        "JavaScript",
        "Angular.js",
        "UX Collaboration",
        "SMS/MMS/RCS",
        "Agile",
        "Custom",
      ],
    },
    {
      company: "Caliente MX",
      position: "Full Stack Engineer",
      clients: "Multiple E-Gaming Global Brands (Winner, Caliente, etc.)",
      location: "Mexico",
      period: "05/2015 - 10/2019",
      description:
        "Developed native Android and web applications. Built front-end and back-end solutions to generate web services for internal and third-party use in the online gaming and betting sector.",
      technologies: [
        "Android",
        "PHP",
        "JavaScript",
        "jQuery",
        "MySQL",
        "Web Services",
        "Gaming",
        "Full Stack",
      ],
    },
    {
      company: "Other Companies",
      position: "Software Engineer",
      location: "Mexico",
      period: "10/2014 - 05/2015",
      clients: "Kavlico Airspace, GNP Seguros, Evenflo, NBC Universal, etc.",
      description:
        "Early career roles including AMS developer at Softtek Universal, full stack development at Grupo LAN, tester at ArkusNexus, and engineering internship at CST Kavlico. Gained foundational experience across multiple technologies and industries.",
      technologies: [
        ".NET",
        "C#",
        "Web Applications",
        "Testing",
        "AutoCAD",
        "SQL Server",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {ABOUT.yearsOfExperience}+ years of building exceptional digital
            experiences across diverse industries such as e-gaming, e-commerce,
            hospitality, advertisement, and more.
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
                  <span className="text-sm text-muted-foreground">
                    2005-2008
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-primary font-medium">
                    Computational Engineering
                  </p>
                  <p className="text-muted-foreground">
                    Universidad Autónoma de Baja California
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in computer engineering with focus on software
                    development
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <h5 className="font-medium">Additional Training</h5>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div>• Computer Technician at CETIS No. 58 (2005-2008)</div>
                    <div>
                      • Electricity Technician at EST No. 58 (2002-2005)
                    </div>
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
