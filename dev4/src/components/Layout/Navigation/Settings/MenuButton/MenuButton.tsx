"use client";
import { MenuContext } from "context/MenuContext";
import styles from "l_navigation/Settings/MenuButton/MenuButton.module.scss";
import { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function MenuButton() {
	const {
		menu: { isOpen, toggle },
	} = useContext(MenuContext);
	console.log(isOpen);
	return (
		<motion.button
			className={styles.wrapper}
			onClick={toggle}
			style={{
				backgroundColor: isOpen ? "green " : "salmon",
			}}
			whileTap={{
				scale: 0.92,
			}}
		>
			<FaBars />
		</motion.button>
	);
}
