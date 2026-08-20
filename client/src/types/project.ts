import space from "../assets/wudjsbv8g93aarlhvbud.jpg";
import country from "../assets/allcoutries.jpg";
import advice from "../assets/syo43ktrlu3huqaqye2c.jpg";
import echo from "../assets/Screenshot 2026-07-30 112123.png";
import audiophile from "../assets/audiophile.png";

export interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github: string;
  image?: string;
  featured?: boolean; // shows up in the home page preview
}

export const projectsData: ProjectItem[] = [
  {
    title: "Audiophile🎧 — TypeScript MERN Stack E-Commerce",
    desc: "A full-stack e-commerce application for premium audio equipment, rebuilt from JavaScript to **TypeScript** using the MERN stack",
    tags: [
      "React",
      "HTML5",
      "TailwindCSS",
      "TypeScript",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
    link: "https://audiophilefinale.vercel.app/",
    github: "https://github.com/mayneace/Audiophilefinale",
    image: audiophile,
    featured: true,
  },
  {
    title: "Space Tourism🌍 — Multi-Page Web Application",
    desc: "A sleek, fully responsive multi-page website designed for a fictional space tourism agency. Built with a focus on immersive user experience, modern layout trends, and seamless navigation across celestial destinations, crew profiles, and cutting-edge technology.",
    tags: ["React", "HTML5", "TailwindCSS", "TypeScript"],
    link: "https://spacetour-delta.vercel.app/",
    github: "https://github.com/mayneace/SpaceTour",
    image: space,
    featured: true,
  },
  {
    title:
      "All Countries🗺️ — REST Countries API explorer with color theme switcher",
    desc: "Displays all countries on a homepage as cards, each showing the flag, population, region, and capital, lets users search for a country by name via an input field, lets users filter countries by region (Africa, America, Asia, Europe, Oceania) via a dropdown, clicking a country opens a detail page with expanded info (top-level domain, currencies, languages) plus clickable border-country links to navigate between related countries, supports light/dark mode toggling.",
    tags: ["React", "HTML5", "TailwindCSS", "TypeScript", "API"],
    link: "https://allcountries-plum.vercel.app/",
    github: "https://github.com/mayneace/Allcountries",
    image: country,
    featured: true,
  },
  {
    title: "Quote Generator Web App 💭",
    desc: "A minimalist single-page application built to deliver fresh, inspirational advice at the click of a button. Designed based on Frontend Mentor challenges, this project focuses on API integration, responsive visual hierarchy, and polished user interaction.",
    tags: ["JavaScript", "React", "API", "HTML5"],
    link: "https://advice-two-beta.vercel.app/",
    github: "https://github.com/mayneace/Advice",
    image: advice,
    featured: true,
  },
  {
    title: "ECHO - Civic Engagement Platform [DEMO PAGE] 📃",
    desc: "A civic tech web platform designed to bridge the gap between citizens and local governance in Ekiti State. Built to foster transparency, improve access to public services, and encourage active community participation through an accessible, modern UI.",
    tags: ["React", "HTML5"],
    link: "https://echo-swart.vercel.app/",
    github: "https://github.com/mayneace/Echo",
    image: echo,
    featured: false,
  },
];
