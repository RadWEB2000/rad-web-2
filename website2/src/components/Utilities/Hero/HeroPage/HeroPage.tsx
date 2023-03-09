import styles from "./HeroPage.module.scss";
import { ReactElement } from "react";
interface iHeroPage {
	content: string;
	title: string;
}
const HeroPage = ({ content, title }: iHeroPage): ReactElement => {
	return (
		<header className={styles.wrapper}>
			<h1>{title}</h1>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</header>
	);
};
export default HeroPage;
