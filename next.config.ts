import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const buildId = isProd 
  ? (process.env.VERCEL_GIT_COMMIT_SHA || `build-${Date.now()}`)
  : 'development';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  generateBuildId: async () => {
    return buildId;
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: buildId,
  },
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
