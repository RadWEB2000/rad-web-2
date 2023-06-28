import { createContext, useState } from "react";

interface iLayoutProvider {
	children: JSX.Element | JSX.Element[];
}

export const LayoutContext = createContext({
	closeMenu: () => {},
	isOpenMenu: false,
	toggleMenu: () => {},
});

export const LayoutProvider = ({ children }: iLayoutProvider) => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<LayoutContext.Provider
			value={{
				closeMenu: () => setOpenMenu(false),
				isOpenMenu: openMenu,
				toggleMenu: () => setOpenMenu(!openMenu),
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};
