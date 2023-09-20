import styles from "@default/components/Page/ProjectsPage/Cards/Cards.module.scss";
import ProjectCard from "@default/components/Utils/Cards/ProjectCard2/ProjectCard";
import { iProjectCard } from "@default/ts/interfaces";

type tCards = {
	cards: iProjectCard[];
};

export default function Cards({ cards }: tCards) {
	return (
		<ul className={styles.wrapper}>
			{cards?.map(({ node: { date, excerpt, featuredImage, title, uri } }) => {
				return (
					<ProjectCard
						date={date}
						excerpt={excerpt}
						image={featuredImage.node}
						key={title}
						title={title}
						uri={uri}
						variant="projects"
					/>
				);
			})}
		</ul>
	);
}
