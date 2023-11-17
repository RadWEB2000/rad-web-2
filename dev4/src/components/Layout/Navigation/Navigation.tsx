"use client";
import { menu } from "data/menu";
import { socials } from "data/socials";
import Brand from "l_navigation/Brand";
import Menu from "l_navigation/Menu";
import styles from "l_navigation/Navigation.module.scss";
import Settings from "l_navigation/Settings";
import Socials from "l_navigation/Socials";
import { useContext } from "react";
import { MenuContext } from "context/MenuContext";

export default function Navigation() {
	const {
		menu: { isOpen },
	} = useContext(MenuContext);
	return (
		<nav className={styles.wrapper} data-open={isOpen}>
			<div className={styles.brand}>
				<Brand label="Rad<br/>WEB" uri="#" />
			</div>
			<div className={styles.menu} data-open={isOpen}>
				<Menu menu={menu} />
				<Socials socials={socials} />
			</div>
			<div className={styles.settings}>
				<Settings />
			</div>
		</nav>
	);
}
