import styles from "@default/components/Utils/Wrappers/RecommendedProjects/RecommendedProjects.module.scss";
import { tImage2 } from "@default/ts/types";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";

type tRecommendedProjects = {
	cards: {
		featuredImage: {
			node: tImage2;
		};
		date: string;
		title: string;
		uri: string;
	}[];
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
					.map(({ featuredImage, title, uri, date }) => {
						console.log(date);
						return (
							<ProjectCard
								image={featuredImage.node}
								key={title}
								title={title}
								uri={uri}
								theme="recommended"
							/>
						);
					})}
			</ul>
		</div>
	);
}
