import React from "react";
import { skills, type Skill } from "../types/skillsData"; // Adjust this path to your data file

// 1. Extend the SkillCard props to accept the theme boolean
interface SkillCardProps {
  name: Skill["name"];
  icon: Skill["icon"];
  isDarkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon: Icon,
  isDarkMode,
}) => {
  return (
    <div
      className={`flex items-center gap-1 px-6 py-1 rounded-full select-none transition-colors duration-500 
        ${isDarkMode ? "text-cyan-500/20" : "text-cyan-900/50"}`}
    >
      {typeof Icon === "string" ? (
        <span className="text-xs">{Icon}</span>
      ) : (
        <Icon
          className={`text-xs transition-colors duration-500 
            ${isDarkMode ? "text-cyan-500/20" : "text-cyan-800/50"}`}
        />
      )}
      <span className="text-xs font-medium tracking-wide">{name}</span>
    </div>
  );
};

// 2. Define props for the main marquee container component
interface SkillsMarqueeProps {
  isDarkMode: boolean;
}

export const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ isDarkMode }) => {
  const splitIndex = Math.ceil(skills.length / 2);
  const row1Skills: Skill[] = skills.slice(0, splitIndex);
  const row2Skills: Skill[] = skills.slice(splitIndex);

  return (
    <div
      className={`overflow-hidden flex flex-col gap-3 relative transition-all duration-800
        ${isDarkMode ? "" : ""}`}
    >
      {/* Edge shading masks that dynamically change color based on the theme */}
      <div
        className={`absolute inset-y-0 left-0 w-32 z-10 pointer-events-none transition-colors duration-800
          ${
            isDarkMode
              ? "bg-linear-to-r from-[#060713]/30 via-[#060713]/30 to-transparent"
              : "bg-linear-to-r from-gray-100 via-gray-100/20 to-transparent"
          }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-32 z-10 pointer-events-none transition-colors duration-800
          ${
            isDarkMode
              ? "bg-linear-to-l from-[#060713]/60 via-[#060713]/30 to-transparent"
              : "bg-linear-to-l from-gray-50 via-gray-100/50 to-transparent"
          }`}
      />

      {/* Row 1: Continuous Flow Right */}
      <div className="flex overflow-hidden select-none">
        <div className="flex flex-nowrap gap-3 animate-marquee-right pause-marquee shrink-0">
          {row1Skills.map((skill, index) => (
            <SkillCard
              key={`row1-main-${index}`}
              name={skill.name}
              icon={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
          {row1Skills.map((skill, index) => (
            <SkillCard
              key={`row1-dup-${index}`}
              name={skill.name}
              icon={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>

      {/* Row 2: Continuous Flow Left */}
      <div className="flex overflow-hidden select-none">
        <div className="flex flex-nowrap gap-6 animate-marquee-left pause-marquee shrink-0">
          {row2Skills.map((skill, index) => (
            <SkillCard
              key={`row2-main-${index}`}
              name={skill.name}
              icon={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
          {row2Skills.map((skill, index) => (
            <SkillCard
              key={`row2-dup-${index}`}
              name={skill.name}
              icon={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
