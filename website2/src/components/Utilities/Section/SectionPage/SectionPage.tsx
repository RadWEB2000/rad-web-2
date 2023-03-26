import styles from "./SectionPage.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import RegularButton from "../../Buttons/RegularButton/RegularButton";
import { iSectionPage } from "../../../../ts/interface";

const scrollAnimation = (type: "heading" | "content", index: number) => {
	const { initial, scroll } = {
		initial: {
			opacity: type == "heading" ? 0.25 : 0,
			x: type == "heading" ? 50 : 0,
			y: type == "content" ? -15 : 0,
		},
		scroll: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: type === "heading" ? index * 0.13 : index * 0.013,
				deleay: 1,
			},
		},
	};
	return { initial, scroll };
};

const headingAnimation = (index: number) => {
	const { initial, scroll } = {
		initial: {
			opacity: 0.5,
			x: 150,
		},
		scroll: {
			opacity: 1,
			x: 0,
			transition: {
				duration: index * 0.13,
				deleay: 1,
			},
		},
	};
	return { initial, scroll };
};

const contentAnimation = (index: number) => {
	const { initial, scroll } = {
		initial: {
			opacity: 0,
			y: -150,
		},
		scroll: {
			opacity: 1,
			y: 0,
			transition: {
				duration: index * 0.013,
				deleay: 1,
			},
		},
	};
	return { initial, scroll };
};

const SectionPage = ({
	button,
	content,
	title,
}: iSectionPage): ReactElement => {
	const titleArray = title.split(" ");
	console.log(titleArray);
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>
				{title.split(" ").map((item, index) => (
					<>
						<motion.div
							style={{
								display: "inline-block",
							}}
							initial={scrollAnimation("heading", index).initial}
							whileInView={headingAnimation(index).scroll}
						>
							{item}
						</motion.div>{" "}
					</>
				))}
			</h2>
			{/* <motion.p
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
			/> */}
			<p className={styles.content}>
				{content.split(" ").map((item, index) => (
					<>
						<motion.span
							style={{
								display: "inline-block",
							}}
							initial={contentAnimation(index).initial}
							whileInView={contentAnimation(index).scroll}
						>
							{item}
						</motion.span>{" "}
					</>
				))}
			</p>
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
