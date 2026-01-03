import ProjectSection from "@/components/home/ProjectSection";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import GithubActivity from "@/components/home/GithubActivity";
import SpotifyStatusCard from "@/components/spotify-status-card";

const Portfolio = () => {
  return (
    <>
      <HeroSection />
      <SpotifyStatusCard />
      <ExperienceSection />
      <ProjectSection />
      <GithubActivity />
      <EducationSection />
    </>
  );
};

export default Portfolio;
