import Head from "next/head";
import { footer } from "../../../data/footer";
import Footer from "../Footer/Footer/Footer";
import Navigation from "../Navigation/Navigation/Navigation";
import Seo from "../Seo/Seo";
import { IntLayout } from "./interface";
const Layout = ({
	canonical,
	children,
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
			<Navigation />
			<>{children}</>
			<Footer socials={footer.pl.socials} />
		</>
	);
};
export default Layout;
