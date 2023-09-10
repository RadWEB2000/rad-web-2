import "@default/styles/Global.scss";
import "@default/styles/Variables.scss";
import "../../public/fonts/drukCyr/stylesheet.css";
import Donations from "@default/components/Layout/Donations/Donations";
import Footer from "@default/components/Layout/Footer/Footer";
import MenuProvider from "@default/context/MenuContext";
import Navigation from "@default/components/Layout/Navigation/Navigation";
import { wordpressAPI } from "@default/lib/wordpress/configs";
export const revalidate = 1;

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
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	return (
		<html lang="pl">
			<head>
				<meta name="robots" content="max-image-preview:standard" />

				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MPGDKSZ');`,
					}}
				/>
				<meta name="google-site-verification" content="tZrSZyvCWg3npiY9ThA_vWTqach4rNhP1TpMLSrAG5k" />
			</head>
			<MenuProvider>
				<body>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-MPGDKSZ"
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						></iframe>
					</noscript>
					<Navigation
						brand={brand.data.allSettings.generalSettingsTitle}
						menu={navigation.data.menu.menuItems.edges}
					/>
					{children}
					<Donations />
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
