import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "XAi Drop Bot",
    description:
      "Twitter automation bot for NFT and token airdrops, featuring AI-driven engagement and task validation using Twitter API.",
    tags: ["JavaScript", "Twitter API", "NodeJS", "AI"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "PaperBox",
    description:
      "Educational dashboard with AI quiz generator, leveraging LLMs for personalized learning experiences.",
    tags: ["React", "OpenAI", "MongoDB", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Blockchain Explorer",
    description:
      "Custom blockchain explorer for tracking transactions and smart contracts on multiple chains.",
    tags: ["TypeScript", "Web3.js", "GraphQL", "Next.js"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const newProjects = [
  {
    id: 4,
    title: "Trading Bot",
    description:
      "Automated crypto trading bot utilizing real-time market data, technical indicators, and customizable strategies to maximize profits.",
    tags: ["Python", "Binance API", "+2"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Decentralized DEX",
    description:
      "Fully decentralized peer-to-peer exchange platform, enabling secure token swaps without intermediaries and ensuring user asset control.",
    tags: ["Solidity", "Web3.js", "+2"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Solana Mnemonic Generator",
    description:
      "Secure tool for generating Solana-compliant seed phrases, public/private keypairs, and wallet addresses — perfect for developers and users.",
    tags: ["Rust", "Solana", "+1"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const allProjects = [...projects, ...newProjects];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:bg-neon/5">
      <div className="h-36 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold mb-1 group-hover:text-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-1.5 py-0"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="text-xs px-1.5 py-0">
              +{project.tags.length - 2}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-foreground p-1 h-auto"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3 w-3" />
              Code
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-neon p-1 h-auto"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
