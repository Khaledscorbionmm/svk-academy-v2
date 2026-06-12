import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const buildId = isProd 
  ? (process.env.VERCEL_GIT_COMMIT_SHA || `build-${Date.now()}`)
  : 'development';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  generateBuildId: async () => {
    return buildId;
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: buildId,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://www.smartvenomk.xyz',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "5487ede9a335f50c980b739873f612dde2d7010b78ce6793bf3c2dfbfa696136",
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
