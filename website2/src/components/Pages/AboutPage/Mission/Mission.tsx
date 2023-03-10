import MissionCard from "../../../Utilities/Cards/MissionCard/MissionCard";
import SectionPage from "../../../Utilities/Section/SectionPage/SectionPage";
import styles from "./Mission.module.scss";
import { ReactElement } from "react";

interface iMission {
	cards: {
		content: string;
		icon: ReactElement;
		title: string;
	}[];
	content: string;
	title: string;
}

const Mission = ({ cards, content, title }: iMission): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`} id="misja">
			<SectionPage content={content} title={title} />
			<ul>
				{cards.map(({ content, icon, title }) => (
					<MissionCard
						content={content}
						icon={icon}
						key={title}
						title={title}
					/>
				))}
			</ul>
		</div>
	);
};
export default Mission;
