/** @type {import('next').NextConfig} */
const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMdx({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "placeimg.com",
      "github.com",
      "raw.githubusercontent.com",
      "images.unsplash.com",
    ],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
