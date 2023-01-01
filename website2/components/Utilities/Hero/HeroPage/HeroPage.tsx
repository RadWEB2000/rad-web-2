import styles from "./HeroPage.module.scss";
import { IntHeroPage } from "./interface";
import { ReactElement } from "react";
const HeroPage = ({ content, title }: IntHeroPage): ReactElement => {
	return (
		<header className={styles.wrapper}>
			<h1>{title}</h1>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</header>
	);
};
export default HeroPage;
