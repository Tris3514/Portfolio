import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Remove basePath and assetPrefix for local development
  // basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
};

export default nextConfig;
