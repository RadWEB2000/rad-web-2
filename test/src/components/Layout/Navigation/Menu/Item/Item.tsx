import { MouseEventHandler } from "react";
import { tLink } from "@default/ts/types";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import styles from "@default/components/Layout/Navigation/Menu/Item/Item.module.scss";
interface iItem extends tLink {
	variant?: "regular" | "expand";
	type?: "regular" | "submenu";
	closeMenu?: MouseEventHandler;
	toggleExpandSubmenu?: MouseEventHandler;
}

export default function Item({
	closeMenu,
	label,
	toggleExpandSubmenu,
	type = "regular",
	rel,
	uri,
	variant = "regular",
}: iItem): JSX.Element {
	if (variant === "expand" && toggleExpandSubmenu) {
		return (
			<div className={styles.expand}>
				<Link className={styles.link} href={uri} rel={rel}>
					{label}
				</Link>
				<button className={styles.button} onClick={toggleExpandSubmenu}>
					<BiChevronDown />
				</button>
			</div>
		);
	} else {
		return (
			<li className={styles.regular} data-type={type}>
				<Link className={styles.link} href={uri} rel={rel}>
					{label}
				</Link>
			</li>
		);
	}
}
