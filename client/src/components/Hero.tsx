import React, { useState, useEffect } from "react";
// import { GoDotFill } from "react-icons/go";
// import Typewriter from "typewriter-effect";
// import { MdEmail } from "react-icons/md";
// import { FiDownload } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import avatar from "../assets/Gemini_Generated_Image_crk1gccrk1gccrk1.png";
import {
  // Computer,
  Mail,
  Download,
  // Moon,
  // Sun,
  // ExternalLink,
  // Code2,
  // Briefcase,
  // User,
  Cpu,
  MessageSquare,
  // CheckCircle2,
  // Menu,
  // X,
  // ArrowDown,
} from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
// import AssembleSection from "./AssembleSection";

interface RotationState {
  x: number;
  y: number;
}

interface HeroProps {
  isDarkMode: boolean;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [rotate, setRotate] = useState<RotationState>({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");

  // Custom Cursor States
  // const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  // const [cursorRingPos, setCursorRingPos] = useState({ x: -100, y: -100 });
  // const [isHovering, setIsHovering] = useState(false);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [isDesktopCursor, setIsDesktopCursor] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Triggers when scrolled past 20px (adjust threshold as needed)
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom Cursor Mouse Listener
  // useEffect(() => {
  // const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  // setIsDesktopCursor(mediaQuery.matches);

  // const handleMediaChange = (e: MediaQueryListEvent) =>
  // setIsDesktopCursor(e.matches);
  // mediaQuery.addEventListener("change", handleMediaChange);

  // const handleMousePosition = (e: MouseEvent) => {
  // setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  // const handleMouseDown = () => setIsMouseDown(true);
  // const handleMouseUp = () => setIsMouseDown(false);

  // window.addEventListener("mousemove", handleMousePosition);
  // window.addEventListener("mousedown", handleMouseDown);
  // window.addEventListener("mouseup", handleMouseUp);

  // return () => {
  // mediaQuery.removeEventListener("change", handleMediaChange);
  // window.removeEventListener("mousemove", handleMousePosition);
  // window.removeEventListener("mousedown", handleMouseDown);
  // window.removeEventListener("mouseup", handleMouseUp);
  // };
  // }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to the card center (-1 to 1)
    const x = (e.clientX - card.left - card.width / 2) / (card.width / 2);
    const y = (e.clientY - card.top - card.height / 2) / (card.height / 2);

    // Max 15-degree tilt
    setRotate({ x: x * 15, y: -y * 15 });
  };

  // const handleMouseLeave = () => {
  //   setRotate({ x: 0, y: 0 });
  // };

  // Typewriter sequence strings
  const words = [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic Typewriter Effect
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1),
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  // Helpers to assign custom hover listeners dynamically
  // const hoverProps = {
  //   onMouseEnter: () => setIsHovering(true),
  //   onMouseLeave: () => setIsHovering(false),
  // };

  // flex flex-col 2xl:justify-between gap-15 sm:gap-35 md:gap-40 lg:gap-15 xl:gap-15 2xl:gap-60 lg:flex-row px-6 sm:px-[clamp(1rem,11.46vw,200px)] pt-35 sm:pt-35 md:pt-40 lg:pt-52 xl:pt-40 2xl:pt-50 overflow-hidden scroll-mt-20

  // <GoDotFill className="animate__animated animate__flash animate__slower animate__infinite" />

  return (
    <section
      id="home"
      className="relative min-h-screen md:h-screen w-full md:overflow-hidden flex 2xl:justify-between gap-15 sm:gap-35 md:gap-40 lg:gap-15 xl:gap-15 2xl:gap-60 lg:flex-row px-6 sm:px-[clamp(1rem,11.46vw,200px)] pt-35 sm:pt-35 md:pt-45 lg:pt-44 xl:pt-40 2xl:pt-50"
    >
      <ParticlesBackground
        className={`absolute inset-0 z-0 transition-colors duration-500 transform ${isDarkMode ? "opacity-25" : "opacity-60"}`}
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
      <div
        className="relative z-10 pointer-events-none flex flex-col lg:flex-row lg:items-center lg:justify-between gap-30 sm:gap-0 lg:gap-0 lg:w-full transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform
              in-[.assemble-hidden]:opacity-10 in-[.assemble-hidden]:-translate-x-24 in-[.assemble-hidden]:blur-md
              in-[.assemble-active]:opacity-100 in-[.assemble-active]:translate-x-0 in-[.assemble-active]:blur-0"
      >
        {/* left column */}
        <div className="flex flex-col items-start gap-5 sm:gap-6 text-left w-full lg:w-1/2">
          {/* Status Pill Indicator */}
          <div
            className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase transition-colors font-[Orbitron] shadow-[0_9px_10px_rgba(0,0,0,0.10)] backdrop-blur-xs ${
              isDarkMode
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-linear-to-br from-emerald-100/15 to-emerald-500/15 border-emerald-500/5 text-emerald-600"
            }`}
          >
            <span className="relative flex items-center h-1.5 sm:h-2 w-1.5 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-0.5 sm:h-1.5 w-0.5 sm:w-1.5 bg-emerald-500"></span>
            </span>
            Available for work
          </div>

          {/* Headings with Responsive Font Scaling */}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-6 text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-[Michroma] font-black">
            <h1 className="tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-600">
              Moses
            </h1>
            <h2
              className={`tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Adebayo
            </h2>
          </div>

          {/* Dynamic Typewriter Skill Subheading */}
          <div className="flex items-center h-8 font-[Michroma]">
            <span
              className={`text-md sm:text-base md:text-lg xl:text-xl tracking-tighter border-l-4 pl-3 py-0.5${
                isDarkMode
                  ? "border-cyan-400 text-cyan-400"
                  : "border-purple-600 text-purple-600"
              }`}
            >
              {typedText}
              <span className="animate-ping">|</span>
            </span>
          </div>

          {/* Description Paragraph with fixed text wraps */}
          <p
            className={`text-md sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide font-[Montserrat] ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Transforming complex functionality into <br />
            <span
              className={
                isDarkMode
                  ? "text-slate-200 font-medium"
                  : "text-slate-800 font-medium"
              }
            >
              seamless, delightful user experience
            </span>{" "}
            through <br /> production-grade websites.
          </p>

          {/* Responsive Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mt-2 sm:mt-4 pointer-events-auto font-[Michroma]">
            <a
              href="#contact"
              // {...hoverProps}
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl text-sm transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group shadow-[0_10px_25px_rgba(0,0,0,0.13)] backdrop-blur-3xl font-bold ${
                isDarkMode
                  ? "bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                  : "border-white/30 border-2 bg-linear-to-br from-indigo-600/10 to-purple-600/20 hover:from-indigo-500/15 hover:to-purple-600/15 hover:text-gray-700 text-gray-950 hover:shadow-xs"
              }`}
            >
              <MessageSquare
                size={16}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              Get in touch
            </a>
            <a
              href="https://drive.google.com/file/d/1jyY1f_VsgtmXx73Yuv5VlugnHShNtQmV/view?usp=sharing"
              // {...hoverProps}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl text-sm border transition-all duration-300 transform hover:scale-101 active:scale-100 hover:-translate-y-1 active:translate-y-0 group shadow-[0_10px_25px_rgba(0,0,0,0.13)] backdrop-blur-xs ${
                isDarkMode
                  ? "border-slate-800 bg-slate-950 hover:bg-slate-900/50 hover:border-slate-700 hover:text-white text-gray-300"
                  : "border-white/20 border-2 bg-linear-to-br from-gray-400/5 to-gray-300/80 hover:from-gray-400/15 hover:to-gray-400/25 hover:border-white/30 text-gray-950  hover:shadow-xs"
              }`}
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 sm:mt-6 pointer-events-auto">
            {(
              [
                {
                  icon: (
                    <FiGithub
                      size={26}
                      className={` ${isDarkMode ? "text-indigo-200" : "text-indigo-600"}`}
                    />
                  ),
                  href: "https://github.com/mayneace",
                },
                {
                  icon: (
                    <Mail
                      size={26}
                      className={` ${isDarkMode ? "text-red-200" : "text-red-600"}`}
                    />
                  ),
                  href: "https://mailto:mosesadebayour@gmail.com",
                },
                {
                  icon: (
                    <IoLogoWhatsapp
                      size={26}
                      className={` ${isDarkMode ? "text-green-200" : "text-green-600"} `}
                    />
                  ),
                  href: "https://wa.me/2348172621849",
                },
              ] as SocialLink[]
            ).map((social: SocialLink, index: number) => {
              const isMail = social.href.startsWith("mailto:");

              return (
                <a
                  key={index}
                  href={social.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  // {...hoverProps}
                  className={`p-2.5 sm:p-3.5 rounded-xl border flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 group shadow-[0_10px_15px_rgba(0,0,0,0.14)] backdrop-blur-xs  hover:scale-105 ${
                    isDarkMode
                      ? "border-slate-800 bg-slate-950/80 hover:bg-slate-900 hover:border-cyan-500/50 hover:text-cyan-400 text-gray-400"
                      : "border-white/30 border-2 bg-linear-to-br from-gray-500/5 to-gray-300/80 hover:bg-gray-50 hover:border-white/10 hover:text-purple-500 text-gray-600 hover:shadow-xs"
                  }`}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column - Avatar Frame responsive to sm, md, lg, xl, and 2xl layout points */}
        <div
          className="flex justify-center items-center lg:w-1/2 sm:justify-end transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform
              in-[.assemble-hidden]:opacity-0 in-[.assemble-hidden]:translate-x-44 in-[.assemble-hidden]:blur-md
              in-[.assemble-active]:opacity-100 in-[.assemble-active]:translate-x-0 in-[.assemble-active]:blur-0"
          onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative group animate-bounce-sm pointer-events-auto"
            style={{
              transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Outer Glow Elements */}
            <div
              className={`absolute -inset-8 rounded-full blur-2xl transition duration-500 group-hover:scale-105 ${
                isDarkMode
                  ? "bg-linear-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-50"
                  : "bg-linear-to-tr from-cyan-400/50 via-sky-300/50 to-indigo-400/90 opacity-20 group-hover:opacity-60"
              }`}
            />

            {/* Spinning Rings */}
            <div
              className={`absolute -inset-2 rounded-full border-2 border-dashed animate-[spin_40s_linear_infinite] ${
                isDarkMode ? "border-indigo-500/20" : "border-indigo-400/30"
              }`}
            />
            <div
              className={`absolute -inset-1 rounded-full border border-dashed animate-[spin_25s_linear_infinite_reverse] ${
                isDarkMode ? "border-cyan-500/30" : "border-cyan-700/40"
              }`}
            />

            {/* Central Sphere */}
            <div
              className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-100 2xl:h-100 rounded-full p-1.5 sm:p-px backdrop-blur-xs transition-colors duration-300 ${
                isDarkMode
                  ? "bg-linear-to-b from-cyan-400/30 to-purple-600/30"
                  : "bg-linear-to-b from-cyan-300/5 to-indigo-400/5 shadow-lg"
              }`}
            >
              <div
                className={`relative w-full h-full rounded-full overflow-hidden border transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-linear-to-b from-slate-950 via-indigo-950 to-blue-950 border-purple-800/25"
                    : "bg-linear-to-b from-slate-50/5 via-indigo-50/5 to-sky-100/5 border-indigo-200/60"
                }`}
              >
                {/* <radialGradient id="avatarGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#020617" />
                </radialGradient> */}
                <img src={avatar} alt="" className="" />
              </div>
            </div>

