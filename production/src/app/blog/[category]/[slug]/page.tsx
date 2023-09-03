import Author from "@default/components/Page/PostPage/Author/Author";
import Content from "@default/components/Page/PostPage/Content/Content";
import Hero from "@default/components/Page/PostPage/Hero/Hero";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";

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
				post(id: "${slug}", idType: SLUG) {
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
			opengraphImage,
			opengraphTitle,
			opengraphSiteName,
			opengraphType,
			metaDesc,
			opengraphDescription,
			title,
		},
		modified,
		date,
	} = seo.data.post;
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
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
		},
		twitter: {
			description: opengraphDescription,
			title: opengraphTitle,
			creator: opengraphSiteName,
		},
	};
}

export default async function ArticlePage({
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
			query Post {
				post(id: "${slug}", idType: SLUG) {
				  title(format: RENDERED)
				  date
				  featuredImage {
					node {
					  altText
					  sourceUrl(size: POST_THUMBNAIL)
					  title(format: RENDERED)
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
				  excerpt(format: RENDERED)
				  content(format: RENDERED)
				  post {
					author {
					  ... on Teammate {
						featuredImage {
						  node {
							altText
							sourceUrl(size: POST_THUMBNAIL)
							title(format: RENDERED)
						  }
						}
						teammate {
						  fullname {
							firstname
							lastname
						  }
						  job {
							jobName
						  }
						  locations {
							city
						  }
						  socialMedia {
							url
						  }
						}
						uri
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
		title,
		date,
		featuredImage,
		categories,
		excerpt,
		content,
		post: { author },
	} = page.data.post;

	const fullname = `${author[0].teammate.fullname.firstname} ${author[0].teammate.fullname.lastname}`;

	return (
		<>
			<Hero
				author={{
					fullname: fullname,
					uri: author[0].uri,
				}}
				category={{
					name: categories.edges[0].node.name,
					uri: categories.edges[0].node.uri,
				}}
				date={date}
				excerpt={excerpt}
				image={{
					alt: featuredImage.node.altText,
					src: featuredImage.node.sourceUrl,
					title: featuredImage.node.title,
				}}
				title={title}
			/>
			<Content content={content} />
			<Author
				cities={author[0].teammate.locations}
				fullname={fullname}
				image={{
					alt: author[0].featuredImage.node.altText,
					src: author[0].featuredImage.node.sourceUrl,
					title: author[0].featuredImage.node.title,
				}}
				jobs={author[0].teammate.job}
				socials={author[0].teammate.socialMedia}
				uri={author[0].uri}
			/>
		</>
	);
}
