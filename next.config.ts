import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Add 'mdx' to the pageExtensions array
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
};

const withMDX = createMDX({
  // Add any remark/rehype plugins here if needed
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
