import { tCustomButton, tImage, tPost } from 'ts/commons';

export type tHomePageRequestQuery = {
	data: {
		page: {
			homePage: {
				hero: {
					background_image: {
						node: {
							altText: string;
							sourceUrl: string;
						};
					};
					buttons: {
						button: tCustomButton;
					}[];
					slogan: string;
					title: string;
				};
				blog: {
					title: string;
					content: string;
					additional_content: string;
					button: tCustomButton;
				};
				aboutUs: {
					title: string;
					uri: string;
					button: tCustomButton;
					image: {
						node: tImage;
					};
					content: string;
				};
				service_overview: {
					title: string;
					cards: {
						title: string;
						icon: {
							node: tImage;
						};
					}[];
				};
			};
		};
		posts: {
			nodes: {
				author: {
					node: {
						firstName: string;
						lastName: string;
						personPage: {
							image: {
								node: tImage;
							};
						};
					};
				};
				categories: {
					nodes: {
						name: string;
						uri: string;
					}[];
				};
				date: string;
				excerpt: string;
				featuredImage: {
					node: tImage;
				};
				title: string;
				uri: string;
			}[];
		};
		users: {
			nodes: {
				firstName: string;
				lastName: string;
				description: string;
				personPage: {
					works: string;
					image: {
						node: tImage;
					};
				};
			}[];
		};
	};
};

export type tHomePageResponseQuery = {
	hero: {
		background_image: {
			altText: string;
			sourceUrl: string;
		};
		title: string;
		slogan: string;
		buttons: tCustomButton[];
	};
	blog: {
		title: string;
		button: tCustomButton;
		content: {
			base: string;
			additional: string;
		};
		posts: tPost[];
	};
	about_us: {
		button: tCustomButton;
		content: string;
		image: tImage;
		team: {
			firstName: string;
			image: tImage;
			lastName: string;
			overview: string;
			works: string;
		}[];
		title: string;
		uri: string;
	};
	service_overview: {
		title: string;
		cards: {
			title: string;
			icon: tImage;
		}[];
	};
};

const HomePageQuery: string = `
  query HomePage {
    page(id: "/", idType: URI) {
      homePage {
        hero {
          title
          slogan
          buttons {
            button {
              url
              title
              target
            }
          }
          background_image {
            node {
              altText
              sourceUrl(size: LARGE)
            }
          }
        }
        blog {
          title
          content
          additional_content
          button {
            target
            title
            url
          }
        }
         aboutUs {
          title
          button {
            target
            url
            title
          }
          image {
            node {
              altText
              sourceUrl(size: LARGE)
              title
            }
          }
          content
        }
        service_overview {
          title
          cards {
            title
            icon {
              node {
                altText
                sourceUrl(size: THUMBNAIL)
                uri
              }
            }
          }
        }
      }
    }
    users {
      nodes {
        firstName
        lastName
        description
        uri
        personPage {
          works
          image {
            node {
              altText
              sourceUrl(size: LARGE)
              title(format: RENDERED)
            }
          }
        }
      }
    }
     posts(first: 5) {
    nodes {
      author {
        node {
          firstName
          lastName
          personPage {
            image {
              node {
                altText
                sourceUrl(size: POST_THUMBNAIL)
                title(format: RENDERED)
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
          uri
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
`;

export default HomePageQuery;
