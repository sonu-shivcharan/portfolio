import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { icons } from "@/lib/icons";
import { ArrowUpRightSquareIcon } from "lucide-react";
import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface Project {
  title: string;
  subtitle: string;
  tech: Skill[]; // assuming Skill is the type of each skills.* entry
  period: string;
  description: string;
  points: string[];
  isFeatured?: boolean;
  links: {
    source: string | null;
    viewLive: string | null;
  };
}
interface Skill {
  name: string;
  icon: IconType; // or ReactNode if using components
  className?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className={cn("flex flex-col rounded-xl shadow-xs")}>
      <CardHeader>
        <div className="flex justify-baseline flex-wrap md:justify-between md:flex-nowrap items-start">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-1 text-base">
              {project.subtitle}
            </CardDescription>
          </div>
        </div>
        <CardAction>
          {project.links.source && (
            <Button variant={"link"} asChild>
              <Link href={project.links.source}>
                <icons.github />
              </Link>
            </Button>
          )}
          {project.links.viewLive && (
            <Button variant={"link"} asChild>
              <Link href={project.links.viewLive}>
                <ArrowUpRightSquareIcon />
              </Link>
            </Button>
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="grow space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <ul className="space-y-2">
          {project.points.map((point, pIdx) => (
            <li
              key={pIdx}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1.5">•</span>
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-wrap gap-2 pt-2">
        {project.tech.map((t) => (
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
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
