import type { Metadata } from "next";
import { getAllSlugs, getMDXBySlug } from "@/lib/mdx";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <a href={frontmatter.live} target="_blank" rel="noreferrer">
            View Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={frontmatter.github} target="_blank" rel="noreferrer">
            View GitHub Repo
          </a>
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
