import Wrapper from "@default/components/Page/BlogPage/Wrapper/Wrapper";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import { iArticlesBlogPage } from "@default/ts/interfaces";

export async function generateMetadata({
	params: { category },
}: {
	params: { category: string };
}): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/blog/${category}", idType: URI) {
					seo {
						opengraphTitle
						opengraphSiteName
						opengraphType
						metaDesc
						opengraphDescription
						title
						opengraphImage {
                            altText
                            date
                            sourceUrl(size: POST_THUMBNAIL)
                            title(format: RENDERED)
                        }
					}
					modified
					date
				}
			}
			`,
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
			opengraphImage,
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
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
			modifiedTime: modified,
			publishedTime: date,
			locale: "pl",
		},
		twitter: {
			description: opengraphDescription,
			title: opengraphTitle,
			creator: opengraphSiteName,
			site: "RadWEB",
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
		},
	};
}

export default async function BlogPage({
	params: { category },
}: {
	params: { category: string };
}) {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query BlogPageContent {
				page(id: "/blog/${category}", idType: URI) {
				  title(format: RENDERED)
				  content(format: RENDERED)
				}
				posts(first: 1000) {
				  edges {
					node {
					  title(format: RENDERED)
					  uri
					  excerpt(format: RENDERED)
					  featuredImage {
						node {
						  altText
						  sourceUrl(size: POST_THUMBNAIL)
						  title(format: RENDERED)
						}
					  }
					  post {
						author {
						  ... on Teammate {
							teammate {
							  fullname {
								firstname
								lastname
							  }
							}
						  }
						}
					  }
					  categories(last: 1) {
						edges {
						  node {
							name
							uri
						  }
						}
					  }
					  date
					}
				  }
				}
			  }
				`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const articles: iArticlesBlogPage = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
				query ArticleBlogItems {
					posts(first: 100) {
					  edges {
						node {
						  post {
							author {
							  ... on Teammate {
								teammate {
								  fullname {
									firstname
									lastname
								  }
								}
								uri
							  }
							}
						  }
						  featuredImage {
							node {
							  altText
							  sourceUrl(size: POST_THUMBNAIL)
							  title(format: RENDERED)
							}
						  }
						  title(format: RENDERED)
						  uri
						  date
						  excerpt(format: RENDERED)
						  categories(last: 1) {
							edges {
							  node {
								name
								uri
							  }
							}
						  }
						}
					  }
					}
				  }
					`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const {
		page: { title, content },
		posts: { edges },
	} = page.data;

	return (
		<Wrapper
			content={content}
			search={{
				label: "Szukaj",
				placeholder: "Pisz tutaj...",
			}}
			title={title}
			cards={articles.data.posts.edges.filter(
				({ node: { uri } }: { node: { uri: string } }) =>
					uri.toLowerCase().includes(category)
			)}
		/>
	);
}
