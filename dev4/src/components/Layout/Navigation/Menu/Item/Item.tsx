"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import styles from "l_navigation/Menu/Item/Item.module.scss";
import { Dispatch, SetStateAction } from "react";

type tItem = {
	label: string;
	uri: string;
} & (
	| {
			level: 1 | 2;
			handleSubmenu: () => void;
			theme: "expand";
	  }
	| {
			theme: "regural";
	  }
	| {
			theme: "submenu";
	  }
);

export default function Item(props: tItem) {
	if (props.theme === "expand") {
		return (
			<div className={styles.expand} data-level={props.level}>
				<Link href={props.uri}>{props.label}</Link>
				<button onClick={props.handleSubmenu}>
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
			<li className={styles.submenu}>
				<Link href={props.uri}>{props.label}</Link>
			</li>
		);
	}
}
