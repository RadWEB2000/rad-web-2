/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [import("remark-frontmatter")],
		providerImportSource: "@mdx-js/react",
	},
});
const nextConfig = {
	i18n: {
		locales: ["pl", "en", "es", "de", "it", "ne", "fr"],
		defaultLocale: "pl",
	},
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	swcMinify: true,
	images: {
		domains: [
			"cdn.pixabay.com",
			"images.unsplash.com",
			"scontent-frt3-2.xx.fbcdn.net",
			"scontent-frt3-1.xx.fbcdn.net",
			"cloudflare-ipfs.com",
			"scontent-frx5-1.xx.fbcdn.net",
			"scontent-fra5-2.xx.fbcdn.net",
			"rad-web-cms.pl",
		],
	},
};

module.exports = withMDX(nextConfig);
