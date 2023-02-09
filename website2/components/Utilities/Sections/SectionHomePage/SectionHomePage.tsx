import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import { motion } from "framer-motion";
import styles from "./SectionHomePage.module.scss";
import { IntSectionHomePage } from "./interface";
import { ReactElement } from "react";
const SectionHomePage = ({
	button,
	content,
	title,
}: IntSectionHomePage): ReactElement => {
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
					<ButtonPrimary
						path={button.path}
						title={button.title}
						variant="secondary"
					/>
				</motion.div>
			)}
		</section>
	);
};
export default SectionHomePage;
