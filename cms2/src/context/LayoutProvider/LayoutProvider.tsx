import Layout, { iLayout } from "@default/src/components/Layout/Layout/Layout";
import { useRouter } from "next/router";
import { createContext, ReactElement, useEffect, useState } from "react";

interface iLayoutContext {
	// isLoginPage: boolean;
}

interface iLayoutProvider extends iLayout {}

export const LayoutContext = createContext<iLayoutContext>({
	// isLoginPage: true,
});

export const LayoutProvider = ({ children }: iLayoutProvider): ReactElement => {
	const [isLoginPage, setIsLoginPage] = useState(true);
	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === "/") {
			return setIsLoginPage(true);
		} else {
			return setIsLoginPage(false);
		}
	}, [pathname]);

	return (
		<LayoutContext.Provider value={{}}>
			<Layout isLoginPage={isLoginPage}>{children}</Layout>
		</LayoutContext.Provider>
	);
};
