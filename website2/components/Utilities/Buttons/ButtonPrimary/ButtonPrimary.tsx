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
		<Link href={path} legacyBehavior rel="index follow">
			<motion.a
				className={styles.wrapper}
				data-variant={variant}
				whileTap={{
					scale: 0.95,
				}}
			>
				{title}
				<i className="bx bx-right-arrow-alt" />
			</motion.a>
		</Link>
	);
};
export default ButtonPrimary;
