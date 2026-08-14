import React, { useRef, useEffect } from "react";

// Update the interface to accept isDarkMode from the parent
interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
}

export const BgLayout: React.FC<LayoutProps> = ({ children, isDarkMode }) => {
  // 1. Remove the local useState for isDarkMode
  const containerRef = useRef<HTMLDivElement>(null);

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isDesktopCursor, setIsDesktopCursor] = useState(false);
  // const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  // const [isMouseDown, setIsMouseDown] = useState(false);

  // Handle mouse movement for sci-fi spotlight grid
  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const el = containerRef.current;
  //   if (!el) return;
  //   const rect = el.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  // Custom Cursor Mouse Listener
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    // setIsDesktopCursor(mediaQuery.matches);

    const handleMediaChange = (_e: MediaQueryListEvent) =>
      // setIsDesktopCursor(e.matches);
      mediaQuery.addEventListener("change", handleMediaChange);

    const handleMousePosition = (_e: MouseEvent) => {
      // setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // const handleMouseDown = () => setIsMouseDown(true);
    // const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMousePosition);
    // window.addEventListener("mousedown", handleMouseDown);
    // window.addEventListener("mouseup", handleMouseUp);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMousePosition);
      // window.removeEventListener("mousedown", handleMouseDown);
      // window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // onMouseMove={handleMouseMove}
      className={`min-h-screen font-sans transition-colors duration-800 overflow-hidden selection:bg-cyan-500 selection:text-black relative ${
        isDarkMode
          ? "bg-[#060713]/99  text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div>
        <div className="fixed opacity-[0.5] inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
            style={{
              // Change 'background' to 'backgroundImage'
              backgroundImage: `${isDarkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 80%), linear-gradient(${isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px)
  `,
              backgroundSize: "100% 100%, 40px 40px, 40px 40px",
            }}
          />

          <div className="absolute top-[20%] left-[-10%] w-[320px] sm:w-125 h-80 sm:h-125 rounded-full bg-indigo-600/10 blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
          <div className="absolute top-[60%] right-[-10%] w-[320px] sm:w-125 h-80 sm:h-125 rounded-full bg-cyan-600/10 blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
        </div>

        <div className="absolute top-[-1%] left-[-25%] md:left-[20%] w-75 h-75 md:w-150 md:h-250 rounded-full bg-purple-900/10 blur-[80px] md:blur-[140px]" />
        <div className="absolute top-[10%] right-[9%] w-62.5 h-62.5 md:w-125 md:h-200 rounded-full bg-cyan-900/20 blur-[60px] md:blur-[140px]" />
        <div className="absolute bottom-[4%] left-[-5%] w-75 h-75 md:w-100 md:h-210 rounded-full bg-black/20 blur-[80px] md:blur-[120px]" />

        <div className="relative z-10 w-full">{children}</div>
      </div>
    </div>
  );
};

export default BgLayout;
