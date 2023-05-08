import styles from "./MissionCard.module.scss";
import { ReactElement } from "react";
interface iMissionCard {
	content: string;
	icon: ReactElement;
	title: string;
}

const MissionCard = ({ content, icon, title }: iMissionCard): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<div>
				<span>{icon}</span>
			</div>
			<h3>{title}</h3>
			<p>{content}</p>
		</li>
	);
};

export default MissionCard;