            {/* Cyber badges */}
            <div
              className={`absolute animate-pulse -bottom-1 -left-2 sm:-left-4 border font-mono text-\[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-\[0\_0\_15px\_rgba(99,102,241,0.2)] tracking-wider flex items-center gap-1.5 backdrop-blur-xs transition-transform duration-500 ${isDarkMode ? "bg-slate-950/90 border-indigo-500/30 text-cyan-400" : "border-purple-100/20 border-2 bg-linear-to-br from-indigo-600/20 to-purple-600/20 text-gray-800 hover:scale-x-105 shadow-\[0\_10px\_25px\_rgba(0,0,0,0.13)]"}`}
            >
              <Cpu
                size={10}
                className="animate-[pulse_1s_infinite] sm:w-4 sm:h-4"
              />
              <span>1+ yr exp</span>
            </div>

            <div
              className={`absolute animate-pulse -top-1 -right-2 sm:-right-4  font-mono text-\[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl shadow-\[0\_0\_15px\_rgba(6,182,212,0.2)] tracking-wider flex items-center gap-1 backdrop-blur-xs transition-transform duration-500 ${isDarkMode ? "bg-slate-950/90 border border-cyan-500/30 text-purple-400" : "border-white/20 border-2 bg-linear-to-br from-gray-400/30 to-gray-300/40 text-purple-700 hover:scale-x-105 shadow-\[0\_10px\_25px\_rgba(0,0,0,0.13)]"}`}
            >
              <span
                className={`${isDarkMode ? "text-cyan-400" : "text-cyan-600"} `}
              >
                &lt;
              </span>
              <span>MERN</span>
              <span
                className={`${isDarkMode ? "text-cyan-400" : "text-cyan-600"} `}
              >
                /&gt;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Arrow */}
      <div
        className={`absolute bottom-7 md:bottom-15 lg:bottom-7 left-1/2 md:left-30 lg:left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 transition-all duration-300 ${
          hasScrolled
            ? "opacity-0 pointer-events-none translate-y-2"
            : "opacity-100"
        }`}
      >
        <span
          className={`text-[10px] tracking-widest font-semibold uppercase opacity-30 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Explore
        </span>
        <div
          className={`w-5 h-8 rounded-full border-2 flex justify-center items-start p-1 ${
            isDarkMode ? "border-slate-700" : "border-gray-300"
          }`}
        >
          <div className="w-0.75 h-1 bg-cyan-400 rounded-full animate-bounce-sm mt-1.25" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
