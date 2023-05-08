import styles from "./SubmitButton.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

interface iSubmitButton {
	content: string;
	isValid: boolean;
}

const SubmitButton = ({ content, isValid }: iSubmitButton): ReactElement => {
	return (
		<motion.button
			className={styles.wrapper}
			data-disabled={!isValid}
			disabled={!isValid}
			type="submit"
			whileTap={{ scale: isValid ? 0.93 : 1 }}
		>
			<span>{content}</span>
			<i>
				<RiSendPlaneLine />
			</i>
		</motion.button>
	);
};
export default SubmitButton;
