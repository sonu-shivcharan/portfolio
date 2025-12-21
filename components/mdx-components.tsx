import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Button } from "./ui/button";

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href ?? ""} className="text-primary underline">
      {children}
    </Link>
  ),
  h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props) => (
    <h2
      className="text-2xl font-semibold mt-10 mb-4 border-b pb-2"
      {...props}
    />
  ),
  h3: (props) => <h3 className="text-xl font-semibold mt-6 mb-2" {...props} />,
  p: (props) => <p className="mb-4 leading-7" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
      {...props}
    />
  ),
  Button,
};
