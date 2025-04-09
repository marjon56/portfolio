import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      // Allow images from all domains
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
