import Link from "next/link";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { IntButtonSecondary } from "./interface";
import styles from "./ButtonSecondary.module.scss";
const ButtonSecondary = ({ path, title }: IntButtonSecondary): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<Link href={path} legacyBehavior rel="index follow">
				<motion.a>{title}</motion.a>
			</Link>
		</div>
	);
};
export default ButtonSecondary;
