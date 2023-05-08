import JobCard, { iJobCard } from "../../../Utilities/Cards/JobCard/JobCard";
import SectionPage from "../../../Utilities/Section/SectionPage/SectionPage";
import styles from "./Jobs.module.scss";
import { ReactElement } from "react";

interface iJobs {
	cards: iJobCard[];
	content?: string;
	title?: string;
}

const Jobs = ({ cards, content, title }: iJobs): ReactElement => {
	console.log(cards);
	return (
		<div className={`section ${styles.wrapper}`}>
			{content !== undefined && title !== undefined && (
				<SectionPage content={content} title={title} />
			)}

			<ol>
				{cards.map(({ company, content, time, workplace }) => (
					<JobCard
						content={content}
						company={company}
						time={time}
						key={`${company} - ${workplace}`}
						workplace={workplace}
					/>
				))}
			</ol>
		</div>
	);
};
export default Jobs;
