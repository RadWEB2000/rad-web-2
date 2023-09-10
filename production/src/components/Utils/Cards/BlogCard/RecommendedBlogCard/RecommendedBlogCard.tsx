import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/BlogCard/RecommendedBlogCard/RecommendedBlogCard.module.scss";

export type tRecommendedBlogCard = {
	date: string;
	excerpt: string;
	image: tImage2;
	title: string;
	uri: string;
};

export default function RecommendedBlogCard({
	date,
	excerpt,
	image,
	title,
	uri,
}: tRecommendedBlogCard) {
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
			<Link className={styles.link} href={uri}>
				<figure className={styles.image}>
					<div>
						<Image
							alt={image.altText}
							fill
							loading="lazy"
							src={image.sourceUrl}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={45}
						/>
					</div>
				</figure>
				<section className={styles.content}>
					<p className={styles.date}>{`${day} ${month} ${year}`}</p>
					<header className={styles.title}>
						<h2 dangerouslySetInnerHTML={{ __html: title }} />
					</header>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{
							__html: excerpt.substring(0, 140).trim() + "...",
						}}
					/>
				</section>
			</Link>
		</li>
	);
}
