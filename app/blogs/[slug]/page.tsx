import type { Metadata } from "next";
import { getAllSlugs, getPost } from "@/lib/mdx";

export const dynamicParams = false;
export const revalidate = 60;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { frontmatter } = await getPost(slug);
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

/* ---------- Page ---------- */
export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const { mdx, frontmatter } = await getPost(slug);

  return (
    <article className="prose mx-auto py-10">
      <h1>{frontmatter.title}</h1>
      {mdx}
    </article>
  );
}
