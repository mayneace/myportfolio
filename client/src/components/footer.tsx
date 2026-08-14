import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  // const [isHovering, setIsHovering] = useState(false);

  // Helpers to assign custom hover listeners dynamically
  const hoverProps = {
    // onMouseEnter: () => setIsHovering(true),
    // onMouseLeave: () => setIsHovering(false),
  };

  return (
    <footer
      className={`py-8 sm:py-12 border-t-5 text-center transform-all duration-500 ease-in-out transform scroll-auto backdrop-blur-xs inset-shadow-sm ${
        isDarkMode
          ? "inset-shadow-slate/80 border-slate-900/50 bg-slate-950/60"
          : "inset-shadow-white/80 border-white bg-linear-to-br from-gray-400/30 via-gray-200/60 to-gray-100/90"
      }`}
    >
      <div className="relative flex flex-col w-full items-center md:items-start justify-center py-10 px-6 sm:px-[clamp(1rem,11.46vw,200px)] overflow-hidden gap-6">
        {/* Status Pill Indicator */}
        <div
          className={`flex w-50 md:w-45 items-center justify-center md:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-2 text-[10px] sm:text-[8px] font-semibold tracking-wider uppercase transition-colors font-[Orbitron] shadow-[0_9px_10px_rgba(0,0,0,0.10)] backdrop-blur-xs ${
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

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 sm:w-full">
          <p className="text-[10px] sm:text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Adebayo Moses. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#home"
              {...hoverProps}
              className="text-[10px] sm:text-xs text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
