import styles from "./JobCard.module.scss";
import { IntJobCard } from "./interface";
import { ReactElement } from "react";
const JobCard = ({
	content,
	date,
	subtitle,
	title,
}: IntJobCard): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<div className={styles.date}>
				<p>{date}</p>
			</div>
			<section className={styles.content}>
				<div className={styles.heading}>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
				</div>
				<div className={styles.description}>
					<p dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</section>
		</li>
	);
};
export default JobCard;
