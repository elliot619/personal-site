import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">EC</span>
              <span className="text-lg font-medium">Elliot Chavez</span>
            </div>
            <p className="text-muted-foreground">
              Passionate web developer building beautiful, performant applications 
              with a focus on aesthetics and user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Experience
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="space-y-2">
              <a 
                href="mailto:chavez.elliot@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>chavez.elliot@gmail.com</span>
              </a>
              <p className="text-muted-foreground">Kitchener, ON, Canada</p>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.github.com/elliot619"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/elliotch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Elliot C. Chavez Morales. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 sm:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;