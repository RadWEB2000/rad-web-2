import Head from "next/head";
import { ReactElement } from "react";
import { IntSeo } from "./interface";
const Seo = ({ canonical, image, meta, og, robots }: IntSeo): ReactElement => {
	console.log(meta.title);
	return (
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
		</Head>
	);
};
export default Seo;
