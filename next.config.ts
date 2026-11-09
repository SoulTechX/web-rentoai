import type { NextConfig } from "next";

const isStandalone = process.env.OUTPUT_MODE === "standalone";

const nextConfig: NextConfig = {
  output: isStandalone ? "standalone" : "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
