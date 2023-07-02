import styles from "./Mission.module.scss";

interface iMissionCard {
	icon: JSX.Element;
	title: string;
}

interface iMission {
	cards: iMissionCard[];
	content: {
		primary: string;
		secondary?: string;
	};
	title: string;
}

const MissionCard = ({ icon, title }: iMissionCard) => {
	return (
		<li className={styles.card}>
			<span>
				<i>{icon}</i>
			</span>
			<h4>{title}</h4>
		</li>
	);
};

export const Mission = ({ cards, content, title }: iMission) => {
	return (
		<article className={styles.wrapper}>
			<header>
				<h2 data-text={title}>{title}</h2>
			</header>
			<p dangerouslySetInnerHTML={{ __html: content.primary }} />
			<div>
				<ul>
					{cards.map(({ icon, title }) => {
						return <MissionCard icon={icon} key={title} title={title} />;
					})}
				</ul>
			</div>
			{content.secondary && (
				<p dangerouslySetInnerHTML={{ __html: content.secondary }} />
			)}
		</article>
	);
};
