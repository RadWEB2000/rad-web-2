import Image from "next/image";
import Link from "next/link";
import styles from "./RegularBlogCard.module.scss";
import { getDate } from "@default/src/lib/functions/getDate";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

interface iRegularBlogCard {
	category: {
		label: string;
		uri: string;
	};
	excerpt: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	release: string;
	title: string;
	uri: string;
}

export const RegularBlogCard = ({
	category,
	excerpt,
	image,
	release,
	title,
	uri,
}: iRegularBlogCard) => {
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		type: "short",
	});
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
					quality={50}
				/>
			</figure>
			<div className={styles.details}>
				<div className={styles.category}>
					<Link href={category.uri} prefetch rel="index follow">
						{category.label}
					</Link>
				</div>
				<div className={styles.release}>
					<p>{`${day} ${month} ${year}`}</p>
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 140).trim() + "...",
					}}
				/>
				<div className={styles.button}>
					<Link href={uri} rel="index follow">
						<i>
							<HiArrowRight />
						</i>
					</Link>
				</div>
			</div>
		</motion.li>
	);
};
