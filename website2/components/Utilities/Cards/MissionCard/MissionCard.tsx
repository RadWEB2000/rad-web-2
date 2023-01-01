import styles from "./MissionCard.module.scss";
import { IntMissionCard } from "./interface";
const MissionCard = ({ content, icon, title }: IntMissionCard) => {
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
