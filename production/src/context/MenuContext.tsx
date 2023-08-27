"use client";
import { createContext, useState } from "react";

type tMenuContext = {
	closeMenu: () => void;
	isOpen: boolean;
	toggleMenu: () => void;
};

type tMenuProvider = {
	children: React.ReactNode;
};

export const MenuContext = createContext<tMenuContext>({
	closeMenu: () => {},
	isOpen: false,
	toggleMenu: () => {},
});

export default function MenuProvider({ children }: tMenuProvider) {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<MenuContext.Provider
			value={{
				closeMenu: () => setIsOpenMenu(false),
				isOpen: isOpenMenu,
				toggleMenu: () => setIsOpenMenu(!isOpenMenu),
			}}
		>
			{children}
		</MenuContext.Provider>
	);
}
