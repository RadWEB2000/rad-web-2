"use client";
import Link from "next/link";
import styles from "@layout/Navigation/Menu/MenuItem/MenuItem.module.scss";
import { LuChevronDown } from "react-icons/lu";

type tMenuItem = {
	label: string;
	uri: string;
} & (
	| {
			type: "expand";
			toggleSubmenu: any;
	  }
	| {
			type: "regural";
	  }
	| {
			closeSubmenu: any;
			type: "submenu";
	  }
);

export default function MenuItem(props: tMenuItem) {
	const { label, type, uri } = props;

	if (type === "expand") {
		const { toggleSubmenu } = props;
		return (
			<div className={styles.expand}>
				<Link className={styles.link} href={"/"} hrefLang="pl">
					{label}
				</Link>
				<button className={styles.button} onClick={toggleSubmenu}>
					<LuChevronDown />
				</button>
			</div>
		);
	} else if (type === "regural") {
		return (
			<li className={styles.regular} title="Regular">
				<Link className={styles.link} href={"/"} hrefLang="pl">
					{label}
				</Link>
			</li>
		);
	} else if (type === "submenu") {
		const { closeSubmenu } = props;
		return (
			<li className={styles.submenu} title="Submenu">
				<Link
					className={styles.link}
					href={"/"}
					hrefLang="pl"
					// onClick={closeSubmenu}
				>
					{label}
				</Link>
			</li>
		);
	}
}
