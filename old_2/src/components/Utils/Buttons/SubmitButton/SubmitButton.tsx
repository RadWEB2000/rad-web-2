import styles from "./SubmitButton.module.scss";
import { RiSendPlaneLine } from "react-icons/ri";

export interface iSubmitButton {
	label: string;
}

export const SubmitButton = ({ label }: iSubmitButton) => {
	return (
		<div className={styles.wrapper}>
			<button>
				<span>{label}</span>
				<i>
					<RiSendPlaneLine />
				</i>
			</button>
		</div>
	);
};
