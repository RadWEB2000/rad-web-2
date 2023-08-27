/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["images.unsplash.com", "rad-web-cms.pl"],
	},
};

module.exports = nextConfig;
