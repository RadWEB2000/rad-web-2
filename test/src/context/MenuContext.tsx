import { MouseEventHandler, ReactNode, createContext, useState } from "react";

type tMenuContext = {
	isOpenMenu: boolean;
	toggleMenu: MouseEventHandler;
	closeMenu: MouseEventHandler;
};

type tMenuProvider = {
	children: ReactNode;
};

export const MenuContext = createContext<tMenuContext>({
	isOpenMenu: false,
	toggleMenu: () => {},
	closeMenu: () => {},
});

export default function MenuProvider({ children }: tMenuProvider) {
	const [isExpand, setIsExpand] = useState(false);
	return (
		<MenuContext.Provider
			value={{
				closeMenu: () => setIsExpand(false),
				isOpenMenu: isExpand,
				toggleMenu: () => setIsExpand(!isExpand),
			}}
		>
			{children}
		</MenuContext.Provider>
	);
}
