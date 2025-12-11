import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { icons } from "@/lib/icons";
import { ArrowUpRightIcon } from "lucide-react";
import { Activity } from "react";

function ProjectsPage() {
  const { projects } = PORTFOLIO_DATA;
  return (
    <section className="space-y-6 pt-10">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-collapse">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className={cn(
              "flex flex-col rounded-xl",
              idx === 0 ? "md:col-span-2" : ""
            )}
          >
            <CardHeader>
              <div className="flex justify-baseline flex-wrap md:justify-between md:flex-nowrap items-start">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-1 text-base">
                    {project.subtitle}
                  </CardDescription>
                </div>
                <Badge variant="outline">{project.period}</Badge>
              </div>
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
                  variant="secondary"
                  className="font-normal"
                ></Badge>
              ))}
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
                    <ArrowUpRightIcon />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
