import Content from "@default/components/Page/PostPage/Content/Content";
import Cards from "@default/components/Page/ProjectsPage/Cards/Cards";
import Hero from "@default/components/Page/ProjectsPage/Hero/Hero";
import getSplitWordpressContent from "@default/lib/functions/getSplitWordpressContent";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/projekty", idType: URI) {
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
	} = seo.data.page;
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

export default async function ProjectsPage() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ProjectsPage {
				page(id: "/projekty", idType: URI) {
					title
					content(format: RENDERED)
				}
				projects(first: 400) {
					edges {
						node {
							title(format: RENDERED)
							uri
							date
							excerpt(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl(size: POST_THUMBNAIL)
									title(format: RENDERED)
								}
							}
						}
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
		page: { content, title },
		projects: { edges },
	} = page.data;
	const { beforeContent, afterContent } = getSplitWordpressContent({
		content: content,
	});

	return (
		<div>
			<Hero content={beforeContent} title={title} />
			<Cards cards={edges} />
			{afterContent && <Content content={afterContent} />}
		</div>
	);
}