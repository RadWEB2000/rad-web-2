import RecommendedBlogCard from "../../Cards/BlogCard/RecommendedBlogCard/RecommendedBlogCard";
import styles from "@default/components/Utils/Wrappers/RecommendedArticles/RecommendedArticles.module.scss";

type tRecommendedArticles = {
	cards: {
		date: string;
		excerpt: string;
		featuredImage: {
			node: {
				altText: string;
				sourceUrl: string;
				title: string;
			};
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
					.map(({ date, excerpt, featuredImage: { node }, title, uri }) => {
						return (
							<RecommendedBlogCard
								date={date}
								excerpt={excerpt}
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
