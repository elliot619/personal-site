import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Next.JS", level: "Advanced" },
        {
          name: "Serverless and Cloud (AWS, Vercel, GCP)",
          level: "Proficient",
        },
        {
          name: "Headless CMS (Contentful, Sanity, ContentStack)",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-primary",
      skills: [
        { name: "Git (Github, BitBucket, Azure DevOps)", level: "Advanced" },
        { name: "GenAI (Claude, OpenAI)", level: "Proficient" },
        { name: "Slack", level: "Advanced" },
        { name: "Search and Indexing (Algolia)", level: "Proficient" },
      ],
    },
    {
      title: "Specialties",
      icon: Zap,
      color: "text-accent",
      skills: [
        { name: "Performance Optimization", level: "Advanced" },
        { name: "Mobile-first approach", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "SEO Optimization", level: "Advanced" },
        { name: "Atomic Design", level: "Advanced" },
        { name: "Agile Development", level: "Advanced" },
        { name: "Unit and Integration Testing", level: "Advanced" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary/20 text-primary border-primary/30";
      case "Proficient":
        return "bg-accent/20 text-accent border-accent/30";
      case "Intermediate":
        return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-12 h-12 mx-auto rounded-lg bg-background/50 flex items-center justify-center mb-3 group-hover:bg-background/80 transition-colors duration-300`}
                >
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Languages & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "CSS3",
              "HTML5",
              "Git",
              "REST APIs",
              "Agile",
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 text-sm py-1 px-3"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
