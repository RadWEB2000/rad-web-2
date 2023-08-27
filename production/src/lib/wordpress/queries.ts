import { gql } from "graphql-request";

export const qBrand = gql`
	query Brand {
		allSettings {
			generalSettingsTitle
		}
	}
`;
export const qMenuPrimary = gql`
	query MenuPrimary {
		menu(id: "primary", idType: NAME) {
			menuItems(first: 40) {
				edges {
					node {
						path
						label
					}
				}
			}
		}
	}
`;

export const qPostsHome = gql`
	query PostsHome {
		posts(first: 6) {
			edges {
				node {
					title(format: RENDERED)
					date
					uri
					status
					featuredImage {
						node {
							sourceUrl(size: POST_THUMBNAIL)
							altText
							title(format: RENDERED)
						}
					}
					categories(first: 1) {
						edges {
							node {
								uri
								name
							}
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
				}
			}
		}
	}
`;

export const qTeamHome = gql`
	query TeamHome {
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
`;

export const qHomePageContent = gql`
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
`;

export const qHomePageSeo = gql`
	query HomePageSeo {
		page(id: "/", idType: URI) {
			seo {
				title
				opengraphTitle
				metaDesc
				opengraphDescription
			}
			saswpSchema {
				json_ld
			}
		}
	}
`;
