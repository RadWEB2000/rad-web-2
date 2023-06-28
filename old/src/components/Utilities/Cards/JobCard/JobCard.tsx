import styles from "./JobCard.module.scss";
import { getDate } from "../../../../lib/functions/getDate";
import { ReactElement } from "react";

export interface iJobCard {
	company: string;
	content: string;
	time: {
		start: string;
		end: string;
	};
	workplace: string;
}

const getTime = (date: string): string => {
	const { month, year } = getDate({
		date: date,
		lang: "pl",
		variant: "short",
	});

	return `${month} ${year}`;
};

const JobCard = ({
	company,
	content,
	time,
	workplace,
}: iJobCard): ReactElement => {
	const { start, end } = {
		start: `${getTime(time.start)}`,
		end: `${getTime(time.end)}`,
	};

	return (
		<li className={styles.wrapper}>
			<div className={styles.date}>
				<p>{`${start} - ${end}`}</p>
			</div>
			<section className={styles.content}>
				<div className={styles.heading}>
					<h3>{company}</h3>
					<h4>{workplace}</h4>
				</div>
				<div className={styles.description}>
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</section>
		</li>
	);
};
export default JobCard;
