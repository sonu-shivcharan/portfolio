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
import { Project } from "@/lib/projects";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  const slug = project.title.split(" ").join("-").toLowerCase();
  return (
    <Card className={cn("flex flex-col rounded-2xl shadow-xs overflow-clip")}>
      <div className="-mt-6">
        <Image
          className=""
          src={project.img}
          width={400}
          height={250}
          alt={project.title}
        ></Image>
      </div>
      <CardHeader className="">
        <div className="flex justify-baseline flex-wrap md:justify-between md:flex-nowrap items-start">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="mt-1 text-base">
              {project.subtitle}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className=" py-0">
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

        <p className="text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex-wrap justify-between gap-2 pt-2">
        <div>
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
        </div>
        <div>
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
