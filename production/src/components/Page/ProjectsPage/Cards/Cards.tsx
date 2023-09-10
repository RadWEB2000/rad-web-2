import styles from "@default/components/Page/ProjectsPage/Cards/Cards.module.scss";
import { tImage2 } from "@default/ts/types";
import ProjectCard from "@default/components/Utils/Cards/ProjectCard/ProjectCard";

type tCards = {
	cards?: {
		node: {
			title: string;
			uri: string;
			date: string;
			excerpt: string;
			featuredImage: {
				node: tImage2;
			};
		};
	}[];
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
						theme="regular"
					/>
				);
			})}
		</ul>
	);
}
