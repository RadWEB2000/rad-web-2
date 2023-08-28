import Content from "@default/components/Page/PostPage/Content/Content";
import Hero from "@default/components/Page/ProjectPage/Hero/Hero";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import { Metadata } from "next";

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				project(id: "${slug}", idType: SLUG) {
					seo {
						opengraphTitle
						opengraphSiteName
						opengraphType
						metaDesc
						opengraphDescription
						title
					}
					modified
					date
				}
			}
			`,
			revalidate: 10,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const {
		seo: {
			opengraphTitle,
			opengraphSiteName,
			opengraphType,
			metaDesc,
			opengraphDescription,
			title,
		},
		modified,
		date,
	} = seo.data.project;
	return {
		applicationName: opengraphSiteName,
		description: metaDesc,
		title: title,
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			description: opengraphDescription,
			title: opengraphTitle,
			type: opengraphType,
			siteName: opengraphSiteName,
			modifiedTime: modified,
			publishedTime: date,
			locale: "pl",
		},
		twitter: {
			description: opengraphDescription,
			title: opengraphTitle,
			creator: opengraphSiteName,
		},
	};
}

export default async function ProjectPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ProjectPage{
				project(id: "${slug}", idType: SLUG) {
					title(format: RENDERED)
					featuredImage {
						node {
							altText
							sourceUrl(size: POST_THUMBNAIL)
							title(format: RENDERED)
						}
					}
					date
					excerpt(format: RENDERED)
					content(format: RENDERED)
					project {
						author {
							... on Teammate {
								featuredImage {
									node {
										altText
										sourceUrl(size: POST_THUMBNAIL)
										title(format: RENDERED)
									}
								}
								uri
								teammate {
									fullname {
										firstname
										lastname
									}
								}
							}
						}
						website {
							label
							url
						}
						stack
					}
				}
			}
				`,
			revalidate: 10,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const {
		title,
		featuredImage,
		date,
		excerpt,
		content,
		project: { author, website, stack },
	} = page.data.project;

	return (
		<>
			<Hero
				date={date}
				excerpt={excerpt}
				image={{
					alt: featuredImage.node.altText,
					src: featuredImage.node.sourceUrl,
					title: featuredImage.node.title,
				}}
				title={title}
				stack={stack}
				website={website}
			/>
			<Content content={content} />
		</>
	);
}