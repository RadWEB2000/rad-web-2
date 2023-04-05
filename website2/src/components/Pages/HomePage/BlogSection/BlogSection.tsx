import BlogCard from "../../../../../src/components/Utilities/Cards/BlogCard/BlogCard";
import CardsWrapper from "../../../../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import SectionPage from "../../../../../src/components/Utilities/Section/SectionPage/SectionPage";
import styles from "./BlogSection.module.scss";
import { iSectionPage } from "../../../../../src/ts/interface";
import { ReactElement } from "react";
import { useVisibleArticlesHP } from "../../../../../src/lib/hooks/useVisibleArticlesHP";
import { tLang } from "../../../../ts/types";
interface iBlog extends iSectionPage {
	cards: {
		category: string;
		excerpt: string;
		image: string;
		lang: tLang;
		release: string | Date;
		title: string;
	}[];
}
const BlogSection = ({
	button,
	cards,
	content,
	title,
}: iBlog): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionPage button={button} content={content} title={title} />
			<CardsWrapper variant="hp-articles">
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
export default BlogSection;
