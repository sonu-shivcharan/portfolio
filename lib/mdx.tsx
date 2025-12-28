import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
type MDXOptions = {
  contentDir: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "data");

function getDirPath(contentDir: string) {
  return path.join(CONTENT_ROOT, contentDir);
}

export function getAllSlugs({ contentDir }: MDXOptions) {
  const dirPath = getDirPath(contentDir);

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getMDXBySlug(slug: string, { contentDir }: MDXOptions) {
  const filePath = path.join(getDirPath(contentDir), `${slug}.mdx`);

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    content: (
      <MDXRemote
        source={content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={mdxComponents}
      />
    ),
    frontmatter: data,
    slug,
  };
}
