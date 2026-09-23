import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed for Docker / Dokploy standalone image
  output: "standalone",
};

export default nextConfig;
