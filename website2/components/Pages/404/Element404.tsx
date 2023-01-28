import styles from "./Element404.module.scss";
import { IntElement404 } from "./interface";
const Element404 = ({ content }: IntElement404) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<span>404</span>
			</div>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};
export default Element404;
