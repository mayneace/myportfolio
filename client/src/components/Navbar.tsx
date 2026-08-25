import React, { useState, useEffect, useCallback } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import navlogo2 from "../assets/3dlogo.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// interface NavbarProps {
//   isDarkMode: boolean;
//   setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
// }

const NAV_SECTIONS = ["home", "about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (tab: string) => {
    document.getElementById(tab)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: string,
  ) => {
    e.preventDefault();
    setActiveTab(tab);
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate home and pass the target section via router state.
      // The homepage effect below picks this up once it has mounted,
      // instead of guessing at a fixed timeout.
      navigate("/", { state: { scrollTo: tab } });
    } else {
      scrollToSection(tab);
    }
  };

  // If we've just navigated home with a pending section to scroll to
  // (set by handleNavClick above), scroll to it once this component
  // (and presumably the rest of the homepage) has mounted.
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === "/" && state?.scrollTo) {
      scrollToSection(state.scrollTo);
      // Clear the state so refreshing/back-nav doesn't re-trigger the scroll.
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.state]);

  // Track which section is active based on scroll position.
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200;

    for (const section of NAV_SECTIONS) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveTab(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    // Run once on mount so the correct tab is highlighted even if the
    // page loads already scrolled down (refresh, restored scroll, etc).
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-3 sm:top-5 w-full items-center z-50 px-4 sm:px-[clamp(1rem,11.46vw,200px)]">
      <header
        className={`relative z-20 flex justify-between border backdrop-blur-xs sm:backdrop-blur-sm transition-all duration-500 px-7 rounded-full transform group shadow-[0_10px_30px_rgba(0,0,0,0.10)] inset-shadow-sm font-[Michroma] ${
          isDarkMode
            ? "bg-slate-900/10 border-slate-800/30 hover:shadow-xs"
            : "bg-linear-to-r from-gray-400/20 via-gray-300/60 to-gray-200/90 border-white/25 hover:shadow-xs inset-shadow-white/40"
        }`}
      >
        {/* Logo Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 py-3 group pointer-events-auto"
        >
          <img src={navlogo2} alt="Logo" className="w-10 h-10 object-contain" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 pointer-events-auto">
          {NAV_SECTIONS.map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              onClick={(e) => handleNavClick(e, tab)}
              aria-current={activeTab === tab ? "page" : undefined}
              className={`relative px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${
                activeTab === tab
                  ? isDarkMode
                    ? "text-cyan-400"
                    : "text-cyan-600"
                  : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
              {/* Animated Slider Line */}
              {activeTab === tab && (
                <motion.span
                  layoutId="activeNavIndicator"
                  transition={{ type: "spring", stiffness: 980, damping: 20 }}
                  className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-colors duration-500 ${
                    isDarkMode
                      ? "bg-linear-to-r from-cyan-950/10 via-cyan-200/80 to-cyan-950/10"
                      : "bg-linear-to-r from-cyan-200/10 via-cyan-500 to-cyan-200/10"
                  }`}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons Container */}
        <div className="flex items-center gap-2 py-3">
          {/* Dark Mode Switcher */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
            aria-pressed={isDarkMode}
            className={`p-2 sm:p-2 rounded-full border-2 cursor-pointer transition-all duration-300 transform pointer-events-auto ${
              isDarkMode
                ? "border-slate-800 bg-slate-950 text-yellow-600 hover:bg-slate-900"
                : "border-gray-300/60 bg-slate-100/80 text-cyan-500 hover:bg-white"
            }`}
          >
            {isDarkMode ? <FiSun size={25} /> : <IoMoonOutline size={25} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2 sm:p-2 rounded-full border transition-all duration-500 transform pointer-events-auto cursor-pointer ${
              isDarkMode
                ? "border-slate-800 bg-slate-950 text-white hover:bg-slate-900"
                : "border-gray-300 bg-slate-50 text-black hover:bg-slate-200"
            }`}
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <Dropdown
        // isDarkMode={isDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default Navbar;
