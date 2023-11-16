"use client";
import { createContext, useState } from "react";

type tMenuContext = {
	menu: {
		close: () => void;
		isOpen: boolean;
		toggle: () => void;
	};
};

type tMenuProvider = {
	children: React.ReactNode;
};

export const MenuContext = createContext<tMenuContext>({
	menu: {
		close: () => {},
		isOpen: false,
		toggle: () => {},
	},
});

export default function MenuProvider(props: tMenuProvider) {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<MenuContext.Provider
			value={{
				menu: {
					close: () => setIsOpenMenu(false),
					isOpen: isOpenMenu,
					toggle: () => setIsOpenMenu(!isOpenMenu),
				},
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
}
