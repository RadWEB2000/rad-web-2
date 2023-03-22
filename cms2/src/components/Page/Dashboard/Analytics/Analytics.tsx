import Link from "next/link";
import { ReactElement } from "react";
import styles from "./Analytics.module.scss";

interface iAnalyticsItem {
	icon: ReactElement;
	title: string;
	value: number | string;
}

export interface iAnalytics {
	clicks: iAnalyticsItem;
	path: string;
	position: iAnalyticsItem;
	title: string;
	views: iAnalyticsItem;
}

const AnalyticsItem = ({
	icon,
	title,
	value,
}: iAnalyticsItem): ReactElement => {
	return (
		<li className={styles.item}>
			<span>{icon}</span>
			<p>{title}</p>
			<b>{value}</b>
		</li>
	);
};

const Analytics = ({
	clicks,
	path,
	position,
	title,
	views,
}: iAnalytics): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<ul>
				{clicks && (
					<AnalyticsItem
						icon={clicks.icon}
						title={clicks.title}
						value={clicks.value}
					/>
				)}
				{views && (
					<AnalyticsItem
						icon={views.icon}
						title={views.title}
						value={views.value}
					/>
				)}
				{position && (
					<AnalyticsItem
						icon={position.icon}
						title={position.title}
						value={position.value}
					/>
				)}
			</ul>
			<Link href={path}>{title}</Link>
		</div>
	);
};

export default Analytics;
