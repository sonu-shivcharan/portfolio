import ProjectSection from "@/components/home/ProjectSection";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import GithubActivity from "@/components/home/GithubActivity";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Portfolio = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ThemeProvider>
        <GithubActivity />
      </ThemeProvider>
      <EducationSection />
    </>
  );
};

export default Portfolio;
