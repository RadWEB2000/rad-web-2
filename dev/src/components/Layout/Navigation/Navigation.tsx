"use client";
import Brand from "@layout/Navigation/Brand/Brand";
import styles from "@layout/Navigation/Navigation.module.scss";
import { tNavigation } from "@ts/types";
import Menu from "@layout/Navigation/Menu";
import Settings from "@layout/Navigation/Settings";
import { LayoutContext } from "@context/LayoutContext";
import { useContext } from "react";

export default function Navigation(props: tNavigation) {
	const { brand, menu } = props;
	const {
		navigation: { menuStatus },
	} = useContext(LayoutContext);
	return (
		<nav className={styles.wrapper} data-menu={menuStatus}>
			<div className={styles.brand}>
				<Brand image={brand.image} uri={brand.uri} />
			</div>
			<div className={styles.menu}>
				<Menu menu={menu} />
			</div>
			<div className={styles.settings}>
				<Settings />
			</div>
		</nav>
	);
}
