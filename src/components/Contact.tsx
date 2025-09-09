import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constans";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      color: "text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT_INFO.location,
      href: "#",
      color: "text-primary",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: CONTACT_INFO.github,
      color: "text-foreground hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: CONTACT_INFO.linkedin,
      color: "text-foreground hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200 group"
                  >
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors duration-200">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200 ${social.color} hover:scale-105`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border/50 h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="space-y-6 text-center">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Whether you need a stunning frontend, robust backend, or
                      complete full-stack solution, I'd love to help bring your
                      vision to life with clean code and beautiful design.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="xl" asChild>
                      <a href={`mailto:${CONTACT_INFO.email}`}>
                        <Mail className="w-5 h-5" />
                        Send Me an Email
                      </a>
                    </Button>

                    <Button variant="glow" size="xl" asChild>
                      <a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-muted-foreground">
                      <span className="text-primary font-medium">
                        Current Status:
                      </span>
                      &nbsp;Available for new opportunities and interesting
                      projects
                    </p>
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

export default Contact;
