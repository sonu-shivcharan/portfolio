import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/data";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import "@/app/timeline.css";
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
              {exp.timeline.reverse().map((t, i) => (
                <div
                  className="timeline-container"
                  key={(exp.company + t.role, +i)}
                >
                  <div className="timeline-item grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center">
                    <div className="w-8 mr-2 timeline-dot h-full row-span-2 ">
                      <div className="w-2 h-2 bg-accent-foreground mx-auto rounded-full translate-y-3" />
                    </div>
                    <div className="role">
                      {t.role}
                      <div className="md:hidden flex flex-wrap gap-2 items-center">
                        <p className="text-xs">{t.period}</p>
                        <Badge variant={"outline"}>{t.type}</Badge>
                      </div>
                    </div>
                    <div className="md:flex flex-col items-end hidden">
                      <p className="text-xs">{t.period}</p>
                      <Badge variant={"outline"}>{t.type}</Badge>
                    </div>

                    <div className="mt-2 mb-4 md:col-span-2">
                      <ul className="space-y-1">
                        {t.achievements.map((line) => (
                          <li
                            className="text-xs text-muted-foreground "
                            key={line}
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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
