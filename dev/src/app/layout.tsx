import "@css/Global.scss";
import "@css/Theme.scss";
import LayoutProvider from "@context/LayoutContext";
import Navigation from "@layout/Navigation";
import { Inter } from "next/font/google";
import { queryNavigation, querySettings } from "@data/queries";
import { iQueryNavigation, iQuerySettings } from "@ts/interfaces";
import logo from "@assets/logo.svg";
export const revalidate = 1;

async function getData() {
	const navigation: iQueryNavigation = await fetch(`${process.env.WP_API}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: queryNavigation,
		}),
	})
		.then((res) => res.json())
		.then(
			({
				data: {
					menu: {
						navigation: { brand, menu },
					},
				},
			}) => {
				return { brand, menu };
			}
		);
	const settings: iQuerySettings = await fetch(`${process.env.WP_API}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: querySettings,
		}),
	})
		.then((res) => res.json())
		.then(
			({
				data: {
					allSettings: { generalSettingsDescription, generalSettingsLanguage },
				},
			}) => {
				return { generalSettingsDescription, generalSettingsLanguage };
			}
		);

	return { navigation, settings };
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const {
		navigation: { brand, menu },
		settings,
	} = await getData();

	return (
		<LayoutProvider>
			<html lang={settings.generalSettingsLanguage}>
				<body className={inter.className}>
					<Navigation
						brand={{
							image: brand.logo,
							uri: brand.link,
						}}
						menu={menu}
					/>
					{children}
				</body>
			</html>
		</LayoutProvider>
	);
}
