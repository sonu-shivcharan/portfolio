import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PORTFOLIO_DATA } from "@/data/data";
import { icons } from "@/lib/icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import React from "react";
import { Calendar, FileTextIcon } from "lucide-react";
import { AnalyticsLink } from "../analytics/AnalyticsLink";

function HeroSection() {
  const personalInfo = PORTFOLIO_DATA.personalInfo;
  const contacts = personalInfo.contact;
  return (
    <section className="relative">
      <div className="">
        <div className="space-y-4 flex flex-col md:flex-row gap-4 pt-4 ">
          <Avatar className="w-28 h-28 my-6 grayscale-100 hover:grayscale-0 duration-200">
            <AvatarImage
              src={personalInfo.image}
              alt="Sonu Shivcharan"
            ></AvatarImage>
            <AvatarFallback className="text-4xl font-bold">S</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-2">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Hi, I&apos;m Sonu Shivcharan
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mt-2">
              <span className="text-accent-foreground p-1 border mesh-gradient">
                {personalInfo.role}
              </span>
            </h2>
          </div>

          <TechSentence
            techStack={["nextjs", "reactjs", "typescript", "mongodb", "nodejs"]}
          />
        </div>

        <div className="pt-8 flex flex-wrap gap-3">
          <AnalyticsLink
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            action="download_resume"
            label="Resume PDF"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
          >
            <FileTextIcon /> Resume
          </AnalyticsLink>

          <AnalyticsLink
            href={personalInfo.cal}
            target="_blank"
            rel="noopener noreferrer"
            action="schedule_call"
            label="Meeting on Cal"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
          >
            <Calendar className="mr-2" />
            Schedule a Call
          </AnalyticsLink>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          {contacts.map((contact) => (
            <Tooltip key={contact.link}>
              <TooltipContent>
                <p>{contact.name}</p>
              </TooltipContent>
              <TooltipTrigger>
                <AnalyticsLink
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  action={`click_contact`}
                  label={`Contact link - ${contact.name}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9"
                >
                  <contact.icon className="h-4 w-4" />
                </AnalyticsLink>
              </TooltipTrigger>
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground pt-2">
          <icons.location className="mr-1 h-4 w-4" /> {personalInfo.location}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

const TECH_META = {
  nextjs: { label: "Next.js", className: "" },
  reactjs: { label: "React.js", className: "text-sky-500" },
  typescript: { label: "TypeScript", className: "text-sky-500" },
  nodejs: { label: "Node.js", className: "text-green-600" },
  mongodb: { label: "MongoDB", className: "text-green-600" },
} as const;

type TechKey = keyof typeof TECH_META;

export function TechSentence({ techStack }: { techStack?: TechKey[] }) {
  if (!techStack?.length) return null;

  return (
    <p className="text-muted-foreground md:text-lg ">
      I build modern and scalable web applications using
      <span className="inline p-1 font-medium text-foreground">
        {techStack.map((tech, index) => {
          const Icon = icons[tech];
          const { label, className } = TECH_META[tech];

          return (
            <React.Fragment key={label}>
              <span
                key={tech}
                className="inline-flex text-sm  items-center px-2 mt-1 gap-1 border mx-1 rounded-xl"
              >
                <Icon className={`h-4 w-4 ${className ?? ""}`} />
                {label}
              </span>
              {index < techStack.length - 2 && ","}
              {index === techStack.length - 2 && "and"}
            </React.Fragment>
          );
        })}
      </span>
      . I craft smooth user experiences, build reliable APIs, and explore AI
      integrations. Actively learning advanced backend concepts.
    </p>
  );
}
