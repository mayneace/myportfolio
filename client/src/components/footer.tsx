import React from "react";
import { FiGithub } from "react-icons/fi";
import { Mail } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface SocialLink {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const location = useLocation();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // On Homepage → scroll to the #home section
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On any other page (e.g. Projectspage) → just scroll that page to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helpers to assign custom hover listeners dynamically
  const hoverProps = {
    // onMouseEnter: () => setIsHovering(true),
    // onMouseLeave: () => setIsHovering(false),
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Giant clipped wordmark */}
      <div
        className={`relative pt-10 overflow-hidden flex items-end justify-center ${
          isDarkMode ? "" : ""
        }`}
      >
        <p
          className={`translate-y-1/4 whitespace-nowrap select-none pointer-events-none font-[Michroma] font-extrabold leading-none tracking-widest text-[22px] sm:text-[39px] md:text-[48px] lg:text-[68px] xl:text-[90px] 2xl:text-[135px] ${
            isDarkMode ? "text-white/5" : "text-black/5"
          }`}
        >
          MOSES ADEBAYO
        </p>
      </div>

      <div
        className={`z-20 py-8 sm:py-12 border-t-5 text-center transform-all duration-500 ease-in-out transform scroll-auto backdrop-blur-xs inset-shadow-sm font-[Michroma] ${
          isDarkMode
            ? "inset-shadow-slate/80 border-slate-900/50 bg-slate-950/60"
            : "inset-shadow-white/80 border-white bg-linear-to-br from-gray-400/30 via-gray-200/60 to-gray-100/90"
        }`}
      >
        <div className="flex flex-col w-full items-center md:items-start justify-center py-10 px-6 sm:px-[clamp(1rem,11.46vw,200px)] overflow-hidden gap-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 sm:w-full">
            <div className="flex flex-col items-start md:justify-between gap-5 md:gap-25">
              {/* Status Pill Indicator */}
              <div
                className={`flex w-50 md:w-45 items-center justify-center md:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-2 text-[10px] sm:text-[8px] font-semibold tracking-tight uppercase transition-colors shadow-[0_9px_10px_rgba(0,0,0,0.10)] backdrop-blur-xs  ${
                  isDarkMode
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-linear-to-br from-emerald-100/15 to-emerald-500/15 border-emerald-500/5 text-emerald-600"
                }`}
              >
                <span className="relative flex items-center h-1.5 sm:h-2 w-1.5 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative flex rounded-full h-0.5 sm:h-1.5 w-0.5 sm:w-1.5 bg-emerald-500"></span>
                </span>
                Available for work
              </div>

              <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest">
                &copy; {new Date().getFullYear()} Moses Adebayo. All rights
                reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start gap-2 sm:gap-2 md:gap-4">
              <p className="text-gray-500 font-bold text-md">Social</p>
              {(
                [
                  {
                    icon: (
                      <FiGithub
                        size={30}
                        className={` ${isDarkMode ? "text-indigo-200" : "text-indigo-600"}`}
                      />
                    ),
                    href: "https://github.com/mayneace",
                    label: "GitHub",
                  },
                  {
                    icon: (
                      <Mail
                        size={30}
                        className={` ${isDarkMode ? "text-red-200" : "text-red-600"}`}
                      />
                    ),
                    href: "https://mailto:mosesadebayour@gmail.com",
                    label: "Mail",
                  },
                  {
                    icon: (
                      <IoLogoWhatsapp
                        size={30}
                        className={` ${isDarkMode ? "text-green-200" : "text-green-600"} `}
                      />
                    ),
                    href: "https://wa.me/2348172621849",
                    label: "WhatsApp",
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
                    className={`rounded-4xl flex flex-row gap-3 items-center justify-center transition-all duration-500 transform hover:-translate-y-1 active:translate-y-0 group hover:scale-110 active:scale-100 ${
                      isDarkMode
                        ? "hover:bg-slate-900/50 hover:text-cyan-400 text-gray-400"
                        : "hover:bg-gray-50/50 hover:border-white/10 hover:text-black text-gray-600 hover:shadow-xs"
                    }`}
                  >
                    {social.icon}
                    <span className="text-xs font-medium tracking-wide">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="">
              <a
                href="#top"
                onClick={handleBackToTop}
                {...hoverProps}
                className="text-[10px] sm:text-xs text-gray-500 hover:text-cyan-400 transition-colors"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
