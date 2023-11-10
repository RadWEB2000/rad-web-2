export const queryNavigation = `
    query Navigation {
        menu(id: "PRIMARY", idType: NAME) {
        navigation {
            brand {
            link
            logo {
                altText
                sourceUrl(size: POST_THUMBNAIL)
                title(format: RENDERED)
            }
            }
            menu {
            label
            uri
            submenu {
                label
                uri
            }
            }
        }
        }
    }
`;
export const querySettings = `
query Settings {
    allSettings {
      generalSettingsDescription
      generalSettingsLanguage
    }
}
`;
