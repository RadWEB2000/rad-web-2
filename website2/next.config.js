/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"images.unsplash.com",
			"scontent-frt3-2.xx.fbcdn.net",
			"scontent-frt3-1.xx.fbcdn.net",
			"cloudflare-ipfs.com",
		],
	},
};

module.exports = nextConfig;
