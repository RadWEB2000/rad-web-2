import Head from "next/head";
import Footer from "../Footer/Footer/Footer";
import Navigation from "../Navigation/Navigation/Navigation";
import styles from "./Layout.module.scss";
import { IntLayout } from "./interface";
import Seo from "../Seo/Seo";
import { footer } from "../../../../data/footer";
const Layout = ({
	canonical,
	children,
	hero,
	image,
	meta,
	og,
	robots,
	schema,
}: IntLayout) => {
	const theme = true;
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
				<Navigation />
				<>{hero}</>
			</header>
			<>{children}</>
			<Footer socials={footer.pl.socials} />
		</>
	);
};
export default Layout;
