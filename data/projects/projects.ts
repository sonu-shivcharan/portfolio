import { IconType } from "react-icons";
import { skills } from "@/lib/skills";
export interface Skill {
  name: string;
  icon: IconType;
  className?: string;
}
export type ProjectStatus = "working" | "not working" | "building" | "limited";
export interface Project {
  title: string;
  subtitle: string;
  tech: Skill[];
  period: string;
  description: string;
  isFeatured?: boolean;
  img: string;
  status: [ProjectStatus, string];
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
      skills.redux,
      skills.rbac,
    ],
    period: "May 2025 - Present",
    isFeatured: true,
    status: ["working", "Currently Improving"],
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
    status: ["building", "Prototype"],
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
      source: "https://github.com/sonu-shivcharan/krishi-sahayak",
      viewLive: "https://ai-farmer-mu.vercel.app",
    },
  },
  {
    title: "Vidz Backend",
    subtitle: "Video Sharing Platform API",
    tech: [skills.nodejs, skills.express, skills.mongodb, skills.cloudinary],
    status: ["building", "Building"],
    period: "April 2025 - May 2025",
    isFeatured: true,
    description:
      "Scalable RESTful API backend for a video-sharing platform designed with 30+ documented endpoints.",
    img: "/projects/vidz-backend.png",
    links: {
      source: "https://github.com/sonu-shivcharan/vidz-backend",
      viewLive: "https://tiffinz-dev.vercel.app/",
    },
  },
  {
    title: "Templatz",
    subtitle: "AI-Powered Formal Letter Generator (v3)",
    tech: [
      skills.nextjs,
      skills.reactjs,
      skills.vercel,
      skills.tailwindcss,
      skills.gemini,
      skills.redux,
    ],
    status: ["working", "All Systems Operational"],
    period: "April 2025 - May 2025",
    isFeatured: true,
    description:
      "An AI-powered tool that helps students and professionals quickly generate formal letters for academic and official use, now enhanced with Gemini API-based personalized content generation.",
    img: "/projects/templatz.png",
    links: {
      source: "https://github.com/sonu-shivcharan/templatz",
      viewLive: "https://templatz.vercel.app/",
    },
  },
  {
    title: "Blog App",
    subtitle: "Blogging Web App",
    tech: [skills.reactjs, skills.tailwindcss, skills.appwrite, skills.redux],
    status: ["working", "All Systems Operational"],
    period: "April 2025 - May 2025",
    isFeatured: false,
    description: "Blog App ",
    img: "/projects/vidz-backend.png",
    links: {
      source: "https://github.com/sonu-shivcharan/react-blog-app",
      viewLive: "https://x-blog-app.vercel.app/",
    },
  },
];
