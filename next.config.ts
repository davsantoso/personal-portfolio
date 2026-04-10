import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
