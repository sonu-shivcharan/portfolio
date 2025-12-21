import { projects } from "@/data/projects/projects";
import ProjectCard from "../projects/ProjectCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function ProjectSection() {
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
      <div className="flex justify-center">
        <Button variant={"outline"} className="mx-auto">
          View All Projects
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}

export default ProjectSection;
