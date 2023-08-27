import { getDate } from "@default/lib/functions/getDate";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Pages/BlogPage/Articles/Article/Article.module.scss";

export type tArticle = {
	author: {
		fullname: string;
		image: tImage;
		uri: string;
	};
	category: {
		label: string;
		uri: string;
	};
	excerpt: string;
	image: tImage;
	title: string;
	release: string;
	uri: string;
};

export default function Article({
	author,
	category,
	excerpt,
	image,
	title,
	release,
	uri,
}: tArticle) {
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
			<div className={styles.featuredImage}>
				<figure className={styles.image}>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title}
						quality={35}
					/>
				</figure>
			</div>
			<div className={styles.details}>
				<div className={styles.info}>
					<p className={styles.release}>{`${day} ${month} ${year}`}</p>
					<Link className={styles.category} href={category.uri}>
						{category.label}
					</Link>
				</div>
				<div className={styles.content}>
					<Link href={uri}>
						<h2 className={styles.title}>{title}</h2>
					</Link>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{
							__html: excerpt.substring(0, 150).trim() + "...",
						}}
					/>
				</div>
				<div className={styles.author}>
					<figure className={styles.authorImage}>
						<Image
							alt={author.image.alt}
							fill
							src={author.image.src}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={author.image.title}
							quality={15}
						/>
					</figure>
					<div className={styles.authorContent}>
						<Link href={author.uri}>{author.fullname}</Link>
					</div>
				</div>
			</div>
		</li>
	);
}
