import styles from "@default/components/Pages/HomePage/Statistics/Statistics.module.scss";

type tStatistic = {
	label: string;
	unit?: string;
	value: number;
};

interface iStatistics {
	cards: tStatistic[];
}

function Statistic({ label, unit, value }: tStatistic) {
	return (
		<li className={styles.card}>
			<span>{`${value} ${unit}`}</span>
			<h3>{label}</h3>
		</li>
	);
}

export default function Statistics({ cards }: iStatistics) {
	return (
		<ul className={styles.wrapper}>
			{cards.map(({ label, unit, value }, index: number) => {
				return (
					<Statistic key={index} label={label} unit={unit} value={value} />
				);
			})}
		</ul>
	);
}
