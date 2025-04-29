import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["C++", "JavaScript", "Vyper", "Move", "Solidity"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    skills: ["NodeJS", "React", "Tailwind CSS", "Rust"],
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["MySQL", "MongoDB", "Docker", "Git", "AWS"],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    skills: ["Node Operation", "Validator Programming", "Web3.js"],
  },
  {
    id: "soft",
    name: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Communication"],
  },
];

const skillLogos = {
  "C++":
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  Vyper:
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  Move: "https://avatars.githubusercontent.com/u/59034516?s=200&v=4",
  Solidity:
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
  NodeJS: "https://nodejs.org/static/images/logo.svg",
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "Tailwind CSS":
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Rust: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
  MySQL: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  MongoDB:
    "https://webimages.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
  Docker: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  Git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  AWS: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  "Node Operation": "https://nodejs.org/static/images/logo.svg",
  "Validator Programming": "https://nodejs.org/static/images/logo.svg",
  "Web3.js": "https://nodejs.org/static/images/logo.svg",
  "Problem Solving":
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  Teamwork:
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  Communication:
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
};

const SkillCard = ({ skill }: { skill: string }) => (
  <div className="bg-white/5 rounded-lg p-2 text-center transition-all duration-300 hover:border-neon hover:bg-neon/10 group">
    <div className="flex items-center justify-center">
      <img src={skillLogos[skill]} className="inline w-5 h-5 mr-2" alt="logo" />
      <span className="text-sm group-hover:text-neon transition-colors">
        {skill}
      </span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div>
      <h2 className="flex items-center text-xl font-bold mb-4">Skills</h2>
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-4 gap-2">
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        {skillCategories.slice(0, 3).map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-2">
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-4 pt-4 border-t border-white/10">
        <h3 className="text-sm font-medium mb-2">Other Skills</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            ...skillCategories[3].skills,
            ...skillCategories[4].skills.slice(0, 3),
          ].map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
