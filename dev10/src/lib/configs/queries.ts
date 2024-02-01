export const q_settings = `
    query Settings {
        allSettings {
            generalSettingsLanguage
            generalSettingsUrl
        }
    }
`

export const q_articles_blog_page = `
    query ArticlesBlogPage {
        posts(first: 100000000) {
            nodes {
                title(format: RENDERED)
                excerpt(format: RENDERED)
                dateGmt
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format: RENDERED)
                    }
                }
                slug
                categories {
                    nodes {
                        name
                        uri
                    }
                }
            }
        }
         page(id: "/blog", idType: URI) {
            blogPage {
               button_label
            }
        }
    }
`

export const q_article_posts_home = `
    query ArticlePostsHome {
        posts(first: 6) {
            nodes {
                title(format: RENDERED)
                uri
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: THUMBNAIL)
                        title(format:RENDERED)
                    }
                }
                dateGmt
                categories(last: 1) {
                    nodes {
                        name
                        uri
                    }
                }
            }
        }
    }
`

export const q_home_page = `
    query HomePage {
        page(id: "/", idType: URI) {
            homePage {
                hero {
                title
                slogan
                buttons {
                    button {
                        link
                        label
                    }
                }
            }
            blog {
                title
                content
                button {
                    link
                    label
                }
            }
            projects {
                title
                content
                button {
                    link
                    label
                }
            }
            statistics {
                title
                content
                cards {
                    card {
                        value
                        title
                    }
                }
            }
            team {
                title
                content
                button {
                    link
                    label
                }
            }
            services {
                title
            }
            }
        }
    }
`

export const q_article = `
    query ArticlePage {
        post(id: "jak-tworzyc-zmienne-w-css", idType: SLUG) {
            title(format: RENDERED)
            excerpt(format: RENDERED)
            categories {
                nodes {
                    link
                    name
                    slug
                }
            }
            slug
            dateGmt
            featuredImage {
                node {
                    altText
                    sourceUrl(size: MEDIUM_LARGE)
                    title(format: RENDERED)
                }
            }
            content
            seo {
                breadcrumbs {
                    text
                    url
                }
                fullHead
                jsonLd {
                    raw
                }
            }
        }
    }
`