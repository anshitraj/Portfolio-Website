import React from "react";
import { Briefcase } from "lucide-react";

const technicalExperiences = [
  {
    id: 1,
    title: "Solana Superteam",
    role: "Freelancer",
    period: "April 2024 – Present",
    description:
      "Working on various Solana blockchain projects, contributing to ecosystem growth, and developing decentralized applications.",
  },
  {
    id: 2,
    title: "Altava",
    role: "SDE Intern",
    period: "December 2023",
    description:
      "Developed blockchain solutions for digital fashion and virtual experiences. Worked with smart contracts and Web3 technologies.",
  },
  {
    id: 3,
    title: "Jupiter Team",
    role: "Blockchain Developer",
    period: "February 2024 – April 2024",
    description:
      "Helped create a Layer 2 bridge for asset transfers across blockchains, contributed to smart contract development and system integration.",
  },
];

const otherExperiences = [
  {
    id: 4,
    title: "Seedify Incubator",
    role: "Chief Marketing Officer (CMO)",
    period: "December 2023 – March 2024",
    description:
      "Helped Seedify raise $50,000 via strategic marketing initiatives, partnerships, and investor relations.",
  },
  {
    id: 5,
    title: "BingX and Phemex",
    role: "KOL Services Provider",
    period: "September 2023 – December 2023",
    description:
      "Provided KOL marketing services, assisted in user growth campaigns and brand promotion activities.",
  },
];

const Experience = () => {
  return (
    <div>
      <h2 className="flex items-center space-x-2 text-2xl font-bold mb-4">
        <Briefcase className="w-6 h-6 text-purple-500" />
        <span className="text-purple-500">Technical Work Experience</span>
      </h2>
      {technicalExperiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative pl-6 ${
            index !== technicalExperiences.length - 1
              ? "pb-6 border-l border-border"
              : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neon"></div>

          <h3 className="text-lg font-semibold mb-1 text-neon">{exp.title}</h3>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm">{exp.role}</h4>
            <p className="text-xs text-muted-foreground">{exp.period}</p>
          </div>
          <p className="text-sm text-muted-foreground">{exp.description}</p>
        </div>
      ))}

      <h2 className="flex items-center space-x-2 text-2xl font-bold mt-8 mb-4">
        <Briefcase className="w-6 h-6 text-purple-500" />
        <span className="text-purple-500">Other Work Experience</span>
      </h2>
      {otherExperiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative pl-6 ${
            index !== otherExperiences.length - 1
              ? "pb-6 border-l border-border"
              : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neon"></div>

          <h3 className="text-lg font-semibold mb-1 text-neon">{exp.title}</h3>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm">{exp.role}</h4>
            <p className="text-xs text-muted-foreground">{exp.period}</p>
          </div>
          <p className="text-sm text-muted-foreground">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
