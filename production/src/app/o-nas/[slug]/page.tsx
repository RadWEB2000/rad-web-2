import Hero from "@default/components/Page/PersonPage/Hero/Hero";
import RecommendedArticles from "@default/components/Utils/Wrappers/RecommendedArticles/RecommendedArticles";
import RecommendedProjects from "@default/components/Utils/Wrappers/RecommendedProjects/RecommendedProjects";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import ContentBox from "@default/components/Utils/ContentBox/ContentBox";
import { iArticlesRecommended } from "@default/ts/interfaces";

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
				teammate(id: "${slug}", idType: SLUG) {
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
	} = seo.data.teammate;
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
			site: "RadWEB",
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
		},
	};
}

export default async function PersonPage({
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
			query PersonPage {
				teammate(id: "${slug}", idType: SLUG) {
				  title(format: RENDERED)
				  content(format: RENDERED)
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
					email
					adress
					job {
					  jobName
					}
					locations {
					  city
					}
					phone {
					  label
					  value
					}
					socialMedia {
						url
					  }
					articles {
					  ... on Post {
						title(format: RENDERED)
						uri
						date
						featuredImage {
						  node {
							altText
							sourceUrl(size: POST_THUMBNAIL)
							title(format: RENDERED)
						  }
						}
						excerpt(format: RENDERED)
					  }
					}
					projects {
					  ... on Project {
						title(format: RENDERED)
						uri
						date
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
			  }
				`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	const articles2: iArticlesRecommended = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ArticlePersonBlogItems {
				teammate(id: "${slug}", idType: SLUG) {
				  teammate {
					articles {
					  ... on Post {
						categories(last: 1) {
						  edges {
							node {
							  name
							  uri
							}
						  }
						}
						date
						excerpt(format: RENDERED)
						featuredImage {
						  node {
							altText
							sourceUrl(size: POST_THUMBNAIL)
							title(format: RENDERED)
						  }
						}
						title(format: RENDERED)
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
		content,
		featuredImage,
		teammate: {
			fullname: { firstname, lastname },
			job,
			adress,
			email,
			socialMedia,
			locations,
			phone,
			articles,
			projects,
		},
	} = page.data.teammate;
	return (
		<>
			<Hero
				adress={adress}
				email={email}
				fullname={`${firstname}<br/> ${lastname}`}
				image={{
					alt: featuredImage.node.altText,
					src: featuredImage.node.sourceUrl,
					title: featuredImage.node.title,
				}}
				jobs={job}
				locations={locations}
				phone={phone}
				socials={socialMedia}
			/>
			<ContentBox content={content} theme="person" />
			{articles && (
				<RecommendedArticles
					cards={articles2.data.teammate.teammate.articles}
					title="Przeczytaj moje artykuły"
				/>
			)}
			{projects && (
				<RecommendedProjects title="Poznaj moje projekty" cards={projects} />
			)}
		</>
	);
}
