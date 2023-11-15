"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import styles from "l_navigation/Menu/Item/Item.module.scss";

type tItem = {
	label: string;
	uri: string;
} & (
	| {
			handleSubmenu: any;
			theme: "expand";
	  }
	| {
			theme: "regural";
	  }
	| {
			level: 1 | 2 | 3;
			theme: "submenu";
	  }
);

export default function Item(props: tItem) {
	if (props.theme === "expand") {
		return (
			<div className={styles.wrapper}>
				<Link href={props.uri}>{props.label}</Link>
				<button onClick={() => props.handleSubmenu()}>
					<FaAngleDown />
				</button>
			</div>
		);
	} else if (props.theme === "regural") {
		return (
			<li className={styles.regural}>
				<Link href={props.uri}>{props.label}</Link>
			</li>
		);
	} else if (props.theme === "submenu") {
		return (
			<li className={styles.submenu} data-level={props.level}>
				<Link href={props.uri}>{props.label}</Link>
			</li>
		);
	}
}
