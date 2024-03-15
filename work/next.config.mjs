/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "multi.rad-web-cms.pl",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
