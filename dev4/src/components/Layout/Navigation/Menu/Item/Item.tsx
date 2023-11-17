"use client";
import Link from "next/link";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import styles from "l_navigation/Menu/Item/Item.module.scss";
import { AnimatePresence, motion } from "framer-motion";
type tItem = {
	label: string;
	uri: string;
} & (
	| {
			isExpanded: boolean;
			level: 1 | 2;
			handleSubmenu: () => void;
			theme: "expand";
	  }
	| {
			theme: "regural";
	  }
	| {
			level?: 1 | 2;
			theme: "submenu";
	  }
);

export default function Item(props: tItem) {
	if (props.theme === "expand") {
		return (
			<div className={styles.expand} data-level={props.level}>
				<Link href={props.uri}>{props.label}</Link>
				<motion.button onClick={props.handleSubmenu}>
					<AnimatePresence>
						{props.isExpanded ? <FaAngleUp /> : <FaAngleDown />}
					</AnimatePresence>
				</motion.button>
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
			<li className={styles.submenu} data-level={props.level ? props.level : 1}>
				<Link href={props.uri}>{props.label}</Link>
			</li>
		);
	}
}
