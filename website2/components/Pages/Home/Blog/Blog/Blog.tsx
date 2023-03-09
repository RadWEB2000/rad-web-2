import BlogCard from "../../../../../src/components/Utilities/Cards/BlogCard/BlogCard";
import CardsWrapper from "../../../../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import SectionHomePage from "../../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./Blog.module.scss";
import { iArticle } from "../../../../../src/ts/interface";
import { ReactElement } from "react";
import { useVisibleArticlesHP } from "../../../../../src/lib/hooks/useVisibleArticlesHP";
interface iBlog {
	button?: {
		path: string;
		title: string;
	};
	cards: iArticle[];
	content: string;
	title: string;
}
const Blog = ({ button, cards, content, title }: iBlog): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionHomePage button={button} content={content} title={title} />
			<CardsWrapper variant="articles">
				{cards
					.sort(
						(a, b) =>
							new Date(b.release).getTime() - new Date(a.release).getTime()
					)
					.slice(0, useVisibleArticlesHP())
					.map((article: any) => {
						const { category, excerpt, image, release, title, slug } = article;
						return (
							<BlogCard
								release={release}
								excerpt={excerpt}
								image={image}
								key={title}
								path={`/blog/${category}/${slug}`}
								title={title}
							/>
						);
					})}
			</CardsWrapper>
		</div>
	);
};
export default Blog;
