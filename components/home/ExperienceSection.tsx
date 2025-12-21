import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/data";

function ExperienceSection() {
  const experience = PORTFOLIO_DATA.experience;
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
      <div className="space-y-4">
        {experience.map((exp, idx) => (
          <Card key={idx} className=" inset-1">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground/80">
                    {exp.company}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">
                    {exp.type}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
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
