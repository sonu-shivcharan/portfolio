import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/lib/data";
import { icons } from "@/lib/icons";

function EducationSection() {
  const education = PORTFOLIO_DATA.education;
  return (
    <section>
      <h3 className="text-2xl font-bold tracking-tight">Education</h3>
      <div className="grid gap-4">
        {education.map((edu, idx) => (
          <Card key={idx} className=" border-none bg-transparent shadow-none">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2">
                  <icons.graduation />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{edu.institution}</h4>
                  <p className="text-primary font-medium">{edu.degree}</p>
                </div>
              </div>
              <div className="">
                <p className="font-semibold">{edu.period}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
