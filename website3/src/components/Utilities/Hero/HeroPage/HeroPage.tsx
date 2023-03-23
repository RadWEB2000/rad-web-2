import styles from "./HeroPage.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";
interface iHeroPage {
	content: string;
	title: string;
}
const HeroPage = ({ content, title }: iHeroPage): ReactElement => {
	return (
		<header className={styles.wrapper}>
			<motion.h1
				initial={{
					x: -10,
				}}
				animate={{
					x: 0,
				}}
			>
				{title}
			</motion.h1>
			<motion.p
				dangerouslySetInnerHTML={{ __html: content }}
				initial={{
					x: 10,
				}}
				animate={{
					x: 0,
				}}
			/>
		</header>
	);
};
export default HeroPage;
