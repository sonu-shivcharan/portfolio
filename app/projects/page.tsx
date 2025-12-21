import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects/projects";

function ProjectsPage() {
  return (
    <section className="space-y-6 pt-10">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-collapse">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
