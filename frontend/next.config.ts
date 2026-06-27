import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  distDir: ".next-detailflow",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
