import { PORTFOLIO_DATA } from "@/lib/data";
import ProjectCard from "../projects/ProjectCard";

function ProjectSection() {
  const projects = PORTFOLIO_DATA.projects;
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-collapse">
        {projects
          .filter((project) => project.isFeatured)
          .map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
      </div>
    </section>
  );
}

export default ProjectSection;
