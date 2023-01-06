import styles from "./SubmitButton.module.scss";
import { IntSubmitButton } from "./interface";
import { motion } from "framer-motion";
import { ReactElement } from "react";
const SubmitButton = ({
	content,
	icon,
	isValid,
}: IntSubmitButton): ReactElement => {
	return (
		<motion.button
			className={styles.wrapper}
			disabled={!isValid}
			type="submit"
			whileTap={{ scale: 0.93 }}
		>
			{content}
			<i>
				<span>{icon}</span>
			</i>
		</motion.button>
	);
};
export default SubmitButton;
