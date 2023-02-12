import styles from "./Content.module.scss";
import { ReactElement } from "react";
import { IntContent } from "./interface";
const Content = ({ content }: IntContent): ReactElement => (
	<div
		className={styles.wrapper}
		dangerouslySetInnerHTML={{ __html: content }}
	/>
);
export default Content;
