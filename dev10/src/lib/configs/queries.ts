export const q_settings = `
    query Settings {
        allSettings {
            generalSettingsLanguage
            generalSettingsUrl
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