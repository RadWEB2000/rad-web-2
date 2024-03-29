/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "multi.rad-web-cms.pl",
          protocol: "http",
        },
        {
          hostname: "images.unsplash.com",
        },
      ],
    },
  };
  

export default nextConfig;
