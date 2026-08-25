import React from "react";
import { Code2 } from "lucide-react";
import { VscLinkExternal } from "react-icons/vsc";
// import space from "../assets/wudjsbv8g93aarlhvbud.jpg";
// import country from "../assets/allcoutries.jpg";
// import country1 from "../assets/allcountries1.png";
// import advice from "../assets/syo43ktrlu3huqaqye2c.jpg";
// import echo from "../assets/Screenshot 2026-07-30 112123.png";
import ParticlesBackground from "../components/ParticlesBackground";
import { projectsData } from "../types/project";
import { useTheme } from "../context/ThemeContext";

const Projectspage: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <section
      // id="projects"
      className="relative flex flex-col justify-center mt-30 mb-20 px-6 sm:px-[clamp(1rem,11.46vw,200px)] scroll-auto gap-3 font-[michroma]"
    >
      <ParticlesBackground
        className={`absolute inset-0 z-0 transition-colors duration-500 transform ${isDarkMode ? "opacity-25" : "opacity-30"}`}
        density={90}
        linkDistance={140}
        speed={0.6}
        color={isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(15,15,20,0.7)"}
        lineColor={isDarkMode ? "255,255,255" : "15,15,20"}
        interactionMode="repulse"
        interactionRadius={140}
        grabOnHover
        grabDistance={160}
        spawnOnClick
        clickSpawnCount={6}
      />
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {/* <span
          className={`text-[10px] sm:text-[11px] border-2 font-bold tracking-widest uppercase py-1 px-3 rounded-full ${
            isDarkMode
              ? "bg-slate-950 border-slate-800 text-cyan-300 opacity-40"
              : "border-white/40 bg-gray-300/50 text-cyan-600 shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
          }`}
        >
          Projects
        </span> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Portfolio
        </h2>
        <div className="h-0.75 w-10 sm:w-15 bg-linear-to-r from-cyan-950/1 via-cyan-500 to-cyan-950/1 rounded-full animate-pulse" />
      </div>

      <div className="flex flex-col gap-15 md:gap-16">
        {projectsData.map((project, index) => (
          <div key={index} className="">
            <div
              className={`flex flex-col gap-10 md:gap-5 md:flex-row items-center sm:items-start lg:items-center justify-between w-full group h-full rounded-3xl md:text-left transition-all duration-500 transform ${
                isDarkMode ? "" : ""
              }`}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-3xl flex items-center justify-center md:w-1/2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-center group-hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-tr from-cyan-500 to-indigo-500/50 opacity-80 group-hover:scale-105 transition-transform duration-500">
                    <Code2 className="text-white" size={30} />
                  </div>
                )}
              </div>

              {/* Description Section */}
              <div className="p-1 sm:px-20 md:px-1 sm:py-10 md:py-1 flex flex-col md:w-1/2">
                <h3 className="text-lg sm:text-xl font-bold mb-1.5 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-[Ubuntu] ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[8px] border font-semibold uppercase tracking-widest px-1 py-0.5 rounded backdrop-blur-xs shadow-[0_5px_10px_rgba(0,0,0,0.1)] ${
                        isDarkMode
                          ? "border-slate-800/80 bg-slate-900/90 text-cyan-600"
                          : "border-white/40 border bg-linear-to-br from-gray-400/5 to-gray-300/80 text-cyan-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-2 sm:mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 sm:px-6 py-3 sm:py-3.5 rounded-3xl text-sm font-semibold transition-all duration-500 transform hover:-translate-y-1 active:translate-y-0 group shadow-[0_10px_25px_rgba(0,0,0,0.13)] backdrop-blur-3xl ${
                      isDarkMode
                        ? "bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                        : "border-white/30 border-2 bg-linear-to-br from-indigo-600/10 to-purple-600/20 hover:from-indigo-500/15 hover:to-purple-600/15 hover:text-gray-700 text-gray-950 hover:shadow-xs"
                    }`}
                  >
                    <VscLinkExternal />
                    Live demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl text-sm font-semibold border transition-all duration-500 transform hover:scale-101 active:scale-100 hover:-translate-y-1 active:translate-y-0 group shadow-[0_10px_25px_rgba(0,0,0,0.13)] backdrop-blur-xs ${
                      isDarkMode
                        ? "border-slate-800 bg-slate-950 hover:bg-slate-900/50 hover:border-slate-700 hover:text-white text-gray-300"
                        : "border-white/20 border-2 bg-linear-to-br from-gray-400/5 to-gray-300/80 hover:from-gray-400/15 hover:to-gray-400/25 hover:border-white/30 text-gray-950  hover:shadow-xs"
                    }`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projectspage;
