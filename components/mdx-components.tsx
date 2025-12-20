// components/mdx-components.tsx
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <Link href={href ?? ""} className="text-primary underline">
      {children}
    </Link>
  ),
  h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
};
