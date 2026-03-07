import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/data/data";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import "@/app/timeline.css";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceItem } from "./ExperienceItem";
// import { TechStack } from "../projects/ProjectCard";
function ExperienceSection() {
  const experience = PORTFOLIO_DATA.experience;
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
      <div className="space-y-2">
        {experience.map((exp, idx) => (
          <Card
            key={idx}
            className="inset-1 bg-transparent border-none shadow-none p-0 px-0 mx-0 gap-2 "
          >
            <CardHeader className="px-2 py-0 mb-0 pb-0 grid grid-cols-[auto_1fr] items-center gap-2">
              <Avatar className="rounded-lg shadow">
                <AvatarImage src={exp.company.logo}></AvatarImage>
              </Avatar>

              <CardTitle className="text-[16px] flex flex-wrap items-center">
                {exp.company.name}

                {exp.company.links?.map((link) => {
                  return (
                    <Link href={link.url} target="_blank" key={link.url}>
                      <link.icon className="h-4 w-4 ml-2 text-muted-foreground" />
                    </Link>
                  );
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-0 px-2">
              {exp.timeline.length > 1 ? (
                <ExperienceTimeline
                  timeline={exp.timeline}
                  companyName={exp.company.name}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
                  <ExperienceItem
                    role={exp.timeline[0].role}
                    period={exp.timeline[0].period}
                    type={exp.timeline[0].type}
                    achievements={exp.timeline[0].achievements}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

/*
  | role               timeline
  | --- 
  | ---
  |
  |
  |
  |
*/
