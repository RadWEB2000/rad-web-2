import styles from "./SectionPage.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import RegularButton from "../../Buttons/RegularButton/RegularButton";
import { iSectionPage } from "../../../../ts/interface";
const SectionPage = ({
	button,
	content,
	title,
}: iSectionPage): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<motion.h2
				className={styles.title}
				initial={{
					opacity: 0,
					visibility: "hidden",
					x: -50,
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
				className={styles.content}
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
			{button && (
				<motion.div
					className={styles.button}
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
					<RegularButton
						path={button.path}
						title={button.title}
						variant="secondary"
					/>
				</motion.div>
			)}
		</section>
	);
};
export default SectionPage;
