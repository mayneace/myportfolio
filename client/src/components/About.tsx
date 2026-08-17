import React, { useState } from "react";
import avatar from "../assets/Gemini_Generated_Image_tffv8btffv8btffv.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import AssembleSection from "./AssembleSection";

interface AboutProps {
  isDarkMode: boolean;
}

const TiltWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left - card.width / 2) / (card.width / 2);
    const y = (e.clientY - card.top - card.height / 2) / (card.height / 2);
    setRotate({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(2000px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-10 px-6 sm:px-[clamp(1rem,11.46vw,200px)] overflow-hidden scroll-mt-10 gap-12 font-[Ubuntu]"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
        <span
          className={`text-[10px] sm:text-[11px] border-2 font-bold tracking-widest uppercase py-1 px-3 rounded-full  backdrop-blur-sm ${
            isDarkMode
              ? "bg-slate-950 border-slate-800 text-cyan-400 opacity-40"
              : "border-white/40 bg-gray-300/50 text-cyan-600 shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
          }`}
        >
          About Me
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide font-[Michroma]">
          Overview
        </h2>
        <div className="h-0.75 w-10 sm:w-12 bg-linear-to-r from-cyan-950 via-cyan-200 to-cyan-950 rounded-full" />
      </div>

      {/* TWO-COLUMN CONTENT WITH ASSEMBLY EFFECT */}
      <AssembleSection>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
          {/* LEFT COLUMN: IMAGE ASSEMBLY */}
          <div
            className="flex justify-center lg:justify-start w-full lg:w-1/2 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform
              in-[.assemble-hidden]:opacity-0 in-[.assemble-hidden]:-translate-x-24 in-[.assemble-hidden]:blur-sm
              in-[.assemble-active]:opacity-100 in-[.assemble-active]:translate-x-0 in-[.assemble-active]:blur-0"
          >
            <TiltWrapper className="relative group/tilt max-w-sm w-full flex justify-center">
              <div className="relative rounded-2xl bg-linear-to-tr from-purple-600/30 via-[#d946ef]/30 to-blue-300/30 p-0.5 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full max-w-xs aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Card: Years Exp */}
                <div
                  className={`absolute -top-10 -left-3 sm:-left-10 border rounded-xl p-3 flex flex-col items-center justify-center shadow-lg backdrop-blur-xs w-24 text-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-[#12072b]/60 border-purple-500/30 shadow-purple-950/20"
                      : "border-white/20 border-2 bg-linear-to-tl from-gray-400/35 to-gray-300/90"
                  }`}
                >
                  <span
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    1+
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider leading-tight transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Years Exp.
                  </span>
                </div>

                {/* Floating Card: Projects */}
                <div
                  className={`absolute -bottom-10 -right-3 sm:-right-10 border rounded-xl p-3 flex flex-col items-center justify-center shadow-lg backdrop-blur-xs w-24 text-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-[#12072b]/60 border-purple-500/30 shadow-purple-950/20"
                      : "border-white/20 border-2 bg-linear-to-br from-gray-400/35 to-gray-300/90"
                  }`}
                >
                  <span
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? "text-orange-400" : "text-orange-600"
                    }`}
                  >
                    7+
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider leading-tight transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects
                  </span>
                </div>
              </div>
            </TiltWrapper>
          </div>

          {/* RIGHT COLUMN: TEXT GRID ASSEMBLY */}
          <div
            className="flex flex-col gap-8 sm:gap-5 w-full lg:w-1/2 text-left transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform
              in-[.assemble-hidden]:opacity-0 in-[.assemble-hidden]:translate-x-24 in-[.assemble-hidden]:blur-sm
              in-[.assemble-active]:opacity-100 in-[.assemble-active]:translate-x-0 in-[.assemble-active]:blur-0"
          >
            <div className="space-y-4 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold">
                Bridging Code and User Experience
              </h3>
              <p
                className={`text-sm sm:text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                As a dedicated Full-Stack Developer who specializes in engineering
                responsive, secure, and lightning-fast web applications. My
                expertise is grounded in the entire TypeScript and JavaScript ecosystem,
                allowing me to build systems from the ground up with clean,
                scalable architectures.
              </p>
              <p
                className={`text-sm sm:text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Whether constructing high-throughput backends using Node/Express
                or pixel-perfect frontends with React and Tailwind CSS, I am
                obsessed with quality engineering and optimized performance.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Fast Load Speed",
                  desc: "Prioritizing Web Vitals & lightweight components",
                },
                {
                  title: "Responsive Layouts",
                  desc: "Crafting beautiful views on any screens",
                },
                {
                  title: "MERN Stack",
                  desc: "Expert in MongoDB, Express, React, and Node",
                },
                {
                  title: "Interactive UI",
                  desc: "Integrating fluid animations and designs",
                },
              ].map((feature, i) => (
                <TiltWrapper
                  key={i}
                  className={`p-4 sm:p-5 rounded-2xl text-left border-2 transition-colors duration-500 group shadow-[0_5px_15px_rgba(0,0,0,0.13)] backdrop-blur-xs ${
                    isDarkMode
                      ? "border-slate-900 bg-slate-700/10 hover:border-cyan-500/40 hover:bg-slate-900/80"
                      : "border-white/20 border-2 bg-linear-to-br from-gray-400/5 to-gray-300/80 hover:from-gray-400/10 hover:to-gray-300/40 hover:border-white/50 hover:shadow-xs"
                  }`}
                >
                  <IoShieldCheckmarkOutline
                    className="text-cyan-500 mb-2.5 sm:mb-3"
                    size={15}
                  />
                  <h4 className="font-bold text-sm sm:text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs leading-normal text-gray-500">
                    {feature.desc}
                  </p>
                </TiltWrapper>
              ))}
            </div>
          </div>
        </div>
      </AssembleSection>
    </section>
  );
};

export default About;
