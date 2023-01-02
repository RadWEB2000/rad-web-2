import JobCard from "../../../../Utilities/Cards/JobCard/JobCard";
import SectionAboutPersonPage from "../../../../Utilities/Sections/SectionAboutPersonPage/SectionAboutPersonPage";
import styles from "./Jobs.module.scss";
import { IntJobs } from "./interface";
import { ReactElement } from "react";

const Jobs = ({ cards, content, title }: IntJobs): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionAboutPersonPage content={content} title={title} />
			<ol>
				{cards.map(({ content, date, subtitle, title }) => (
					<JobCard
						content={content}
						date={date}
						key={title}
						subtitle={subtitle}
						title={title}
					/>
				))}
			</ol>
		</div>
	);
};
export default Jobs;
