import { menu } from "@default/src/data/menu";
import Head from "next/head";
import { ReactElement } from "react";
import Navigation from "../Navigation/Navigation/Navigation";
import styles from "./Layout.module.scss";
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
			<div className={styles.wrapper}>
				{!isLoginPage ? <Navigation brand="CMS" menu={menu} /> : null}
				<>{children}</>
			</div>
		</>
	);
};

export default Layout;
