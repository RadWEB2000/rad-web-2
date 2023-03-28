import styles from "./WhyUsSection.module.scss";
import { ReactElement } from "react";

interface iWhyUsSectionCard {
	content: string;
	count: number | string;
	title: string;
}

interface iWhyUsSection {
	cards: {
		content: string;
		title: string;
	}[];
	content: string;
	title: string;
}

const WhyUsSectionCard = ({
	content,
	count,
	title,
}: iWhyUsSectionCard): ReactElement => {
	return (
		<li className={styles.card}>
			<span>{count}</span>
			<h3>{title}</h3>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</li>
	);
};

const WhyUsSection = ({ cards, content, title }: iWhyUsSection) => {
	return (
		<div className={styles.wrapper}>
			<section>
				<h2>{title}</h2>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
			{cards && (
				<ul>
					{cards.map(({ content, title }, index) => (
						<WhyUsSectionCard
							content={content}
							count={`0${index + 1}`}
							key={title}
							title={title}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
export default WhyUsSection;
