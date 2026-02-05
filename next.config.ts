import type { NextConfig } from "next";
// @ts-ignore
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  // Provide an empty turbopack config so Next.js doesn't warn when plugins
  // add webpack customizations. An empty object is a safe no-op.
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

const isProd = process.env.NODE_ENV === 'production';

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Disable next-pwa in non-production (dev/watch) to avoid Workbox warnings
  // about GenerateSW being called multiple times while webpack runs in watch
  // mode. This keeps the dev server stable; PWA will be active in production builds.
  disable: !isProd,
})(nextConfig);
