// import JobCard from "../../../../Utilities/Cards/JobCard/JobCard";
import SectionAboutPersonPage from "../../../../Utilities/Sections/SectionAboutPersonPage/SectionAboutPersonPage";
import styles from "./Jobs.module.scss";
import { ReactElement } from "react";
import JobCard, {
	iJobCard,
} from "../../../../../src/components/Utilities/Cards/JobCard/JobCard";

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
				<SectionAboutPersonPage content={content} title={title} />
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
