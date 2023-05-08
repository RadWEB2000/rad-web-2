import styles from "./WhyUsSection.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface iWhyUsSectionCard {
	content: string;
	count: number | string;
	title: string;
}

interface iWhyUsSection {
	cards: {
		content: string;
		title: string;
	}[];
	content: string;
	title: string;
}

const WhyUsSectionCard = ({
	content,
	count,
	title,
}: iWhyUsSectionCard): ReactElement => {
	return (
		<li className={styles.card}>
			<motion.span
				initial={{
					y: -50,
					opacity: 0,
					visibility: "hidden",
				}}
				whileInView={{
					y: 0,
					opacity: 1,
					visibility: "visible",
					transition: {
						duration: 1.25,
					},
				}}
			>
				{count}
			</motion.span>
			<motion.h3
				initial={{
					x: -50,
					opacity: 0,
					visibility: "hidden",
				}}
				whileInView={{
					x: 0,
					opacity: 1,
					visibility: "visible",
					transition: {
						duration: 1.25,
					},
				}}
			>
				{title}
			</motion.h3>
			<motion.p
				dangerouslySetInnerHTML={{ __html: content }}
				initial={{
					y: 50,
					opacity: 0,
					visibility: "hidden",
				}}
				whileInView={{
					y: 0,
					opacity: 1,
					visibility: "visible",
					transition: {
						duration: 1.25,
					},
				}}
			/>
		</li>
	);
};

const WhyUsSection = ({ cards, content, title }: iWhyUsSection) => {
	return (
		<>
			<div className={styles.wrapper}>
				<section>
					<motion.h2
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
								duration: 0.5,
								delay: 0.15,
							},
						}}
					>
						{title}
					</motion.h2>
					<motion.p
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
								duration: 0.67,
								delay: 0.15,
							},
						}}
					/>
				</section>
				{cards && (
					<ul>
						{cards.map(({ content, title }, index) => (
							<WhyUsSectionCard
								content={content}
								count={`0${index + 1}`}
								key={title}
								title={title}
							/>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
export default WhyUsSection;
