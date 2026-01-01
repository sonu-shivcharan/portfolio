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
  SiRedux,
  SiAppwrite,
  SiDocker,
  SiSupabase,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaLinkedin,
  FaPaperPlane,
  FaXTwitter,
  FaEnvelope,
  FaGraduationCap,
  FaRobot,
} from "react-icons/fa6";
import { Database, Globe, MapPin } from "lucide-react"; // Assuming lucide for MapPin
import { MdAdminPanelSettings } from "react-icons/md";

export const icons = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  reactjs: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,

  //tools & services
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  vercel: SiVercel,
  postman: SiPostman,
  cloudinary: SiCloudinary,
  googleGemini: SiGooglegemini,
  qdrant: null,

  //baas
  appwrite: SiAppwrite,
  firebase: SiFirebase,
  supabase: SiSupabase,

  // Socials / UI
  linkedin: FaLinkedin,
  educative: SiEducative,
  contact: FaPaperPlane,
  xtwitter: FaXTwitter,
  envelope: FaEnvelope,
  resume: SiReaddotcv,
  location: MapPin,
  graduation: FaGraduationCap,
  website: Globe,
  ai: FaRobot,
  admin: MdAdminPanelSettings,
  database: Database,
};
