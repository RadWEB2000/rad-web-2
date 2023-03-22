import { menu } from "@default/src/data/menu";
import Head from "next/head";
import { ReactElement } from "react";
import Navigation from "../Navigation/Navigation/Navigation";

export interface iLayout {
	children: ReactElement | ReactElement[];
	isLoginPage?: boolean;
}

const Layout = ({ children, isLoginPage = true }: iLayout) => {
	return (
		<>
			<Head>
				<title>RadWEB CMS</title>
			</Head>
			<div>
				{!isLoginPage ? <Navigation brand="" menu={menu} /> : null}
				<>{children}</>
			</div>
		</>
	);
};

export default Layout;
