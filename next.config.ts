import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development', // Désactive l'optimisation en dev
  },
  // Configuration des rewrites si nécessaire pour d'autres cas
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:lang/images/:path*',
          destination: '/images/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;