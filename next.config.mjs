/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  // distDir: "build",
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };

export default nextConfig;
