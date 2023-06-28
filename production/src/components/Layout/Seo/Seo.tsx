import { iSeo } from "@default/src/ts/interfaces";
import Head from "next/head";

export const Seo = ({
	metaTitle,
	metaDescription,
	openGraphTitle,
	openGraphDescription,
	image,
	canonical,
	robots = "index follow",
	website,
	siteName = "RadWEB",
	articleSection,
	modifiedTime,
	publishedTime,
	schema,
	type = "website",
}: iSeo) => {
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription} />
				<meta property="og:title" content={openGraphTitle} />
				<meta property="og:description" content={openGraphDescription} />
				<meta property="og:url" content={website} />
				<meta property="og:image" content={image} />
				<meta property="og:type" content={type} />
				<meta property="og:article:section" content={articleSection} />
				<meta name="date" content={publishedTime} />
				<meta name="lastmod" content={modifiedTime} />
				<meta property="article:published_time" content={publishedTime} />
				<meta property="article:modified_time" content={modifiedTime} />
				<link rel="canonical" href={canonical} />
				<meta name="robots" content={robots} />
				{schema &&
					schema.map((item, index) => (
						<script key={index} type="application/ld+json">
							{JSON.stringify(item)}
						</script>
					))}
			</Head>
		</>
	);
};
