"use client";

import Brand, {
	iBrand,
} from "@default/components/Layout/Navigation/Brand/Brand";
import Menu from "@default/components/Layout/Navigation/Menu/Menu";
import styles from "@default/components/Layout/Navigation/Navigation.module.scss";
import Settings from "@default/components/Layout/Navigation/Settings/Settings";
import { MenuContext } from "@default/context/MenuContext";
import useGroupPathsMenu from "@default/lib/hooks/useGroupPathsMenu";
import { useContext } from "react";

interface iNavigation extends iBrand {
	menu: any;
}

export default function Navigation({ brand, menu }: iNavigation) {
	const { isOpen } = useContext(MenuContext);
	return (
		<nav className={styles.wrapper} data-open-menu={isOpen}>
			<div className={styles.brand}>
				<Brand brand={brand} />
			</div>
			<div className={styles.menu}>
				<Menu menu={useGroupPathsMenu(menu)} />
			</div>
			<div className={styles.settings}>
				<Settings />
			</div>
		</nav>
	);
}
