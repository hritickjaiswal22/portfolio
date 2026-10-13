import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // Force Turbopack to use this project folder as the root
  },
  serverExternalPackages: ["mathjax-full"], // Tell Next.js not to bundle this
};

export default nextConfig;
