import Analytics, { iAnalytics } from "../Analytics/Analytics";
import News, { iNews } from "../News/News";
import Recent, { iRecent } from "../Recent/Recent";
import WelcomeCard, { iWelcomeCard } from "../WelcomeCard/WelcomeCard";
import styles from "./DashboardGrid.module.scss";
interface iDashboardGrid {
	analytics: iAnalytics;
	news: iNews;
	welcomeCard: iWelcomeCard;
	recent: iRecent;
}

const DashboardGrid = ({
	analytics,
	news,
	recent,
	welcomeCard,
}: iDashboardGrid) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.welcome}>
				<WelcomeCard image={welcomeCard.image} title={welcomeCard.title} />
			</span>
			<span className={styles.recent}>
				<Recent items={recent.items} />
			</span>
			<span className={styles.analytics}>
				<Analytics
					clicks={analytics.clicks}
					path={analytics.path}
					position={analytics.position}
					title={analytics.title}
					views={analytics.views}
				/>
			</span>
			<span className={styles.news}>
				<News items={news.items} path={news.path} title={news.title} />
			</span>
		</div>
	);
};
export default DashboardGrid;
