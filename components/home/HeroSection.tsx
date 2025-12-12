import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { icons } from "@/lib/icons";
import Link from "next/link";
import { IconType } from "react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function HeroSection() {
  const personalInfo = PORTFOLIO_DATA.personalInfo;
  const contacts = personalInfo.contact;
  return (
    <section className="relative">
      <div className="">
        <div className="space-y-4 flex flex-col md:flex-row gap-4 pt-4 ">
          <Avatar className="w-28 h-28 my-6">
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

          <p className="text-[18px] leading-8 text-muted-foreground mt-6">
            I build modern and scalable web applications using
            <Badge className=" backdrop-blur-sm" variant={"outline"}>
              <icons.nextjs className="h-8 w-8" />
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
            . I craft smooth user experiences, build reliable APIs, and explore
            AI integrations. Actively learning advanced backend concepts
          </p>
        </div>

        <div className="pt-8 flex flex-wrap gap-3">
          <Button variant={"outline"}>
            Resume <icons.resume />
          </Button>
          <Button asChild>
            <Link href={"#"}>
              <icons.contact /> Contact Me
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          {contacts.map((contact) => (
            <Tooltip key={contact.link}>
              <TooltipContent>
                <p>{contact.name}</p>
              </TooltipContent>
              <TooltipTrigger>
                <Button key={contact.link} variant="outline" asChild>
                  <Link href={contact.link} target="_blank" rel="noreferrer">
                    <contact.icon className="h-4 w-4" />
                  </Link>
                </Button>
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
