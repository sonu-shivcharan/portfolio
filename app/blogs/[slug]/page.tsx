import type { Metadata } from "next";
import { getAllSlugs, getMDXBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllSlugs({ contentDir: "blogs" }).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { frontmatter } = await getMDXBySlug(slug, { contentDir: "blogs" });
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

  const { content: mdx, frontmatter } = await getMDXBySlug(slug, {
    contentDir: "blogs",
  });

  return (
    <article className="prose mx-auto py-10">
      <h1>{frontmatter.title}</h1>
      {mdx}
    </article>
  );
}
