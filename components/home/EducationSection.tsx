import { Card, CardContent } from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/data/data";

function EducationSection() {
  const education = PORTFOLIO_DATA.education;
  return (
    <section>
      <h3 className="text-2xl font-semibold tracking-tight">Education</h3>
      <div className="grid gap-4">
        {education.map((edu, idx) => (
          <Card key={idx} className="border py-4 mt-4 px-2 bg-transparent">
            <CardContent className="grid md:grid-cols-[1fr_auto] px-4">
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-sm">{edu.institution}</h4>
                  <p className="text-muted-foreground text-xs font-medium">
                    {edu.degree}
                  </p>
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-xs text-muted-foreground ">{edu.period}</p>
                <p className="md:text-right text-muted-foreground text-xs">
                  {edu.location}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
