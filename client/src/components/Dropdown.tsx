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
    <>
      {/* Background blur overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-10 backdrop-blur-md transition-opacity duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${isDarkMode ? "bg-black/40" : "bg-black/10"}`}
      />

      <div
        className={`absolute top-full left-0 right-0 mx-6 mt-2 p-4 rounded-2xl border backdrop-blur-xs flex flex-col gap-2 md:hidden transition-all duration-300 ease-in-out z-50 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-4 pointer-events-none invisible"
        } ${
          isDarkMode
            ? "bg-slate-900/40 border-slate-800/70 shadow-[0_40px_40px_rgba(0,0,0,0.7)]"
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
                    ? "bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                    : "text-cyan-600 bg-white/40 border-white/20 border-2 bg-linear-to-br from-gray-400/5 to-gray-300/80 hover:from-gray-400/15 hover:to-gray-400/25 hover:border-white/30 hover:shadow-xs"
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
    </>
  );
};

export default Dropdown;
