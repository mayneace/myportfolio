import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import RevealSection from "../components/RevealSection";

// Lazy-loaded below-the-fold sections
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Project = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

const SectionFallback: React.FC = () => (
  <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
);

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-5 min-h-screen mx-auto">
      <div id="home">
        <RevealSection>
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>
        </RevealSection>
      </div>

      <div id="about">
        <RevealSection>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </RevealSection>
      </div>

      <div id="skills">
        <RevealSection>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
        </RevealSection>
      </div>

      <div id="projects">
        <RevealSection>
          <Suspense fallback={<SectionFallback />}>
            <Project />
          </Suspense>
        </RevealSection>
      </div>

      <div id="contact">
        <RevealSection>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </RevealSection>
      </div>
    </div>
  );
};

export default Homepage;
