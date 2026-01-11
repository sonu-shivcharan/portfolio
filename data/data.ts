import { skills } from "@/lib/skills";
import { icons } from "@/lib/icons";

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sonu Shivcharan",
    role: "Full-Stack Web Developer",
    image: "/logos/sonu-shivcharan.jpg",
    contact: [
      {
        name: "Email",
        link: "mailto:sonushivcharan@outlook.com",
        icon: icons.envelope,
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/sonushivcharan",
        icon: icons.linkedin,
      },
      {
        name: "GitHub",
        link: "https://github.com/sonu-shivcharan",
        icon: icons.github,
      },
      {
        name: "Twitter",
        link: "https://x.com/SonuShivcharan",
        icon: icons.xtwitter,
      },
    ],
    resume: "/resume/sonu-shivcharan-resume.pdf",
    cal: "https://cal.com/sonu-shivcharan/30min",
    location: "Pune, Maharashtra, India",
    summary:
      "I build modern, fast, and scalable web applications using Next.js,React.js,TypeScript,Node.js and MongoDB. I craft smooth user experiences, build reliable APIs, and explore AI integrations. Actively learning advanced backend concepts",
    aboutSummary: "",
  },
  skills: [
    skills.html,
    skills.css,
    skills.javascript,
    skills.typescript,
    skills.reactjs,
    skills.nextjs,
    skills.tailwindcss,
    skills.firebase,
    skills.reactQuery,
    skills.redux,
    skills.nodejs,
    skills.express,
    skills.mongodb,
    skills.docker,
    skills.postman,
  ],
  experience: [
    {
      company: {
        name: "Alaska App Studios, Pvt. Ltd.",
        location: "Pune, India",
        links: [
          {
            icon: icons.website,
            url: "https://highwayguard.alaskaa.in/",
          },
          {
            icon: icons.linkedin,
            url: "https://www.linkedin.com/company/alaska-app-studios-pvt-ltd",
          },
        ],
        tech: [
          skills.nextjs,
          skills.reactjs,
          skills.tailwindcss,
          skills.firebase,
        ],
        logo: "/logos/alaska-logo.png",
      },
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
      title: "Tiffinz",
      subtitle: "Tiffin Service Management Web App",
      // Simply list the skills here. The frontend will receive the full object (name, icon, color).
      tech: [
        skills.nextjs,
        skills.reactjs,
        skills.tailwindcss,
        skills.mongodb,
        skills.rbac,
      ],
      period: "May 2025 - Present",
      isFeatured: true,
      description:
        "Full-stack meal tracking system implemented with user-facing features including daily tiffin status, wallet balance tracking, and detailed transaction history.",
      points: [
        "Developing an admin panel to verify manual payments and approve wallet top-ups.",
        "Integrating role-based access control (RBAC) for both users and admins.",
      ],
      links: {
        source: "https://github.com/sonu-shivcharan/tiffinz",
        viewLive: null,
      },
    },
    {
      title: "Krishi Sahayak",
      subtitle: "AI-Powered Farmer Support",
      // Reusing skills here easily
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
      points: [
        "Implemented a RAG architecture with Google Genkit SDK, migrating from MongoDB Atlas to QdrantDB.",
        "Cleaned and ingested agricultural datasets from data.gov.in for context-aware retrieval.",
      ],
      links: {
        source: null,
        viewLive: "https://ai-farmer-mu.vercel.app",
      },
    },
    {
      title: "Vidz Backend",
      subtitle: "Video Sharing Platform API",
      tech: [skills.nodejs, skills.express, skills.mongodb, skills.cloudinary],
      period: "April 2025 - May 2025",
      isFeatured: true,
      description:
        "Scalable RESTful API backend for a video-sharing platform designed with 30+ documented endpoints.",
      points: [
        "Reduced video upload time by 60% by enabling direct uploads to Cloudinary.",
        "Implemented social features such as comments, likes, subscriptions, and user profiles.",
      ],
      links: {
        source: "https://github.com/sonu-shivcharan/vidz-backend",
        viewLive: null,
      },
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
