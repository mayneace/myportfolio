import React from "react";

interface DropdownProps {
  isDarkMode: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  isDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeTab,
  setActiveTab,
}) => {
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <div
      className={`absolute top-full left-0 right-0 mx-6 mt-2 p-4 rounded-2xl border backdrop-blur-xs flex flex-col gap-2 md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-4 pointer-events-none invisible"
      } ${
        isDarkMode
          ? "bg-slate-900/98 border-slate-800/60 shadow-[0_40px_40px_rgba(0,0,0,0.7)]"
          : "bg-linear-to-r from-gray-400/30 via-gray-300/99 to-gray-200/30 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.20)] border-2"
      }`}
    >
      {navItems.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => {
              setActiveTab(tab);
              setMobileMenuOpen(false);
            }}
            className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
              isActive
                ? isDarkMode
                  ? "text-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "text-blue-900 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                : isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-slate-800/50"
                  : "text-gray-600 hover:text-black hover:bg-gray-300/30"
            }`}
          >
            {tab}
          </a>
        );
      })}
    </div>
  );
};

export default Dropdown;
