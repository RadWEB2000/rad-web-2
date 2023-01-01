import BlogCardHomePage from "../../../../Utilities/Cards/BlogCards/BlogCardHomePage/BlogCardHomePage";
import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
import { ReactElement, useEffect, useState } from "react";
const Cards = ({ cards }: IntCards): ReactElement => {
	const [articlesNumber, setArticlesNumber] = useState(3);
	useEffect(() => {
		if (window !== undefined) {
			console.log(window.screen);
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
	return (
		<ul className={styles.wrapper}>
			{cards
				.slice(0, articlesNumber)
				.map(({ button, category, date, image, path, title }) => (
					<BlogCardHomePage
						button={button}
						category={category}
						date={date}
						image={image}
						key={title}
						path={path}
						title={title}
					/>
				))}
		</ul>
	);
};
export default Cards;
