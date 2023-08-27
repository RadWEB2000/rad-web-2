import styles from "@default/components/Utils/Wrappers/RecommendedProjects/RecommendedProjects.module.scss";
import RecommendedProject from "../../Cards/ProjectCard/RecommendedProject/RecommendedProject";

type tRecommendedProjects = {
	cards: {
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				title: string;
			};
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
					.map(({ featuredImage: { node }, title, uri, date }) => {
						console.log(date);
						return (
							<RecommendedProject
								image={{
									alt: node.altText,
									src: node.sourceUrl,
									title: node.title,
								}}
								key={title}
								title={title}
								uri={uri}
							/>
						);
					})}
			</ul>
		</div>
	);
}
