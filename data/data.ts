import { RiCollageLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sonu Shivcharan", //
    role: "Full-Stack Web Developer", //
    contact: {
      email: "sonushivcharan@outlook.com", //
      phone: "+91 8010096692", //
      linkedin: "https://linkedin.com/in/sonushivcharan", //
      github: "https://github.com/sonu-shivcharan", //
      location: "Pune, Maharashtra", //
    },
    summary:
      "Full-Stack Web Developer with practical experience in building responsive, high-performance applications using Next.js, Node.js, and React.js. Skilled in developing scalable backend APIs, creating intuitive user interfaces, and integrating AI-powered features.", //
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML/CSS", "Python"], //
    frameworks: ["React.js", "Next.js", "Node.js"], //
    tools: [
      "Git/Github",
      "Docker",
      "Google Cloud Platform",
      "Postman",
      "MongoDB Atlas",
      "QdrantDB",
    ], //
  },
  experience: [
    {
      company: "Alaska App Studios, Pvt. Ltd.", //
      role: "Web Development Intern", //
      period: "February 2025 - May 2025", //
      type: "Remote", //
      achievements: [
        "Developed and maintained responsive web applications using React.js", //
        "Converted Figma designs into high-quality, reusable UI components", //
        "Led a team of developers, ensuring smooth workflow and maintaining code quality", //
      ],
    },
  ],
  projects: [
    {
      title: "Tiffinz", //
      subtitle: "Tiffin Service Management Web App", //
      tech: ["Next.js", , "MongoDB Atlas", "RBAC"], //
      period: "May 2025 - Present", //
      description:
        "Full-stack meal tracking system implemented with user-facing features including daily tiffin status, wallet balance tracking, and detailed transaction history.", //
      points: [
        "Developing an admin panel to verify manual payments and approve wallet top-ups.", //
        "Integrating role-based access control (RBAC) for both users and admins.", //
      ],
    },
    {
      title: "Krishi Sahayak", //
      subtitle: "AI-Powered Farmer Support",
      tech: ["Next.js", "Genkit", "RAG", "QdrantDB", "Gemini LLM"], //
      period: "September 2025 - October 2025", //
      description:
        "AI chatbot prototype helping farmers receive instant support via text, voice, and image queries using Gemini LLM.", //
      points: [
        "Implemented a RAG architecture with Google Genkit SDK, migrating from MongoDB Atlas to QdrantDB.", //
        "Cleaned and ingested agricultural datasets from data.gov.in for context-aware retrieval.", //
      ],
    },
    {
      title: "Vidz Backend", //
      subtitle: "Video Sharing Platform API",
      tech: ["Node.js", "Express", "MongoDB", "Cloudinary"], //
      period: "April 2025 - May 2025", //
      description:
        "Scalable RESTful API backend for a video-sharing platform designed with 30+ documented endpoints.", //
      points: [
        "Reduced video upload time by 60% by enabling direct uploads to Cloudinary.", //
        "Implemented social features such as comments, likes, subscriptions, and user profiles.", //
      ],
    },
  ],
  education: [
    {
      institution: "Dr. DY Patil Arts, Commerce and Science College", //
      degree: "Bachelor of Computer Applications", //
      period: "July 2023 - June 2026", //
      location: "Pune, Maharashtra", //
    },
  ],
};