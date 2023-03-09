import styles from "./SubmitButton.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface iSubmitButton {
	content: string;
	icon: ReactElement;
	isValid: boolean;
}

const SubmitButton = ({
	content,
	icon,
	isValid,
}: iSubmitButton): ReactElement => {
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
