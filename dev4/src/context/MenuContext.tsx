'use client';
import { createContext, useEffect, useState } from 'react';

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

	function getDeviceSize() {
		if (window !== undefined) {
			if (window.innerWidth >= 1050) {
				setIsOpenMenu(true);
			} else {
				setIsOpenMenu(false);
			}
		}
	}

	useEffect(() => {
		getDeviceSize();

		if (window !== undefined) {
			window.addEventListener('resize', () => {
				getDeviceSize();
			});
		}
	}, []);

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
