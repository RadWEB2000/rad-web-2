import styles from "./ThemeButton.module.scss";
import { HiOutlineSun } from "react-icons/hi";
import { motion } from "framer-motion";
import { TbMoon } from "react-icons/tb";
import { useContext } from "react";
import { LayoutContext } from "./../../../../../context/LayoutProvider";

const ThemeButton = () => {
	const { theme } = useContext(LayoutContext);
	// console.log(theme.isLight);
	return (
		<button className={styles.wrapper} onClick={theme.handle}>
			{theme.isLight ? (
				<motion.span
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
				>
					<TbMoon />
				</motion.span>
			) : (
				<motion.span
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
				>
					<HiOutlineSun />
				</motion.span>
			)}
		</button>
	);
};

export default ThemeButton;
