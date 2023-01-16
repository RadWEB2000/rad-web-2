import Author from "../Author/Author";
import RecommendedArticle from "../RecommendedArticle/RecommendedArticle";
import styles from "./Details.module.scss";
import { IntDetails } from "./interface";
import { ReactElement } from "react";
const Details = ({ article, author }: IntDetails): ReactElement => {
	return (
		<>
			<span className={styles.spacer} />
			<aside className={styles.wrapper}>
				<div className={styles.article}>
					<RecommendedArticle
						heading={article.heading}
						image={article.image}
						path={article.path}
						title={article.title}
					/>
				</div>
				<div className={styles.author}>
					<Author
						fullname={{
							firstname: author.fullname.firstname,
							lastname: author.fullname.lastname,
						}}
						image={author.image}
						jobs={author.image}
						path={author.path}
					/>
				</div>
			</aside>
		</>
	);
};
export default Details;
