import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Pages/HomePage/Blog/Card/Card.module.scss";
import { getDate } from "@default/lib/functions/getDate";
import { iAuthor, iImage, iLink } from "@default/ts/interfaces";

export interface iCard extends iAuthor, iImage, iLink {
	excerpt: string;
	release: string;
	title: string;
}

export default function Card({
	author,
	excerpt,
	image,
	label,
	rel,
	release,
	title,
	uri,
}: iCard) {
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
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
					quality={70}
				/>
			</figure>
			<div className={styles.info}>
				<div className={styles.details}>
					<p>{`${day} ${month} ${year}`}</p>
				</div>
				<section className={styles.content}>
					<h3>{title}</h3>
					<p
						dangerouslySetInnerHTML={{
							__html: excerpt.substring(0, 120).trim() + "..",
						}}
					/>
					<div>
						<Link href={uri}>{label}</Link>
					</div>
				</section>
				<div className={styles.author}>
					<figure>
						<Image
							alt={author.image.alt}
							fill
							src={author.image.src}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={author.image.title}
							quality={24}
						/>
					</figure>
					<div>
						<Link href={author.uri}>{author.fullname}</Link>
					</div>
				</div>
			</div>
		</li>
	);
}
