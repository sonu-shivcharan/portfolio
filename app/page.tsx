import ProjectSection from "@/components/home/ProjectSection";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import EducationSection from "@/components/home/EducationSection";
import GithubActivity from "@/components/home/GithubActivity";
import AboutSection from "@/components/home/AboutSection";
import SpotifyStatusCard from "@/components/spotify-status-card";
function MainPage() {
  return (
    <>
      <HeroSection />
      <SpotifyStatusCard />
      <ExperienceSection />
      <ProjectSection />
      <GithubActivity />
      <AboutSection />
      <EducationSection />
    </>
  );
}

export default MainPage;
