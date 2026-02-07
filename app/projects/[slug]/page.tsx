import type { Metadata } from "next";
import { getAllSlugs, getMDXBySlug } from "@/lib/mdx";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnalyticsLink } from "@/components/analytics/AnalyticsLink";

export async function generateStaticParams() {
  return getAllSlugs({ contentDir: "projects" }).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { frontmatter } = await getMDXBySlug(slug, {
      contentDir: "projects",
    });
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}

export default async function ProjectDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const { content: mdx, frontmatter } = await getMDXBySlug(slug, {
    contentDir: "projects",
  });
  const techStack = frontmatter.techStack;
  // console.log("frontmatter", techStack);
  return (
    <article className="prose mx-auto py-10">
      <div className="rounded-lg overflow-hidden mb-4 mx-auto w-full min-h-80 relative">
        <Image
          src={frontmatter.image}
          fill
          alt={frontmatter.title}
          className="object-cover object-top"
        />
      </div>

      <div className="my-4 space-x-2">
        <Button variant="default" asChild>
          <AnalyticsLink
            href={frontmatter.live}
            target="_blank"
            rel="noreferrer"
            action="project_live_demo_click"
            label={frontmatter.title}
          >
            View Live Demo
          </AnalyticsLink>
        </Button>
        <Button variant="outline" asChild>
          <AnalyticsLink
            href={frontmatter.github}
            target="_blank"
            rel="noreferrer"
            action="project_github_click"
            label={frontmatter.title}
          >
            View GitHub Repo
          </AnalyticsLink>
        </Button>
      </div>
      <div>
        {techStack && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech: string) => (
                <Badge key={tech} variant={"outline"}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>{mdx}</div>
    </article>
  );
}
