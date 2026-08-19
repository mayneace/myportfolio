import React, { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is 10% visible on screen, trigger the animation
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once it's visible, we can stop observing it
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    ); // 0.1 means 10% of the element is visible

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
