import Content from "../Content/Content";
import Slides from "../Slides/Slides/Slides";
import styles from "./Hero.module.scss";
import { IntHero } from "./interface";
import { ReactElement } from "react";
const Hero = ({ buttons, content, title }: IntHero): ReactElement => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.content}>
				<Content buttons={buttons} content={content} title={title} />
			</div>
			<div className={styles.slides}>
				<Slides />
			</div>
		</header>
	);
};
export default Hero;
