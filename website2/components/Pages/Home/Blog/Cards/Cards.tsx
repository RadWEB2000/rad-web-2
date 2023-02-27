import BlogCardHomePage from "../../../../Utilities/Cards/BlogCards/BlogCardHomePage/BlogCardHomePage";
import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
import { ReactElement, useEffect, useState } from "react";
import BlogCardBlogPage from "../../../../Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
const Cards = ({ cards }: IntCards): ReactElement => {
	const [articlesNumber, setArticlesNumber] = useState(3);
	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth <= 1000) {
				setArticlesNumber(2);
			} else {
				setArticlesNumber(3);
			}
			window.addEventListener("resize", () => {
				if (window.innerWidth <= 1000) {
					setArticlesNumber(2);
				} else {
					setArticlesNumber(3);
				}
			});
		}
	}, []);
	console.log(cards);
	return (
		<ul className={styles.wrapper}>
			{cards
				.sort(
					(a, b) =>
						new Date(b.release).getTime() - new Date(a.release).getTime()
				)
				.slice(0, articlesNumber)
				.map((article: any) => {
					const { category, excerpt, image, release, title, slug } = article;
					return (
						<BlogCardBlogPage
							category={category}
							date={release}
							excerpt={excerpt}
							image={image}
							key={title}
							path={`/blog/${category}/${slug}`}
							title={title}
						/>
					);
				})}
		</ul>
	);
};
export default Cards;
