"use client";
import { LayoutContext } from "@context/LayoutContext";
import styles from "@layout/Navigation/Settings/Settings.module.scss";
import { useContext } from "react";
import { LiaSun } from "react-icons/lia";
import { RiMoonFoggyLine } from "react-icons/ri";

export default function Settings() {
	const {
		navigation: { menuStatus, toggle: menuToggle },
		theme: { colorTheme, toggle: themeToggle },
	} = useContext(LayoutContext);
	return (
		<div className={styles.wrapper}>
			<button className={styles.themeButton} onClick={themeToggle}>
				{colorTheme === "dark" ? <LiaSun /> : <RiMoonFoggyLine />}
			</button>
			<button
				className={styles.menuButton}
				data-open={menuStatus}
				onClick={menuToggle}
			>
				<span />
				<span />
				<span />
			</button>
		</div>
	);
}
