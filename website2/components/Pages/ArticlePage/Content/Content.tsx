import styles from "./Content.module.scss";
import { IntContent } from "./interface";
const Content = ({ content }: IntContent) => {
	return (
		<section
			className={styles.wrapper}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};
export default Content;
