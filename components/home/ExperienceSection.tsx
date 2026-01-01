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
import { TechStack } from "../projects/ProjectCard";

function ExperienceSection() {
  const experience = PORTFOLIO_DATA.experience;
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
      <div className="space-y-2">
        {experience.map((exp, idx) => (
          <Card
            key={idx}
            className="inset-1 bg-transparent border-none p-0 px-0 mx-0 gap-2 "
          >
            <CardHeader className="px-2 py-0 mb-0 pb-0 ">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                <div className="flex items-center gap-2">
                  <Avatar className="rounded-lg">
                    <AvatarImage src={exp.company.logo}></AvatarImage>
                  </Avatar>
                  <div>
                    <CardTitle className="text-[16px] flex items-center">
                      {exp.company.name}{" "}
                      {exp.company.links?.map((link) => {
                        return (
                          <Link href={link.url} target="_blank" key={link.url}>
                            <link.icon className="h-4 w-4 ml-2 text-muted-foreground" />
                          </Link>
                        );
                      })}
                    </CardTitle>
                    <CardDescription className="text-base text-[14px] font-medium text-shadow-muted-foreground">
                      {exp.role}
                    </CardDescription>
                  </div>
                </div>

                <div className="text-sm text-right text-muted-foreground">
                  <p className=" text-muted-foreground">{exp.period}</p>
                  <span>
                    {exp.company.location},{" "}
                    <Badge variant="outline" className="">
                      {exp.type}
                    </Badge>
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-0 px-2">
              <TechStack tech={exp.company.tech} />
              <ul className="">
                {exp.achievements.map((achievement, aIdx) => (
                  <li
                    key={aIdx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full mt-2 bg-amber-50" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
