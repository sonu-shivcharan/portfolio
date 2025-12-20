import type { NextConfig } from "next";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Add other Next.js config here
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
