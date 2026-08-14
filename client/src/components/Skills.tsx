import React from "react";
import { skills } from "../types/skillsData";
import { SkillsMarquee } from "./SkillsMaequee";
import AssembleSection from "./AssembleSection";
// import { skills } from './skillsData';

interface skillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<skillsProps> = ({ isDarkMode }) => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center py-10 px-6 sm:px-[clamp(1rem,11.46vw,200px)] overflow-hidden scroll-mt-5 gap-3"
    >
      <div>
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-7">
          <span
            className={`text-[10px] sm:text-[11px] border-2 font-bold tracking-widest uppercase py-1 px-3 rounded-full ${
              isDarkMode
                ? "bg-slate-950 border-slate-800 text-cyan-300 opacity-40"
                : "border-white/40 bg-gray-300/50 text-cyan-600 shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            }`}
          >
            skills
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Technical Stack
          </h2>

          <div className="h-0.75 w-10 sm:w-12 bg-linear-to-r from-cyan-950 via-cyan-200 to-cyan-950  rounded-full" />
        </div>

        <AssembleSection>
          <div className="grid grid-cols-16 gap-2  font-[Orbitron]">
            {skills.map((skill, index) => {
              // Assign the component to a capitalized reference so React handles it properly
              const SkillIcon = skill.icon;

              return (
                <div
                  key={index}
                  className={`relative items-start overflow-hidden rounded-2xl p-5 flex flex-col justify-between group ${skill.gridClasses}
                 border-2 transition-colors duration-500 backdrop-blur-xs group shadow-[0_5px_15px_rgba(0,0,0,0.1)] ${
                   isDarkMode
                     ? "border-slate-900 bg-slate-700/10 text-cyan-700 hover:border-cyan-500/40 hover:bg-slate-900/80"
                     : "border-white/20 border-2 bg-linear-to-br from-gray-400/5 to-gray-300/80 hover:from-gray-400/10 hover:to-gray-300/40 hover:border-white/50 hover:shadow-xs"
                 }
                `}
                >
                  {/* Top Left: Icon Badge */}
                  <div className="flex p-2 items-center justify-center rounded-lg bg-slate-800/10 border border-slate-400/30 shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <SkillIcon className="w-6 h-6 " />
                  </div>

                  {/* Bottom Left: Info Info */}
                  <div className="z-10 flex flex-col items-start">
                    <h3 className="text-sm font-bold tracking-widest">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase text-gray-500 tracking-[3px] mt-0.5">
                      {skill.category}
                    </p>
                  </div>

                  {/* Giant Faint Icon Background Watermark */}
                  <div className="absolute right-2 bottom-2 text-cyan-900/10 select-none pointer-events-none group-hover:text-cyan-900 group-hover:scale-110 transition-all duration-500 ease-out">
                    <SkillIcon className="w-22 h-22 rounded-sm" />
                  </div>
                </div>
              );
            })}
          </div>
          <SkillsMarquee isDarkMode={isDarkMode} />
        </AssembleSection>
      </div>
    </section>
  );
};

export default Skills;

//  ? "border-slate-900 bg-slate-700/10 text-cyan-900 hover:border-cyan-500/40 hover:bg-slate-900/80"
//   : "border-slate-900 bg-slate-950/90 text-cyan-500 hover:border-indigo-600/40 hover:shadow-lg"
