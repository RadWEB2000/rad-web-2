import Link from "next/link";
import styles from "./Item.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface iItem {
	handleExpand?: MouseEventHandler;
	label: string;
	uri: string;
	type: "expand" | "regular" | "submenu";
}

export const Item = ({ handleExpand, label, type, uri }: iItem) => {
	if (type === "expand") {
		return (
			<div className={styles.expand}>
				<Link href={uri} rel="index follow">
					{label}
				</Link>
				<motion.button
					aria-label="expand"
					onClick={handleExpand}
					whileTap={{
						scale: 0.9,
					}}
				>
					<BsChevronDown />
				</motion.button>
			</div>
		);
	} else {
		return (
			<li className={type === "regular" ? styles.regular : styles.submenu}>
				<Link href={uri} rel="index follow">
					{label}
				</Link>
			</li>
		);
	}
};
