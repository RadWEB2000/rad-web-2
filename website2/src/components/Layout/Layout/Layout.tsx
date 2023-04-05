import Head from "next/head";
import Footer from "../Footer/Footer/Footer";
import Navigation from "../Navigation/Navigation/Navigation";
import styles from "./Layout.module.scss";
import { ReactElement } from "react";
import { menu } from "../../../data/menu";

interface iLayout {
	canonical?: string;
	image: string;
	meta: {
		description: string;
		title: string;
	};
	og: {
		description: string;
		title: string;
		type: "article" | "website" | "blog";
	};
	robots?:
		| "index follow"
		| "noindex nofollow"
		| "index nofollow"
		| "noindex follow"
		| "index"
		| "follow";
	children: ReactElement | ReactElement[];
	hero: ReactElement;
	schema: any;
}

const Layout = ({
	canonical,
	children,
	hero,
	image,
	meta,
	og,
	robots,
	schema,
}: iLayout): ReactElement => {
	const theme = true;
	const { nav, footer, settings, socials } = menu.pl;
	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				{canonical && (
					<>
						<link rel="canonical" href={canonical} />
						<meta property="og:url" content={canonical} />
					</>
				)}
				<meta name="robots" content={robots ? "index follow" : robots} />
				<meta property="og:type" content={og.type} />
				<meta property="og:title" content={og.title} />
				<meta property="og:description" content={og.description} />
				<meta property="og:image" content={image} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<script
					key="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
				/>
			</Head>
			<header className={styles.header}>
				<Navigation menu={nav} />
				<>{hero}</>
			</header>
			<>{children}</>
			<Footer
				author={`RadWEB &copy; ${new Date().getFullYear()}`}
				brand="RadWEB"
				content={`RadWEB oferuje projektowanie i tworzenie funkcjonalnych stron internetowych oraz aplikacji. Nasza oferta obejmuje także usługi z zakresu pozycjonowania stron i copywritingu. Skontaktuj się z nami, a pomożemy Ci wyróżnić się w internecie!`}
				email="radoslaw.adamczyk2000@gmail.com"
				location="Donatowo 53, 64-020 Czempiń"
				menu={footer}
				phone="+48 794-100-413"
				socials={socials}
				settings={settings}
			/>
		</>
	);
};
export default Layout;
