export const q_home = `
    query HomePage {
        page(id: "/", idType: URI) {
            title(format: RENDERED)
            uri
            page_home_page {
                aboutUs {
                    title
                    content
                    button {
                        url
                        title
                        target
                    }
                }
                blog {
                    title
                    button {
                        url
                        title
                        target
                    }
                    content
                }
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
                }
                projects {
                    title
                    content
                    button {
                        url
                        target
                        title
                    }
                }
                services {
                    title
                }
                statistics {
                    title
                    content
                    positions {
                        value
                        label
                    }
                }
            }
        }
    }
`;

export const q_home_articles = `
    query Articles {
        posts(first: 6) {
            nodes {
                title(format: RENDERED)
                slug
                excerpt(format: RENDERED)
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                }
                date
                categories {
                    nodes {
                        name
                        uri
                    }
                }
            }
        }
    }
`;
