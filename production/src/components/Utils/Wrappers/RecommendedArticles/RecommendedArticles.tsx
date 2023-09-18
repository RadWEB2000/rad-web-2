import { tImage2 } from "@default/ts/types";
import styles from "@default/components/Utils/Wrappers/RecommendedArticles/RecommendedArticles.module.scss";
import BlogCard from "@default/components/Utils/Cards/BlogCard/BlogCard";

type tRecommendedArticles = {
	cards: {
		categories: {
			edges: {
				node: {
					name: string;
					uri: string;
				};
			}[];
		};
		date: string;
		excerpt: string;
		featuredImage: {
			node: tImage2;
		};
		title: string;
		uri: string;
	}[];
	title: string;
};

export default function RecommendedArticles({
	cards,
	title,
}: tRecommendedArticles) {
	return (
		<div className={styles.wrapper}>
			<header>
				<h2 dangerouslySetInnerHTML={{ __html: title }} />
			</header>
			<ul>
				{cards
					.slice(0, 4)
					.map(({ categories, date, excerpt, featuredImage, title, uri }) => {
						return (
							<BlogCard
								category={categories.edges[0].node}
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
