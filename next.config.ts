import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is for portfolio images (components/homepage/Work.tsx); 75 stays the default
    qualities: [75, 90],
  },
};

export default nextConfig;
