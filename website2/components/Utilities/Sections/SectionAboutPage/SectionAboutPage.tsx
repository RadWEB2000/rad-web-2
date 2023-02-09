import { motion } from "framer-motion";
import styles from "./SectionAboutPage.module.scss";
import { IntSectionAboutPage } from "./interface";
import { ReactElement } from "react";
const SectionAboutPage = ({
	content,
	title,
}: IntSectionAboutPage): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<motion.h2
				initial={{
					opacity: 0,
					visibility: "hidden",
					x: 50,
				}}
				whileInView={{
					opacity: 1,
					visibility: "visible",
					x: 0,
					transition: {
						duration: 1,
						delay: 0.15,
					},
				}}
				viewport={{ once: true }}
			>
				{title}
			</motion.h2>
			<motion.p
				dangerouslySetInnerHTML={{ __html: content }}
				initial={{
					opacity: 0,
					visibility: "hidden",
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					visibility: "visible",
					y: 0,
					transition: {
						duration: 1,
						delay: 0.15,
					},
				}}
				viewport={{ once: true }}
			/>
		</section>
	);
};
export default SectionAboutPage;
