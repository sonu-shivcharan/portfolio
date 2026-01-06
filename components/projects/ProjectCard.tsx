import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { icons } from "@/lib/icons";
import { ArrowRight, ArrowUpRightSquareIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project, ProjectStatus, Skill } from "@/data/projects/projects";
import Image from "next/image";
import { AnalyticsLink } from "../analytics/AnalyticsLink";

function ProjectCard({ project }: { project: Project }) {
  const slug = project.title.split(" ").join("-").toLowerCase();
  return (
    <Card
      className={cn(
        "flex flex-col gap-2 justify-between rounded-2xl shadow-xs overflow-clip"
      )}
    >
      <div className="-mt-6">
        <Image
          className="w-full"
          src={project.img}
          width={400}
          height={250}
          alt={project.title}
        ></Image>
      </div>
      <CardHeader className="my-0 mb-0">
        <div>
          <CardTitle className="text-xl flex items-center justify-between w-full">
            {project.title}
            <ProjectLinks links={project.links} projectTitle={project.title} />
          </CardTitle>
          <CardDescription className="mt-1 text-base">
            {project.subtitle}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className=" py-0 ">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="block justify-between gap-2">
        <TechStack tech={project.tech} />
        <div className="flex justify-between items-center">
          <ProjectStatusBadge status={project.status} />
          <Button variant={"outline"} asChild>
            <Link
              href={`/projects/${slug}`}
              className="flex items-center gap-2"
            >
              View Details <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;

export function TechStack({
  tech,
  title = "Technologies",
  className = "",
}: {
  tech: Skill[];
  title?: string;
  className?: string;
}) {
  return (
    <div className="w-full mb-2">
      <h4
        className={cn(
          "text-sm text-muted-foreground mb-2 font-medium",
          className
        )}
      >
        {title}
      </h4>
      <div className="space-x-2">
        {tech.map((t) => (
          <Badge
            key={t.name}
            variant={"outline"}
            className="rounded-full bg-transparent w-8 h-8 p-1 flex items-center justify-center"
            asChild
          >
            <Tooltip>
              <TooltipContent>
                <p>{t.name}</p>
              </TooltipContent>
              <TooltipTrigger>
                <t.icon className={`w-6 h-6 mr-1 ${t.className}`} />
              </TooltipTrigger>
            </Tooltip>
          </Badge>
        ))}
      </div>
    </div>
  );
}
const STATUS_STYLES: Record<ProjectStatus, string> = {
  building:
    "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  working:
    "border-green-500/40 bg-green-500/10 text-green-600 dark:text-green-400",
  limited: "border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "not working":
    "border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400",
};

export function ProjectStatusBadge({
  status,
}: {
  status: [ProjectStatus, string];
}) {
  const [type, label] = status;

  return (
    <Badge
      variant="outline"
      className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[type]}`}
    >
      {label}
    </Badge>
  );
}
function ProjectLinks({
  links,
  projectTitle,
}: {
  links: { source: string | null; viewLive: string | null };
  projectTitle: string;
}) {
  return (
    <div>
      {links.source && (
        <AnalyticsLink
          href={links.source}
          target="_blank"
          rel="noopener noreferrer"
          action="click_source_code"
          label={`GitHub Source - ${projectTitle}`}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-primary underline-offset-4 hover:underline size-9"
        >
          <icons.github />
        </AnalyticsLink>
      )}

      {links.viewLive && (
        <AnalyticsLink
          href={links.viewLive}
          target="_blank"
          rel="noopener noreferrer"
          action="click_live_demo"
          label={`Live Project - ${projectTitle}`}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-primary underline-offset-4 hover:underline size-9"
        >
          <ArrowUpRightSquareIcon />
        </AnalyticsLink>
      )}
    </div>
  );
}
