import styles from "./Summary.module.scss";
import { IntSummary } from "./interface";
import { ReactElement } from "react";
const Summary = ({ content, list, title }: IntSummary): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<h2>{title}</h2>
			{content && <p dangerouslySetInnerHTML={{ __html: content }} />}
			<ul>
				{list.map((item, index) => (
					<li dangerouslySetInnerHTML={{ __html: item }} key={index} />
				))}
			</ul>
		</section>
	);
};
export default Summary;
