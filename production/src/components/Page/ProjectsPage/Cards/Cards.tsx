import RegularProjectCard from "@default/components/Utils/Cards/ProjectCard/RegularProjectCard/RegularProjectCard";
import styles from "@default/components/Page/ProjectsPage/Cards/Cards.module.scss";

type tCards = {
	cards?: {
		node: {
			title: string;
			uri: string;
			date: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
			};
		};
	}[];
};

export default function Cards({ cards }: tCards) {
	return (
		<ul className={styles.wrapper}>
			{cards?.map(({ node: { date, excerpt, featuredImage, title, uri } }) => {
				return (
					<RegularProjectCard
						date={date}
						excerpt={excerpt}
						image={{
							alt: featuredImage.node.altText,
							src: featuredImage.node.sourceUrl,
							title: featuredImage.node.title,
						}}
						key={title}
						title={title}
						uri={uri}
					/>
				);
			})}
		</ul>
	);
}
