import Head from "next/head";
import { ReactElement } from "react";

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
			<>
				{!isLoginPage ? (
					<nav>
						<li>
							<a href="#">start</a>
						</li>
					</nav>
				) : null}
				<>{children}</>
			</>
		</>
	);
};

export default Layout;
