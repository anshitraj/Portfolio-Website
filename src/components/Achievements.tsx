import React from "react";
import { Award, Medal, Trophy, Star, DollarSign, Users } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Global Rank 7",
    description: "Solana Bangalore Hackathon",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Endorsement",
    description: "From Angel Investor Evan Luthra",
    icon: Star,
  },
  {
    id: 3,
    title: "Top 10% Contributors",
    description: "GitHub — Solana EVM",
    icon: Award,
  },
  {
    id: 4,
    title: "3rd Rank",
    description: "Hackathon: Secure the Flag by Fuel",
    icon: Medal,
  },
  {
    id: 5,
    title: "Raised $10K as a Startup",
    description:
      "Successfully raised $10,000 in seed funding for our early-stage startup initiative.",
    icon: DollarSign,
  },
  {
    id: 6,
    title: "Dashboard Adopted by 2000+ Influencers",
    description:
      "Developed and launched a dashboard now trusted by over 2000 influencers worldwide for campaign management and analytics.",
    icon: Users,
  },
];

const AchievementCard = ({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) => {
  return (
    <div className="flex items-center gap-4 mb-4 p-3 bg-white/5 rounded-lg hover:bg-neon/10 transition-colors group">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon/10 group-hover:bg-neon/20">
        <achievement.icon className="w-5 h-5 text-neon" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold group-hover:text-neon transition-colors">
          {achievement.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {achievement.description}
        </p>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div>
      {achievements.map((achievement) => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
};

export default Achievements;
