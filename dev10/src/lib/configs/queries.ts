export const q_settings = `
    query Settings {
        allSettings {
            generalSettingsLanguage
            generalSettingsUrl
        }
    }
`

export const q_articles_home = `
    query ArticlePostsHome {
        posts(first: 6) {
            edges {
                node {
                    title
                    uri
                    featuredImage {
                        node {
                            altText
                            sourceUrl(size: THUMBNAIL)
                            title(format: RAW)
                        }
                    }
                    categories(last: 1) {
                        edges {
                            node {
                                name
                                uri
                            }
                        }
                    }
                    dateGmt
                }
            }
        }
    }
`