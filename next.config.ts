import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: `${process.env.NEXT_PUBLIC_HOSTNAME}`,
      //   pathname: '/assets/**',
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4040',
        pathname: '/assets/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
