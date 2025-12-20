// lib/mdx.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

const BLOGS_PATH = path.join(process.cwd(), "blogs");

export function getAllSlugs() {
  return fs
    .readdirSync(BLOGS_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string) {
  try {
    const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
    console.log("Reading MDX:", filePath);

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    const mdx = <MDXRemote source={content} components={mdxComponents} />;

    return { mdx, frontmatter: data };
  } catch (err) {
    console.error("MDX ERROR:", err);
    throw err;
  }
}
