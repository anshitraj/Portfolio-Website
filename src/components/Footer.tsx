
import React from "react";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anshit Raj Yadav. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/anshitraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/anshitraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground flex items-center">
             
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
