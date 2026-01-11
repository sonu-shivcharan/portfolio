import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PORTFOLIO_DATA } from "@/data/data";
import { AnalyticsLink } from "../analytics/AnalyticsLink";
import { TechStack } from "../projects/ProjectCard";

function AboutSection() {
  const { personalInfo, skills } = PORTFOLIO_DATA;
  const twitter = personalInfo.contact.find((c) => c.name === "Twitter");

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">About</h2>

      <Card className="my-4">
        <CardHeader>
          <div className="flex flex-col justify-center md:justify-normal md:flex-row md:items-center gap-4 rounded-2xl">
            <Avatar className="w-28 h-28 grayscale-100 hover:grayscale-0 duration-200">
              <AvatarImage
                src={personalInfo.image}
                alt={personalInfo.name}
              ></AvatarImage>
              <AvatarFallback className="text-4xl font-bold">S</AvatarFallback>
            </Avatar>
            <div className="">
              <AnalyticsLink
                href={twitter?.link as string}
                target="_blank"
                rel="noopener noreferrer"
                action="click_contact"
                label="twitter from about section"
              >
                <p className="text-sm text-muted-foreground">@SonuShivcharan</p>
              </AnalyticsLink>
              <CardTitle className="text-2xl">{personalInfo.name}</CardTitle>
              <CardDescription>{personalInfo.role}</CardDescription>
            </div>
          </div>

          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <CardContent>
          <CardDescription>{personalInfo.summary}</CardDescription>
          <TechStack
            title="Tools & Technologies"
            className="mt-2 text-foreground"
            iconsStyles="w-8 h-8"
            tech={skills}
          />
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
