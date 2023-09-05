import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import Hero from "@default/components/Page/ContactPage/Hero/Hero";
import Form from "@default/components/Utils/Form/Form";
import AboutUs from "@default/components/Page/ContactPage/AboutUs/AboutUs";
import Contact from "@default/components/Page/ContactPage/Contact/Contact";

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
						content
						title
					}
					contact {
						title
						emailBox {
						  email
						  title
						}
						phoneBox {
						  title
						  label
						  value
						}
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
			contactPage: { contact, form, team },
		},
		teammates,
	} = site.data;
	return (
		<>
			<Hero content={content} title={title} />
			<Contact
				emailBox={{
					email: contact.emailBox.email,
					title: contact.emailBox.title,
				}}
				phoneBox={{
					label: contact.phoneBox.label,
					title: contact.phoneBox.title,
					value: contact.phoneBox.value,
				}}
				title={contact.title}
			/>
			<AboutUs
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
