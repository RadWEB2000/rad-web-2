import AboutUs from "@default/components/Page/HomePage/AboutUs/AboutUs";
import Blog from "@default/components/Page/HomePage/Blog/Blog";
import Hero from "@default/components/Page/HomePage/Hero/Hero";
import Offer from "@default/components/Page/HomePage/Offer/Offer";
import Projects from "@default/components/Page/HomePage/Projects/Projects";
import Services from "@default/components/Page/HomePage/Services/Services";
import Statistics from "@default/components/Page/HomePage/Statistics/Statistics";
import WatchWord from "@default/components/Page/HomePage/WatchWord/WatchWord";
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
				page(id: "/", idType: URI) {
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

export default async function HomePage() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query HomePageContent {
				page(id: "/", idType: URI) {
					homePage {
						aboutUs {
							title
							content
						}
						blog {
							button
							content
							title
							uri
						}
						hero {
							backgroundimage {
								altText
								sourceUrl(size: LARGE)
								title(format: RENDERED)
							}
							buttons {
								label
								uri
							}
							slogan
							title
						}
						projects {
							button
							content
							title
							uri
						}
						offer {
							button
							cards {
								button
								content
								title
								uri
							}
							content
							title
							uri
						}
						servicesCards {
							button
							color
							image {
								altText
								sourceUrl(size: POST_THUMBNAIL)
								title
							}
							title
							uri
						}
						statistics {
							description
							icon
							value
						}
						watchWord
					}
				}
				posts(first: 6) {
					edges {
						node {
							categories(last: 1) {
								edges {
									node {
										name
										uri
									}
								}
							}
							date
							featuredImage {
								node {
									altText
									sourceUrl(size: POST_THUMBNAIL)
									title(format: RENDERED)
								}
							}
							title(format: RENDERED)
							uri
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
						}
					}
				}
				projects(first: 5) {
					edges {
						node {
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
				teammates(first: 3) {
					edges {
						node {
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
							}
							uri
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

	if (page.data) {
		const {
			page: { homePage },
			posts,
			projects,
			teammates,
		} = page.data;
		return (
			<>
				<Hero
					buttons={homePage.hero.buttons}
					image={{
						alt: homePage.hero.backgroundimage.altText,
						src: homePage.hero.backgroundimage.sourceUrl,
						title: homePage.hero.backgroundimage.title,
					}}
					slogan={homePage.hero.slogan}
					title={homePage.hero.title}
				/>
				<Services cards={homePage.servicesCards} />
				<WatchWord content={homePage.watchWord} />
				<Blog
					button={{
						label: homePage.blog.button,
						uri: homePage.blog.uri,
					}}
					content={homePage.blog.content}
					title={homePage.blog.title}
					cards={posts.edges}
				/>
				<Statistics cards={homePage.statistics} />
				<Projects
					button={homePage.projects.button}
					cards={projects.edges}
					content={homePage.projects.content}
					title={homePage.projects.title}
					uri={homePage.projects.uri}
				/>
				<Offer
					button={homePage.offer.button}
					cards={homePage.offer.cards}
					content={homePage.offer.content}
					title={homePage.offer.title}
					uri={homePage.offer.uri}
				/>
				<AboutUs
					cards={teammates.edges}
					title={homePage.aboutUs.title}
					content={homePage.aboutUs.content}
				/>
			</>
		);
	} else {
		return (
			<>
				<h2>Kochanie, poczekaj chwilę.... jeszcze się szykuję</h2>
				<em
					style={{
						fontSize: "5rem",
						color: "lime",
					}}
				>
					Z dedykacją dla Marty Łusiewicz
				</em>
			</>
		);
	}
}
