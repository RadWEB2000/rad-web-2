import SectionAboutPage from "../../../../Utilities/Sections/SectionAboutPage/SectionAboutPage";
import styles from "./Mission.module.scss";
import { IntMission } from "./interface";
import { ReactElement } from "react";
import MissionCard from "../../../../../src/components/Utilities/Cards/MissionCard/MissionCard";
const Mission = ({ cards, content, title }: IntMission): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionAboutPage content={content} title={title} />
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
