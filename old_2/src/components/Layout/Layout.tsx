import { LayoutProvider } from "@default/src/context/LayoutContext/LayoutContext";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";
import { Seo } from "./Seo/Seo";
import { iSeo } from "@default/src/ts/interfaces";

interface iLayout {
	children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: iLayout) => {
	return (
		<LayoutProvider>
			<Navigation
				brand={{
					name: "RadWEB",
					uri: "/",
				}}
			/>
			<>{children}</>
			<Footer />
		</LayoutProvider>
	);
};
export default Layout;
