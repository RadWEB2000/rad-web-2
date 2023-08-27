import Article, {
	tArticle,
} from "@default/components/Pages/BlogPage/Articles/Article/Article";
import styles from "@default/components/Pages/BlogPage/Articles/Articles.module.scss";

export interface iArticles {
	articles: tArticle[];
}

export default function Articles({ articles }: iArticles) {
	return (
		<ul className={styles.wrapper}>
			{articles.map(
				({ author, category, excerpt, image, release, title, uri }) => {
					return (
						<Article
							author={author}
							category={category}
							excerpt={excerpt}
							image={image}
							key={title}
							release={release}
							title={title}
							uri={uri}
						/>
					);
				}
			)}
		</ul>
	);
}
