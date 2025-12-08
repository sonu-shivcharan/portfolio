import React from "react";
import { ArrowUpRightIcon } from "lucide-react";

// Assumes standard shadcn/ui folder structure
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Footer from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/lib/data";

import Link from "next/link";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const { personalInfo, experience, projects, education } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen text-foreground font-sans p-4 md:p-8">
      <div className="max-w-3xl mx-auto p-2 md:px-4 space-y-12 relative">
        {/* HERO SECTION */}

        <section className="relative">
          <div className="">
            <div className="space-y-4 flex flex-col md:flex-row gap-4 pt-10 ">
              <Avatar className="w-28 h-28 my-6">
                <AvatarImage
                  src={personalInfo.image}
                  alt="Sonu Shivcharan"
                ></AvatarImage>
                <AvatarFallback className="text-4xl font-bold">
                  S
                </AvatarFallback>
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

              <p className="text-[18px] leading-8 text-muted-foreground mt-6">
                I build modern, fast, and scalable web applications using
                <Badge className=" backdrop-blur-sm" variant={"outline"}>
                  <icons.nextjs />
                  Next.js
                </Badge>
                ,
                <Badge className="mx-1 backdrop-blur-sm" variant={"outline"}>
                  <icons.reactjs className="text-sky-500" />
                  React.js
                </Badge>
                ,
                <Badge className="" variant={"outline"}>
                  <icons.typescript className="text-sky-500"></icons.typescript>
                  TypeScript
                </Badge>
                ,
                <Badge className="mx-1 backdrop-blur-sm" variant={"outline"}>
                  <icons.nodejs className="text-green-600" />
                  Node.js
                </Badge>
                and
                <Badge className="mx-1 backdrop-blur-sm" variant={"outline"}>
                  <icons.mongodb className="text-green-600" />
                  MongoDB
                </Badge>
                . I craft smooth user experiences, build reliable APIs, and
                explore AI integrations. Actively learning advanced backend
                concepts
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-3">
              <Button variant={"outline"}>
                Resume <icons.resume />
              </Button>
              <Button asChild>
                <a href={`mailto:${personalInfo.contact.email}`}>
                  <icons.contact /> Contact Me
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="outline" asChild>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <icons.github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <icons.linkedin className=" h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={personalInfo.contact.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <icons.xtwitter className=" h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={"mailto:" + personalInfo.contact.email}
                  target="_blank"
                  rel="noreferrer"
                >
                  <icons.envelope className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center text-sm text-muted-foreground pt-2">
              <icons.location className="mr-1 h-4 w-4" />{" "}
              {personalInfo.contact.location}
            </div>
          </div>
        </section>

        {/* <Separator /> */}

        {/* PROJECTS SECTION */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Featured Projects
          </h3>
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
                  <div className="flex justify-between items-start">
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
                    <Badge key={t} variant="secondary" className="font-normal">
                      {t}
                    </Badge>
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

        {/* EXPERIENCE SECTION */}
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
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
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

        {/* EDUCATION SECTION */}
        <section className=" ">
          <h3 className="text-2xl font-bold tracking-tight">Education</h3>
          <div className="grid gap-4">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className=" border-none bg-transparent shadow-none"
              >
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3">
                      <icons.graduation />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{edu.institution}</h4>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
