export const q_home = `
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
  posts(first: 6) {
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
}
`;
