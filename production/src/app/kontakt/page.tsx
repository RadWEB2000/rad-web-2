import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import Hero from "@default/components/Page/ContactPage/Hero/Hero";
import Form from "@default/components/Utils/Form/Form";
import AboutUs from "@default/components/Page/ContactPage/AboutUs/AboutUs";

export async function generateMetadata(): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/kontakt", idType: URI) {
					seo {
						metaDesc
                        canonical
                        opengraphAuthor
                        opengraphDescription
                        opengraphImage {
                            altText
                            date
                            sourceUrl(size: POST_THUMBNAIL)
                            title(format: RENDERED)
                        }
                        opengraphSiteName
                        opengraphTitle
                        opengraphType
                        opengraphUrl
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

export default async function ContactPage() {
	const site = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ContactPage {
                page(id: "/kontakt", idType: URI) {
                  title(format: RENDERED)
                  content(format: RENDERED)
                  contactPage {
                    form {
                      title
                      content
                      fields {
                        id
                        label
                        length {
                          max
                          min
                        }
                        pattern
                        placeholder
                        type
                      }
                      button
                    }
					team {
						button
						content
						title
					}
                  }
                }
                teammates(first: 10) {
                  edges {
                    node {
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
                      }
                      featuredImage {
                        node {
                          altText
                          sourceUrl(size: POST_THUMBNAIL)
                          title(format: RENDERED)
                        }
                      }
					  uri
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
			contactPage: { form, team },
		},
		teammates,
	} = site.data;
	return (
		<>
			<Hero content={content} title={title} />
			<AboutUs
				button={team.button}
				cards={teammates.edges}
				content={team.content}
				title={team.title}
			/>
			<Form
				button={form.button}
				content={form.content}
				fields={form.fields}
				title={form.title}
			/>
		</>
	);
}
