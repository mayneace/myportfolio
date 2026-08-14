import React, { useEffect, useRef, useState } from "react";

interface AssembleProps {
  children: React.ReactNode;
}

const AssembleSection: React.FC<AssembleProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-800 ${
        isVisible ? "assemble-active" : "assemble-hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default AssembleSection;
