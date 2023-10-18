"use client";
import { createContext, useEffect, useState } from "react";

type tLayoutContext = {
	navigation: {
		close: () => void;
		menuStatus: boolean;
		toggle: () => void;
	};
	theme: {
		colorTheme: "dark" | "light";
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
	theme: {
		colorTheme: "dark",
		toggle: () => {},
	},
});

export default function LayoutProvider({ children }: tLayoutProvider) {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [colorTheme, handleColorTheme] = useState<"dark" | "light">("dark");

	function toggleTheme() {
		// console.log(colorTheme);
		if (colorTheme === "light") {
			handleColorTheme("dark");
			return;
		} else if (colorTheme === "dark") {
			handleColorTheme("light");
			return;
		}
	}

	useEffect(() => {
		if (window !== undefined) {
			if (document !== undefined) {
				const body = document.querySelector("body");
				if (body) {
					if (colorTheme === "dark") {
						body.setAttribute("data-theme", "dark");
					} else if (colorTheme === "light") {
						body.setAttribute("data-theme", "light");
					}
				}
			}
		}
	}, [colorTheme]);

	return (
		<LayoutContext.Provider
			value={{
				navigation: {
					close: () => setIsOpenMenu(false),
					menuStatus: isOpenMenu,
					toggle: () => setIsOpenMenu(!isOpenMenu),
				},
				theme: {
					colorTheme: colorTheme,
					toggle: toggleTheme,
				},
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
}
