import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./Alert.module.scss";

interface iAlerts {
	information: string;
	variant: "none" | "success" | "error";
	visible?: boolean;
}

export const Alerts = ({ information, variant, visible = false }: iAlerts) => {
	return (
		<motion.div
			animate={{
				opacity: "visible",
			}}
			className={styles.wrapper}
			data-variant={variant}
			data-visible={visible}
			exit={{
				opacity: "hidden",
			}}
			initial={{
				opacity: "hidden",
			}}
		>
			<i>
				<MdDone />
			</i>
			<p>{information}</p>
		</motion.div>
	);
};
