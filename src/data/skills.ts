import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiAmazon,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiGithubactions,
  SiVercel,
  SiDocker,
  SiVite,
  SiGithub,
  SiMongodb,
  SiMongoose,
  SiAmazondynamodb,
} from "react-icons/si";

export type SkillItem = { name: string; icon: IconType; color?: string };
export type SkillCategory = { title: string; items: SkillItem[] };

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#A259FF" },
    ],
  },
  {
    title: "Backend & API",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    title: "Databaser",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      {
        name: "CI/CD (GitHub Actions)",
        icon: SiGithubactions,
        color: "#2088FF",
      },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Git & GitHub", icon: SiGithub, color: "#FFFFFF" },
    ],
  },
];
