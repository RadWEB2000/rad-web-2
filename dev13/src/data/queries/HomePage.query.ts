import { tButton, tImage } from "ts/types";

export interface iHomePageQuery {
  page: {
    about_us: {
      title: string;
      overview: string;
      content: string;
      image: tImage;
      button: tButton;
    };
    blog: {
      title: string;
      overview: string;
      content: string;
      button: tButton;
    };
    directonary: {
      title: string;
      content: string;
      button: tButton;
    };
    faq: {
      title: string;
      image: tImage;
      cards: {
        answer: string;
        question: string;
      }[];
    };
    hero: {
      title: string;
      slogan: string;
      buttons: {
        button: tButton;
      }[];
    };
    how_we_works: {
      title: string;
      image: tImage;
      values: {
        icon: tImage;
        title: string;
        content: string;
      }[];
    };
    projects: {
      title: string;
      content: string;
      image: tImage;
      button: tButton;
      button_card: string;
    };
    services: {
      title: string;
      content: string;
      button: tButton;
    };
  };
  posts: {
    title: string;
    uri: string;
    featuredImage: {
      node: tImage;
    };
    excerpt: string;
    date: string;
    categories: {
      nodes: {
        name: string;
        uri: string;
      }[];
    };
  }[];
  settings: {
    socials: {
      link: string;
    }[];
  };
  projects: {
    title: string;
    uri: string;
    featuredImage: {
      node: tImage;
    };
    excerpt: string;
    page_project_article: {
      industry: string;
    };
  }[];
}

const HomePageQuery = `
    query HomePage {
        page(id: "/", idType: URI) {
            page_home_page {
                aboutUs {
                    title
                    overview
                    image {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                    content
                    button {
                        url
                        target
                        title
                    }
                }
                blog {
                    title
                    overview
                    content
                    button {
                        url
                        target
                        title
                    }
                }
                directonary {
                    title
                    content
                    button {
                        url
                        target
                        title
                    }
                }
                faq {
                    title
                    image {
                        altText
                        sourceUrl(size: POST_THUMBNAIL)
                        title(format: RENDERED)
                    }
                    cards {
                        question
                        answer
                    }
                }
                hero {
                    title
                    slogan
                    buttons {
                        button {
                            title
                            target
                            url
                        }
                    }
                }
                howWeWorks {
                    title
                    image {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                    values {
                    icon {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                    content
                    title
                    }
                }
                projects {
                    title
                    content
                    image {
                        altText
                        sourceUrl(size: POST_THUMBNAIL)
                        title(format: RENDERED)
                    }
                    button {
                        url
                        title
                        target
                    }
                    buttonCard
                }
                services {
                    title
                    content
                    button {
                        url
                        title
                        target
                    }
                }
            }
        }
        posts(first: 4) {
            nodes {
                title(format: RENDERED)
                uri
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                }
                excerpt
                date
                categories {
                    nodes {
                        name
                        uri
                    }
                }
            }
        }
        setting(id: "glowne-ustawienia", idType: SLUG) {
            page_main_settings {
                socials {
                    link
                }
            }
        }
        projects(first: 4) {
          nodes {
            title(format: RENDERED)
            uri
            featuredImage {
              node {
                altText
                sourceUrl(size: POST_THUMBNAIL)
                title(format: RENDERED)
              }
            }
            excerpt(format: RENDERED)
            page_project_article {
              industry
            }
          }
      }
    }
`;

export default HomePageQuery;
