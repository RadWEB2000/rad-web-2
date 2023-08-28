import Navigation from "@default/components/Layout/Navigation/Navigation";
import "@default/styles/Global.scss";
import "@default/styles/Variables.scss";
import "../../public/fonts/drukCyr/stylesheet.css";
import MenuProvider from "@default/context/MenuContext";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import Footer from "@default/components/Layout/Footer/Footer";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const brand = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query Brand {
				allSettings {
					generalSettingsTitle
				}
			}
				`,
			revalidate: 10,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const navigation = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
				query MenuPrimary {
					menu(id: "primary", idType: NAME) {
						menuItems(first: 40) {
							edges {
								node {
									path
									label
								}
							}
						}
					}
				}
					`,
			revalidate: 10,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	const footer = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query Footer {
				menus(where: {location: FOOTER}) {
				  edges {
					node {
					  footer {
						brand {
						  title
						  year
						}
						details {
						  adress
						  email
						  phone {
							label
							value
						  }
						  slogan
						  socialMedia {
							url
						  }
						  title
						}
						menu {
						  column {
							label
							adress {
							  title
							  uri
							}
						  }
						}
					  }
					}
				  }
				}
			  }
					`,
			revalidate: 10,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	return (
		<html lang="pl">
			<MenuProvider>
				<body>
					<Navigation
						brand={brand.data.allSettings.generalSettingsTitle}
						menu={navigation.data.menu.menuItems.edges}
					/>
					{children}
					<Footer
						brand={footer.data.menus.edges[0].node.footer.brand}
						details={footer.data.menus.edges[0].node.footer.details}
						menu={footer.data.menus.edges[0].node.footer.menu}
						socialMedia={
							footer.data.menus.edges[0].node.footer.details.socialMedia
						}
					/>
				</body>
			</MenuProvider>
		</html>
	);
}
