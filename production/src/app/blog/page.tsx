import Wrapper from "@default/components/Page/BlogPage/Wrapper/Wrapper";
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
				page(id: "/blog", idType: URI) {
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

export default async function BlogPage() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query BlogPageContent {
				page(id: "/blog", idType: URI) {
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
			revalidate: 10,
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
			cards={edges}
		/>
	);
}
