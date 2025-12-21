import {
  SiEducative,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiJavascript,
  SiPostman,
  SiExpress,
  SiCloudinary,
  SiFirebase,
  SiGooglegemini,
  SiReaddotcv,
} from "react-icons/si";
import {
  FaLinkedin,
  FaPaperPlane,
  FaXTwitter,
  FaEnvelope,
  FaGraduationCap,
  FaRobot,
} from "react-icons/fa6";
import { Database, MapPin } from "lucide-react"; // Assuming lucide for MapPin
import { MdAdminPanelSettings } from "react-icons/md";

export const icons = {
  // Existing
  educative: SiEducative,
  git: SiGit,
  github: SiGithub,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  reactjs: SiReact,
  mongodb: SiMongodb,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  vercel: SiVercel,
  javascript: SiJavascript,
  postman: SiPostman,

  // Socials / UI
  linkedin: FaLinkedin,
  contact: FaPaperPlane,
  xtwitter: FaXTwitter,
  envelope: FaEnvelope,
  resume: SiReaddotcv,
  location: MapPin,
  graduation: FaGraduationCap,

  // NEW ADDITIONS FOR PROJECTS
  express: SiExpress,
  cloudinary: SiCloudinary,
  googleGemini: SiGooglegemini, // Using Google Cloud as proxy or find specific
  qdrant: null,
  firebase: SiFirebase, // Good generic backend icon
  ai: FaRobot, // For Generic AI/Genkit/RAG
  admin: MdAdminPanelSettings, // For "RBAC" or generic concepts
  database: Database,
};
