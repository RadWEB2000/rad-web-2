import { tButton, tImage } from "ts/types";

export type t_endpoint = {
  data: {
    page: {
      page_home_page: {
        aboutUs: {
          title: string;
          overview: string;
          image: tImage;
          content: string;
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
        howWeWorks: {
          title: string;
          image: tImage;
          values: {
            icon: tImage;
            content: string;
            title: string;
          }[];
        };
        projects: {
          title: string;
          content: string;
          image: tImage;
          button: tButton;
          buttonCard: string;
        };
        services: {
          title: string;
          content: string;
          button: tButton;
        };
      };
    };
    posts: {
      nodes: {
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
    };
    setting: {
      page_main_settings: {
        socials: string[];
      };
    };
    projects: {
      nodes: {
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
    };
  };
};

export type t_response = {
  about_us: {
    button: tButton;
    content: string;
    image: tImage;
    overview: string;
    title: string;
  };
  blog: {
    button: tButton;
    cards: {
      title: string;
      uri: string;
      image: tImage;
      excerpt: string;
      date: string;
      categories: {
        name: string;
        uri: string;
      }[];
    }[];
    content: string;
    overview: string;
    title: string;
  };
  directonary: {
    button: tButton;
    content: string;
    title: string;
  };
  faq: {
    cards: {
      answer: string;
      question: string;
    }[];
    image: tImage;
    title: string;
  };
  hero: {
    buttons: tButton[];
    slogan: string;
    socials: string[];
    title: string;
  };
  how_we_works: {
    image: tImage;
    title: string;
    values: {
      icon: tImage;
      content: string;
      title: string;
    }[];
  };
  projects: {
    button: tButton;
    button_card: string;
    cards: {
      excerpt: string;
      image: tImage;
      industry: string;
      title: string;
      uri: string;
    }[];
    content: string;
    image: tImage;
    title: string;
  };
  services: {
    button: tButton;
    content: string;
    title: string;
  };
};

const query = `
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
              sourceUrl(size: POST_THUMBNAIL)
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
          projectUrl
        }
      }
    }
  }
`;

export default query;
