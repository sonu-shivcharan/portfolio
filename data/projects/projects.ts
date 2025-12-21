import { IconType } from "react-icons";
import { skills } from "@/lib/skills";
export interface Skill {
  name: string;
  icon: IconType; // or ReactNode if using components
  className?: string;
}
export interface Project {
  title: string;
  subtitle: string;
  tech: Skill[]; // assuming Skill is the type of each skills.* entry
  period: string;
  description: string;
  isFeatured?: boolean;
  img: string;
  status: string;
  links: {
    source: string | null;
    viewLive: string | null;
  };
}
export const projects: Project[] = [
  {
    title: "Tiffinz",
    subtitle: "Tiffin Service Management Web App",
    tech: [
      skills.nextjs,
      skills.reactjs,
      skills.tailwindcss,
      skills.mongodb,
      skills.rbac,
    ],
    period: "May 2025 - Present",
    isFeatured: true,
    status: "Building",
    description:
      "Full-stack meal tracking system implemented with user-facing features including daily tiffin status, wallet balance tracking, and detailed transaction history.",
    img: "/projects/tiffinz.png",
    links: {
      source: "https://github.com/sonu-shivcharan/tiffinz",
      viewLive: null,
    },
  },
  {
    title: "Krishi Sahayak",
    subtitle: "AI-Powered Farmer Support",
    status: "In Progress",
    tech: [
      skills.nextjs,
      skills.reactjs,
      skills.genkit,
      skills.rag,
      skills.gemini,
    ],
    period: "September 2025 - October 2025",
    isFeatured: true,
    description:
      "AI chatbot prototype helping farmers receive instant support via text, voice, and image queries using Gemini LLM.",
    img: "/projects/krishi-sahayak.png",
    links: {
      source: null,
      viewLive: "https://ai-farmer-mu.vercel.app",
    },
  },
  {
    title: "Vidz Backend",
    subtitle: "Video Sharing Platform API",
    tech: [skills.nodejs, skills.express, skills.mongodb, skills.cloudinary],
    status: "Completed",
    period: "April 2025 - May 2025",
    isFeatured: true,
    description:
      "Scalable RESTful API backend for a video-sharing platform designed with 30+ documented endpoints.",
    img: "/projects/vidz-backend.png",
    links: {
      source: "https://github.com/sonu-shivcharan/vidz-backend",
      viewLive: null,
    },
  },
];
