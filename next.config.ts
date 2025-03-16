import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsHmrCache: true,
    optimisticClientCache: true,
  },
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280, 1440, 1600, 1920],
    formats: ["image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  trailingSlash: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      }
    }
    return config
  },
}

export default nextConfig
