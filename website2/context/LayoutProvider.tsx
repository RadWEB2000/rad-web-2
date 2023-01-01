import { createContext, ReactElement, useEffect, useState } from "react";
export const LayoutContext = createContext({
	menu: {
		close: () => {},
		handle: () => {},
		isOpen: false,
	},
	scroll: false,
});

export const LayoutProvider = ({
	children,
}: {
	children: ReactElement | ReactElement[];
}) => {
	const [isOpenMenu, setIsOpenMenu] = useState(true);
	const [isScrolled, updateIsScrolled] = useState(false);
	useEffect(() => {
		if (window !== undefined) {
			window.addEventListener("scroll", () => {
				if (window.scrollY >= 150) {
					updateIsScrolled(true);
				} else {
					updateIsScrolled(false);
				}
			});
		}
	}, []);
	return (
		<LayoutContext.Provider
			value={{
				menu: {
					close: () => setIsOpenMenu(false),
					handle: () => setIsOpenMenu(!isOpenMenu),
					isOpen: isOpenMenu,
				},
				scroll: isScrolled,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};
