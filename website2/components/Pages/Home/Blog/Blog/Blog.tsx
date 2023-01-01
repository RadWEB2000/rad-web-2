import Cards from "../Cards/Cards";
import SectionHomePage from "../../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./Blog.module.scss";
import { IntBlog } from "./interface";
import { ReactElement } from "react";
const Blog = ({ button, cards, content, title }: IntBlog): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionHomePage button={button} content={content} title={title} />
			<Cards cards={cards} />
		</div>
	);
};
export default Blog;
