const SitemapGenerator = require("next-sitemap").default;

// Zdefiniuj ustawienia sitemap
const Sitemap = new SitemapGenerator("https://rad-web.vercel.app", {});

Sitemap.generate("./public/sitemap.xml");
