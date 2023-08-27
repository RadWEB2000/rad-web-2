import { tAuthorCard, tImage, tLink } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Pages/HomePage/Projects/Card/Card.module.scss";

type tCategory = {
	label: string;
	uri: string;
};

export type tCard = {
	author: tAuthorCard;
	categories: tCategory[];
	excerpt: string;
	image: tImage;
	link: tLink;
	title: string;
};

function Category({ label, uri }: tCategory) {
	return (
		<li className={styles.category}>
			<Link href={uri}>{label}</Link>
		</li>
	);
}

export default function Card({
	author,
	categories,
	excerpt,
	image,
	link,
	title,
}: tCard) {
	return (
		<li className={styles.wrapper}>
			<div className={styles.imageWrapper}>
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
						quality={75}
					/>
				</figure>
			</div>
			<section className={styles.content}>
				<ul className={styles.categories}>
					{categories.map(({ label, uri }) => {
						return <Category key={label} label={label} uri={uri} />;
					})}
				</ul>
				<div className={styles.info}>
					<h3 className={styles.title}>{title}</h3>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{
							__html: excerpt.substring(0, 150).trim(),
						}}
					/>
					<div className={styles.button}>
						<Link href={link.uri}>{link.label}</Link>
					</div>
				</div>
			</section>
		</li>
	);
}
