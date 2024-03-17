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
			};
		};
		posts: {
			nodes: {
				categories: {
					nodes: {
						name: string;
						uri: string;
					}[];
				};
				date: string;
				excerpt: string;
				title: string;
				uri: string;
			}[];
		};
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
		team: {
			firstName: string;
			lastName: string;
			desc;
		};
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
              sourceUrl(size: POST_THUMBNAIL)
              title
            }
          }
          content
        }
      }
    }
    users {
      nodes {
        firstName
        lastName
        description
        personPage {
          works
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
    posts(first: 6) {
      nodes {
        categories {
          nodes {
            name
            uri
          }
        }
        date
        excerpt(format: RENDERED)
        title(format: RENDERED)
        uri
      }
    }
    
  }
`;

export default HomePageQuery;
