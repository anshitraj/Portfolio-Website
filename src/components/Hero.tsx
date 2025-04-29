import React from "react";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Hero = () => {
  const { toast } = useToast();

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download started...",
    });
    window.open(
      "https://drive.google.com/file/d/1Ov01AnOFcZhwmeMTgxp69T2Bsbxz5fjB/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="relative glass-card overflow-hidden group transition-all duration-500">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Section */}
          <div className="w-32 h-32 rounded-xl border-2 border-neon/20 hover:border-neon/40 transition-colors duration-300 flex items-center justify-center bg-neon/5 group-hover:bg-neon/10">
            <img
              src="/anshit.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="text-center md:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Anshit Raj Yadav
              </h1>
              <h2 className="text-xl md:text-2xl text-neon/90 font-medium">
                Blockchain Developer
              </h2>
              <p className="text-base md:text-lg max-w-2xl text-muted-foreground leading-relaxed">
                Building the Future of Web3 and AI with Code ⚡ Passionate
                blockchain Developer specializing in blockchain technologies,
                web development, and Dapps and Defi Ecosystem
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="bg-neon hover:bg-neon/80 text-white font-medium group"
                asChild
              >
                <a href="#contact" className="flex items-center space-x-2">
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Contact Me
                </a>
              </Button>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    onClick={downloadResume}
                    variant="outline"
                    size="lg"
                    className="border-neon/30 text-neon hover:bg-neon/10 group"
                  >
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Download Resume
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        Download My Resume
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Get a detailed overview of my skills, experience, and
                        achievements
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <div className="flex space-x-3 ml-auto md:ml-4">
                <a
                  href="https://github.com/anshitraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border/30 hover:border-neon hover:text-neon transition-all duration-300 hover:scale-105"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/anshitraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border/30 hover:border-neon hover:text-neon transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats with hover effects */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "4+", label: "Years Experience" },
            { value: "20+", label: "Projects" },
            { value: "6+", label: "Achievements" },
            { value: "20+", label: "Skills" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-neon/5 transition-colors duration-300 group"
            >
              <div className="text-2xl font-bold text-neon group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
