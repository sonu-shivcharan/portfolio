import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExperienceTimeline as Timeline, PORTFOLIO_DATA } from "@/data/data";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

import { ExperienceItem } from "./ExperienceItem";
import { ExperienceTimeline } from "./ExperienceTimeline";
// import { TechStack } from "../projects/ProjectCard";
function ExperienceSection() {
  const experience = PORTFOLIO_DATA.experience;
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold tracking-tight">Experience</h3>
      <div className="space-y-4">
        {experience.map((exp, idx) => (
          <Card key={idx} className="shadow-xs px-1 pt-4 pb-2 mx-0 gap-2 ">
            <CardHeader className="px-4 mb-0 grid grid-cols-[auto_1fr] items-center gap-2">
              <Avatar className="rounded-lg shadow">
                <AvatarImage src={exp.company.logo}></AvatarImage>
              </Avatar>

              <CardTitle className="text-[16px] flex flex-wrap items-center">
                {exp.company.name}

                {exp.company.links?.map((link) => {
                  return (
                    <Link href={link.url} target="_blank" key={link.url}>
                      {link.icon && (
                        <link.icon className="h-4 w-4 ml-2 text-muted-foreground" />
                      )}
                    </Link>
                  );
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-0 mb-0 px-1">
              <ExperienceDetails
                timeline={exp.timeline}
                companyName={exp.company.name}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

type ExperienceDetailsProps = {
  timeline: Timeline[];
  companyName: string;
};
function ExperienceDetails({ timeline, companyName }: ExperienceDetailsProps) {
  if (timeline.length > 1) {
    return <ExperienceTimeline timeline={timeline} companyName={companyName} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center">
      <ExperienceItem
        role={timeline[0].role}
        period={timeline[0].period}
        type={timeline[0].type}
        achievements={timeline[0].achievements}
      />
    </div>
  );
}

/*
  | role               timeline
  | --- 
  | ---
  |
  |
  |
  |
*/
