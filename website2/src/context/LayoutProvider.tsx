import {
	createContext,
	MouseEventHandler,
	ReactElement,
	useEffect,
	useState,
} from "react";
import { theme, TypeThemeValue } from "../data/theme";
// import { theme, TypeThemeValue } from "../../data/utils/theme";

interface iLayoutContext {
	menu: {
		close: MouseEventHandler;
		handle: MouseEventHandler;
		isOpen: boolean;
	};
	theme: {
		handle: MouseEventHandler;
		isLight: boolean;
	};
	scroll: boolean;
}

interface iLayoutProvider {
	children: ReactElement;
	time: string;
}

export const LayoutContext = createContext<iLayoutContext>({
	menu: {
		close: () => {},
		handle: () => {},
		isOpen: false,
	},
	theme: {
		handle: () => {},
		isLight: true,
	},
	scroll: false,
});

export const LayoutProvider = ({
	children,
	time,
}: iLayoutProvider): ReactElement => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
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
		if (parseInt(time) >= 20 && parseInt(time) < 6) {
			return setIsLightTheme(false);
		} else {
			return setIsLightTheme(true);
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		Object.keys(getThemeVariant).forEach((key) => {
			const val = getThemeVariant[key];
			root.style.setProperty(`--${key}`, val);
		});
	}, [isLightTheme]);

	return (
		<LayoutContext.Provider
			value={{
				menu: {
					close: () => setIsOpenMenu(false),
					handle: () => setIsOpenMenu(!isOpenMenu),
					isOpen: isOpenMenu,
				},
				theme: {
					handle: () => setIsLightTheme(!isLightTheme),
					isLight: isLightTheme,
				},
				scroll: isScrolled,
			}}
		>
			<>{children}</>
		</LayoutContext.Provider>
	);
};
