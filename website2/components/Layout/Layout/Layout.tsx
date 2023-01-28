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
}: IntLayout) => {
	return (
		<>
			<Seo
				canonical={canonical}
				image={image}
				meta={meta}
				og={og}
				robots={robots}
			/>
			<Navigation />
			<>{children}</>
			<Footer socials={footer.pl.socials} />
		</>
	);
};
export default Layout;
