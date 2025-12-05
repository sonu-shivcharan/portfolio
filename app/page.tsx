import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Terminal,
  Database,
  Layout,
  Server,
} from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- PORTFOLIO DATA (Extracted from Component) ---
const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sonu Shivcharan", //
    role: "Full-Stack Web Developer", //
    contact: {
      email: "sonushivcharan@outlook.com", //
      phone: "+91 8010096692", //
      linkedin: "https://linkedin.com/in/sonushivcharan", //
      github: "https://github.com/sonu-shivcharan", //
      location: "Pune, Maharashtra", //
    },
    summary:
      "Full-Stack Web Developer with practical experience in building responsive, high-performance applications using Next.js, Node.js, and React.js. Skilled in developing scalable backend APIs, creating intuitive user interfaces, and integrating AI-powered features.", //
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML/CSS", "Python"], //
    frameworks: ["React.js", "Next.js", "Node.js"], //
    tools: [
      "Git/Github",
      "Docker",
      "Google Cloud Platform",
      "Postman",
      "MongoDB Atlas",
      "QdrantDB",
    ], //
  },
  experience: [
    {
      company: "Alaska App Studios, Pvt. Ltd.", //
      role: "Web Development Intern", //
      period: "February 2025 - May 2025", //
      type: "Remote", //
      achievements: [
        "Developed and maintained responsive web applications using React.js", //
        "Converted Figma designs into high-quality, reusable UI components", //
        "Led a team of developers, ensuring smooth workflow and maintaining code quality", //
      ],
    },
  ],
  projects: [
    {
      title: "Tiffinz", //
      subtitle: "Tiffin Service Management Web App", //
      tech: ["Next.js", "MongoDB Atlas", "RBAC"], //
      period: "May 2025 - Present", //
      description:
        "Full-stack meal tracking system implemented with user-facing features including daily tiffin status, wallet balance tracking, and detailed transaction history.", //
      points: [
        "Developing an admin panel to verify manual payments and approve wallet top-ups.", //
        "Integrating role-based access control (RBAC) for both users and admins.", //
      ],
    },
    {
      title: "Krishi Sahayak", //
      subtitle: "AI-Powered Farmer Support",
      tech: ["Next.js", "Genkit", "RAG", "QdrantDB", "Gemini LLM"], //
      period: "September 2025 - October 2025", //
      description:
        "AI chatbot prototype helping farmers receive instant support via text, voice, and image queries using Gemini LLM.", //
      points: [
        "Implemented a RAG architecture with Google Genkit SDK, migrating from MongoDB Atlas to QdrantDB.", //
        "Cleaned and ingested agricultural datasets from data.gov.in for context-aware retrieval.", //
      ],
    },
    {
      title: "Vidz Backend", //
      subtitle: "Video Sharing Platform API",
      tech: ["Node.js", "Express", "MongoDB", "Cloudinary"], //
      period: "April 2025 - May 2025", //
      description:
        "Scalable RESTful API backend for a video-sharing platform designed with 30+ documented endpoints.", //
      points: [
        "Reduced video upload time by 60% by enabling direct uploads to Cloudinary.", //
        "Implemented social features such as comments, likes, subscriptions, and user profiles.", //
      ],
    },
  ],
  education: [
    {
      institution: "Dr. DY Patil Arts, Commerce and Science College", //
      degree: "Bachelor of Computer Applications", //
      period: "July 2023 - June 2026", //
      location: "Pune, Maharashtra", //
    },
  ],
};

const Portfolio = () => {
  const { personalInfo, skills, experience, projects, education } =
    PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="">
              <Avatar className="w-24 h-24">
                <AvatarImage src="XX" alt="Sonu Shivcharan" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mt-2">
                {personalInfo.role}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href={`mailto:${personalInfo.contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex items-center text-sm text-muted-foreground pt-2">
              <MapPin className="mr-1 h-4 w-4" />{" "}
              {personalInfo.contact.location}
            </div>
          </div>
        </section>

        <Separator />

        {/* SKILLS SECTION */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" /> Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layout className="h-5 w-5 text-primary" /> Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" /> Tools & DB
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className={`flex flex-col ${idx === 0 ? "md:col-span-2" : ""}`}
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
                <CardContent className="flex-grow space-y-4">
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
              <Card key={idx}>
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
                        className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">Education</h3>
          <div className="grid gap-4">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 border-none shadow-sm"
              >
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                      <Database className="h-6 w-6 text-primary" />
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

        {/* FOOTER */}
        <footer className="py-8 text-center text-sm text-muted-foreground border-t">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
