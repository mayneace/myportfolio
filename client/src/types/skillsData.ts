import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaCloudDownloadAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import type { ComponentType } from "react";

// types.ts or skillsData.ts
export interface Skill {
  name: string;
  category: "FRONTEND" | "BACKEND" | "DATABASE" | "DEVOPS";
  icon: ComponentType<{ className?: string }> | string; // Component Type safety
  gridClasses: string; // Tailwind grid span controls
}

export const skills: Skill[] = [
  {
    name: "React.js",
    category: "FRONTEND",
    icon: FaReact,
    gridClasses: "col-span-8 md:col-span-3 row-span-2 h-50 sm:h-81",
  },
  {
    name: "HTML5/CSS3",
    category: "FRONTEND",
    icon: FaHtml5,
    gridClasses: "col-span-8 md:col-span-3 row-span-2 h-50 sm:h-81",
  },
  {
    name: "TypeScript",
    category: "FRONTEND",
    icon: SiTypescript,
    gridClasses: "col-span-16 md:col-span-3 row-span-1 h-35 sm:h-39",
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND",
    icon: RiTailwindCssFill,
    gridClasses: "col-span-16 md:col-span-4 row-span-1 h-35 sm:h-39",
  },
  {
    name: "Node.js",
    category: "BACKEND",
    icon: FaNodeJs,
    gridClasses: "col-span-8 md:col-span-3 row-span-2 h-70 sm:h-81",
  },
  {
    name: "Express.js",
    category: "BACKEND",
    icon: SiExpress,
    gridClasses:
      "col-span-8 md:col-span-4 row-span-2 sm:row-span-1 h-70 sm:h-39",
  },
  {
    name: "REST APIs",
    category: "BACKEND",
    icon: FaCloudDownloadAlt,
    gridClasses: "col-span-8 md:col-span-3 row-span-1 sm:row-span-1 h-39",
  },
  {
    name: "MONGO_DB",
    category: "DATABASE",
    icon: SiMongodb,
    gridClasses: "col-span-8 md:col-span-3 row-span-2 h-80 sm:h-39",
  },
  {
    name: "MONGOOSE",
    category: "DATABASE",
    icon: SiMongoose,
    gridClasses: "col-span-8 md:col-span-3 row-span-1 h-39",
  },
  {
    name: "GitHub",
    category: "DEVOPS",
    icon: FaGithub,
    gridClasses: "col-span-6 md:col-span-2 row-span-1 h-39",
  },
  {
    name: "Vercel",
    category: "DEVOPS",
    icon: SiVercel,
    gridClasses:
      "col-span-10 md:col-span-2 row-span-2 sm:row-span-2 h-80 sm:h-39",
  },
  {
    name: "Render",
    category: "DEVOPS",
    icon: SiRender,
    gridClasses: "col-span-6 md:col-span-3 row-span-1 h-39",
  },
  {
    name: "Postman",
    category: "DEVOPS",
    icon: SiPostman,
    gridClasses: "col-span-16 md:col-span-3 row-span-1 h-39",
  },
];
