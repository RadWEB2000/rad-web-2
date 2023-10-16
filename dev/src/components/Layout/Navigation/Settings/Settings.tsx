"use client";
import { LayoutContext } from "@context/LayoutContext";
import styles from "@layout/Navigation/Settings/Settings.module.scss";
import { useContext, useState } from "react";

export default function Settings() {
	const {
		navigation: { menuStatus, toggle },
	} = useContext(LayoutContext);
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.menuButton}
				data-open={menuStatus}
				onClick={toggle}
			>
				<span />
				<span />
				<span />
			</button>
		</div>
	);
}
