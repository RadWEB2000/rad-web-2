import Card, {
	tCard,
} from "@default/components/Page/HomePage/Statistics/Card/Card";
import styles from "@default/components/Page/HomePage/Statistics/Statistics.module.scss";

type tStatistics = {
	cards: tCard[];
};

export default function Statistics({ cards }: tStatistics) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				{cards.map(({ icon, description, value }) => {
					return (
						<Card
							icon={icon.split(":")[0]}
							key={description}
							description={description}
							value={value}
						/>
					);
				})}
			</div>
		</div>
	);
}
