import { IntSectionAboutPage } from "./interface";
import styles from "./SectionAboutPage.module.scss";
import { ReactElement } from "react";
const SectionAboutPage = ({
	content,
	title,
}: IntSectionAboutPage): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<h2>{title}</h2>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</section>
	);
};
export default SectionAboutPage;
