import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import RevealSection from "../components/RevealSection";
import Project from "../components/Projects";
import Contact from "../components/Contact";

interface HomepageProps {
  isDarkMode: boolean;
}

const Homepage: React.FC<HomepageProps> = ({ isDarkMode }) => {
  return (
    <div className={`flex flex-col gap-20 lg:gap-5 min-h-screen mx-auto`}>
      <div id="home">
        <RevealSection>
          <Hero isDarkMode={isDarkMode} />
        </RevealSection>
      </div>

      <div id="about">
        <RevealSection>
          <About isDarkMode={isDarkMode} />
        </RevealSection>
      </div>

      <div id="skills">
        <RevealSection>
          <Skills isDarkMode={isDarkMode} />
        </RevealSection>
      </div>

      <div id="projects">
        <RevealSection>
          <Project isDarkMode={isDarkMode} />
        </RevealSection>
      </div>

      <div id="contact">
        <RevealSection>
          <Contact isDarkMode={isDarkMode} />
        </RevealSection>
      </div>
    </div>
  );
};

export default Homepage;
