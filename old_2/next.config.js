/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [import("remark-frontmatter")],
		providerImportSource: "@mdx-js/react",
	},
});
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"images.unsplash.com",
			"scontent-fra5-2.xx.fbcdn.net",
			"scontent-fra3-1.xx.fbcdn.net",
			"scontent-fra5-1.xx.fbcdn.net",
			"cdn.pixabay.com",
		],
	},
};

module.exports = withMDX(nextConfig);
