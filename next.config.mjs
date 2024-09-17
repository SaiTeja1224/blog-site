/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/portfolio",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
