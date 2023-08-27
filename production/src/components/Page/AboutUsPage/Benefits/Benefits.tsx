import BenefitCard, {
	tBenefitCard,
} from "@default/components/Page/AboutUsPage/Benefits/BenefitCard/BenefitCard";
import { tImage } from "@default/ts/types";
import styles from "@default/components/Page/AboutUsPage/Benefits/Benefits.module.scss";

type tBenefits = {
	cards: {
		content: string;
		image: {
			altText: string;
			sourceUrl: string;
			title: string;
		};
		title: string;
	}[];
	title: string;
};

export default function Benefits({ cards, title }: tBenefits) {
	return (
		<div className={styles.wrapper}>
			<section className={styles.details}>
				<h2
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</section>
			<ul className={styles.cards}>
				{cards?.map(({ content, image, title }, index) => {
					return (
						<BenefitCard
							content={content}
							image={{
								alt: image.altText,
								src: image.sourceUrl,
								title: image.title,
							}}
							index={index}
							title={title}
							key={index}
						/>
					);
				})}
			</ul>
		</div>
	);
}
