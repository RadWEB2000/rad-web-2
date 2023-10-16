"use client";
import { createContext, useEffect, useState } from "react";

type tLayoutContext = {
	navigation: {
		close: () => void;
		menuStatus: boolean;
		toggle: () => void;
	};
};

type tLayoutProvider = {
	children: React.ReactNode;
};

export const LayoutContext = createContext<tLayoutContext>({
	navigation: {
		close: () => {},
		menuStatus: false,
		toggle: () => {},
	},
});

export default function LayoutProvider({ children }: tLayoutProvider) {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<LayoutContext.Provider
			value={{
				navigation: {
					close: () => setIsOpenMenu(false),
					menuStatus: isOpenMenu,
					toggle: () => setIsOpenMenu(!isOpenMenu),
				},
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
}
