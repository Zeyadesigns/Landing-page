import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is for portfolio images (components/homepage/Work.tsx); 75 stays the default
    qualities: [75, 90],
  },
  async redirects() {
    // the homepage was built at /preview before it replaced "/"
    return [{ source: "/preview", destination: "/", permanent: false }];
  },
};

export default nextConfig;
