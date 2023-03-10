import { createContext, ReactElement, useEffect, useState } from "react";
import { theme, TypeThemeValue } from "../../data/utils/theme";

interface iLayoutContext {
	menu: {
		close: Function;
		handle: Function;
		isOpen: boolean;
	};
	scroll: boolean;
}

interface iLayoutProvider {
	children: ReactElement;
}

export const LayoutContext = createContext<iLayoutContext>({
	menu: {
		close: () => {},
		handle: () => {},
		isOpen: false,
	},
	scroll: false,
});

export const LayoutProvider = ({ children }: iLayoutProvider): ReactElement => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
	const [isScrolled, updateIsScrolled] = useState<boolean>(false);
	const { dark, light } = theme;
	const getThemeVariant: TypeThemeValue = isLightTheme ? light : dark;
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
