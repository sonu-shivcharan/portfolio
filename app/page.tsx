import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/lib/data";
import { icons } from "@/lib/icons";
import ProjectSection from "@/components/home/ProjectSection";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";

const Portfolio = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );
};

export default Portfolio;
