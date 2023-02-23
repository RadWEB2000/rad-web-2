import { createContext, ReactElement, useEffect, useState } from "react";
import { theme, TypeThemeValue } from "./../data/utils/theme";
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
	const [isLightTheme, setIsLightTheme] = useState(true);
	const { dark, light } = theme;
	const getThemeVariant: TypeThemeValue = isLightTheme ? light : dark;
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

	useEffect(() => {
		const root = document.documentElement;
		Object.keys(getThemeVariant).forEach((key) => {
			const val = getThemeVariant[key];
			root.style.setProperty(`--${key}`, val);
		});
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
			<>{children}</>
		</LayoutContext.Provider>
	);
};
