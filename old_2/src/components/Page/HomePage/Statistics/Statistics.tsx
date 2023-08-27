import { stat } from "@default/src/data/stat";
import styles from "./Statistics.module.scss";

interface iStatisticElement {
	icon: JSX.Element;
	title: string;
	value: number;
	unit?: string;
}

interface iStatistics {
	statistics: iStatisticElement[];
}

const StatisticElement = ({ icon, title, value, unit }: iStatisticElement) => {
	return (
		<li className={styles.card}>
			<span>
				<i>{icon}</i>
			</span>
			<p>{`${value}${unit}`}</p>
			<h3>{title}</h3>
		</li>
	);
};

export const Statistics = ({ statistics }: iStatistics) => {
	return (
		<div className={styles.wrapper}>
			{statistics.map(({ icon, title, value, unit }) => {
				return (
					<StatisticElement
						icon={icon}
						key={title}
						title={title}
						value={value}
						unit={unit}
					/>
				);
			})}
		</div>
	);
};
