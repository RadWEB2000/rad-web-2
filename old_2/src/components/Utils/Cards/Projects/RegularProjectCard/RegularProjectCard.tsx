import Image from "next/image";
import Link from "next/link";
import styles from "./RegularProjectCard.module.scss";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

interface iRegularProjectCard {
	categories: {
		name: string;
		// uri: string;
	}[];
	excerpt: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	title: string;
	uri: string;
}

export const RegularProjectCard = ({
	categories,
	excerpt,
	image,
	title,
	uri,
}: iRegularProjectCard) => {
	return (
		<motion.li
			className={styles.wrapper}
			initial={{ opacity: 0, x: -50, scale: 0 }}
			animate={{ opacity: 1, x: 0, scale: 1 }}
			exit={{ opacity: 0, x: 50, scale: 0 }}
		>
			<figure className={styles.image}>
				<Image
					alt={image.alt}
					fill
					src={image.src}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image?.title}
					quality={70}
				/>
			</figure>
			<div className={styles.content}>
				<div className={styles.details}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.button}>
						<Link href={uri} rel="index follow">
							<i>
								<HiArrowRight />
							</i>
						</Link>
					</div>
				</div>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 125).trim() + "...",
					}}
				/>
			</div>
		</motion.li>
	);
};
