import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable next/video and image optimization
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "commondatastorage.googleapis.com" },
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
