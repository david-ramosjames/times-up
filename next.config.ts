import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static pages for optimal performance
  output: undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      // Spanish help URLs missing the /es locale prefix → add it (301)
      {
        source: "/ayuda-agresion-sexual",
        destination: "/es/ayuda-agresion-sexual",
        permanent: true,
      },
      {
        source: "/ayuda-agresion-sexual/:slug",
        destination: "/es/ayuda-agresion-sexual/:slug",
        permanent: true,
      },
      // English help URLs that picked up an /es prefix → strip it (301)
      {
        source: "/es/sexual-assault-help",
        destination: "/sexual-assault-help",
        permanent: true,
      },
      {
        source: "/es/sexual-assault-help/:slug",
        destination: "/sexual-assault-help/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
