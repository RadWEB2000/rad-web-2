import { IntArticles } from "./interface";
import BlogCardPage from "./../../../Utilities/Cards/BlogCard/BlogCardPage/BlogCardPage";
import { ArticlesStyles } from "./styles";
const Articles = ({ posts, search }: IntArticles) => {
	return (
		<ArticlesStyles>
			{posts
				.filter(
					(item) =>
						item.date.toLowerCase().includes(search.toLowerCase()) ||
						item.content.toLowerCase().includes(search.toLowerCase()) ||
						item.title.toLowerCase().includes(search.toLowerCase())
				)
				.map(({ content, date, image, path, title }, key) => (
					<BlogCardPage
						content={content}
						image={image}
						key={key}
						path={path}
						time={date}
						title={title}
					/>
				))}
		</ArticlesStyles>
	);
};
export default Articles;
