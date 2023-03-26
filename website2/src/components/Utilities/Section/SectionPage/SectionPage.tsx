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
	const handleInView = (index: number) => {
		const { content, heading } = {
			heading: {
				initial: {
					opacity: 0.75,
					x: 50,
				},
				scroll: {
					opacity: 1,
					x: 0,
					transition: {
						delay: 1,
						duration: index + 0.05,
					},
				},
			},
			content: {
				initial: {
					visibility: "hidden",
					opacity: 0.8,
					y: -25,
				},
				scroll: {
					opacity: 1,
					visibility: "visible",
					y: 0,
					transition: {
						delay: 1,
						duration: index + 0.0015,
					},
				},
			},
		};

		return { content, heading };
	};

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
				// viewport={{ once: true }}
			>
				{title}
			</motion.h2>
			<motion.p
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
				initial={{
					opacity: 0,
					visibility: "hidden",
					y: -50,
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
				// viewport={{ once: true }}
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
