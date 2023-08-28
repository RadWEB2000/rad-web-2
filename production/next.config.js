/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		WP_WEBHOOK_TOKEN: process.env.WP_WEBHOOK_TOKEN,
		WP_GRAPHQL_URL: process.env.WP_API_KEY,
	},
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["images.unsplash.com", "rad-web-cms.pl"],
	},
};

module.exports = nextConfig;
