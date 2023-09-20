import styles from "@default/components/Utils/Wrappers/RecommendedProjects/RecommendedProjects.module.scss";
import { tImage2 } from "@default/ts/types";
import ProjectCard from "@default/components/Utils/Cards/ProjectCard/ProjectCard";
import { iPersonProjectCard } from "@default/ts/interfaces";

type tRecommendedProjects = {
	cards: iPersonProjectCard[];
	title: string;
};

export default function RecommendedProjects({
	cards,
	title,
}: tRecommendedProjects) {
	return (
		<div className={styles.wrapper}>
			<header>
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</header>
			<ul>
				{cards
					.sort(
						(a: { date: string }, b: { date: string }) =>
							new Date(a.date).getTime() - new Date(b.date).getTime()
					)
					.reverse()
					.slice(0, 4)
					.map(({ featuredImage, title, uri, date, excerpt }) => {
						return (
							<ProjectCard
								date={date}
								excerpt={excerpt}
								image={featuredImage.node}
								key={title}
								title={title}
								uri={uri}
								variant="recommended"
							/>
						);
					})}
			</ul>
		</div>
	);
}
