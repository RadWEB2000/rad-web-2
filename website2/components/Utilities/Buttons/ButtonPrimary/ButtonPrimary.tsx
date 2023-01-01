import Link from "next/link";
import styles from "./ButtonPrimary.module.scss";
import { IntButtonPrimary } from "./interface";
import { motion } from "framer-motion";
import { ReactElement } from "react";
const ButtonPrimary = ({
	path,
	title,
	variant,
}: IntButtonPrimary): ReactElement => {
	return (
		<div className={styles.wrapper} data-variant={variant}>
			<Link href={path} legacyBehavior rel="index follow">
				<motion.a
					whileHover={{
						scale: 1.05,
						filter: "brightness(120%)",
					}}
					whileTap={{
						scale: 0.95,
					}}
				>
					{title}
				</motion.a>
			</Link>
		</div>
	);
};
export default ButtonPrimary;
