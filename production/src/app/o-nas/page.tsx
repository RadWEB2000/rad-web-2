import Benefits from "@default/components/Page/AboutUsPage/Benefits/Benefits";
import Hero from "@default/components/Page/AboutUsPage/Hero/Hero";
import Team from "@default/components/Page/AboutUsPage/Team/Team";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";

export async function generateMetadata(): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/o-nas", idType: URI) {
					seo {
						opengraphTitle
						opengraphImage {
                            altText
                            date
                            sourceUrl(size: POST_THUMBNAIL)
                            title(format: RENDERED)
                        }
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
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
			locale: "pl",
		},
		twitter: {
			description: opengraphDescription,
			title: opengraphTitle,
			creator: opengraphSiteName,
		},
	};
}

export default async function AboutUs() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query AboutPage {
				page(id: "/o-nas", idType: URI) {
				  title(format: RENDERED)
				  content(format: RENDERED)
				  aboutPage {
					benefits {
					  title
					  content
					  cards {
						title
						content
						image {
						  altText
						  sourceUrl(size: POST_THUMBNAIL)
						  title(format: RENDERED)
						}
					  }
					}
					team {
					  title
					  content
					}
				  }
				}
				teammates(first: 3) {
						  edges {
							  node {
								  teammate {
									  fullname {
										  firstname
										  lastname
									  }
									  job {
										  jobName
									  }
								  }
								  uri
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
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const {
		page: {
			title,
			content,
			aboutPage: { benefits, team },
		},
		teammates: { edges },
	} = page.data;

	return (
		<>
			<Hero title={title} content={content} />
			<Team cards={edges.reverse()} content={team.content} title={team.title} />
			<Benefits cards={benefits.cards} title={benefits.title} />
		</>
	);
}
