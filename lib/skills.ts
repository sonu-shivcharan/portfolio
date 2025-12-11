// skills.ts
import { icons } from "./icons"; 

export const skills = {
  nextjs: {
    name: "Next.js",
    icon: icons.nextjs,
    // Adapts to dark mode automatically
    className: "text-zinc-950 dark:text-white", 
  },
  mongodb: {
    name: "MongoDB",
    icon: icons.mongodb,
    className: "text-green-600 dark:text-green-500",
  },
  nodejs: {
    name: "Node.js",
    icon: icons.nodejs,
    className: "text-emerald-600 dark:text-emerald-500",
  },
  express: {
    name: "Express.js",
    icon: icons.express, 
    className: "text-zinc-950 dark:text-white",
  },
  cloudinary: {
    name: "Cloudinary",
    icon: icons.cloudinary, 
    className: "text-blue-700 dark:text-blue-500",
  },
  qdrant: {
    name: "Qdrant",
    icon: icons.qdrant,
    className: "text-red-600 dark:text-red-500",
  },
  gemini: {
    name: "Gemini",
    icon: icons.googleGemini,
    className: "text-blue-500 dark:text-blue-400",
  },
  genkit: {
    name: "Genkit",
    icon: icons.ai, 
    className: "text-orange-500 dark:text-orange-400",
  },
  rag: {
    name: "RAG",
    icon: icons.database,
    className: "text-violet-600 dark:text-violet-400",
  },
  rbac: {
    name: "RBAC",
    icon: icons.admin, 
    className: "text-sky-600 dark:text-sky-400",
  },
};