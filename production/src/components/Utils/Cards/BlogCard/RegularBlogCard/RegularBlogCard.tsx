import { getDate } from "@default/lib/functions/getDate";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/BlogCard/RegularBlogCard/RegularBlogCard.module.scss";

type tRegularBlogCard = {
	author: {
		firstname: string;
		lastname: string;
	};
	category: {
		name: string;
		uri: string;
	};
	date: string;
	excerpt: string;
	image: tImage;
	title: string;
	uri: string;
};

export default function RegularBlogCard({
	author,
	category,
	date,
	excerpt,
	image,
	title,
	uri,
}: tRegularBlogCard) {
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
			<Link className={styles.box} href={uri}>
				<figure className={styles.image}>
					<div>
						<Image
							alt={image.alt}
							fill
							src={image.src}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={60}
						/>
					</div>
				</figure>
				<div className={styles.info}>
					<div className={styles.details}>
						<Link className={styles.category} href={category.uri}>
							{category.name}
						</Link>
						<p className={styles.release}>{`${day} ${month} ${year}`}</p>
					</div>
					<section className={styles.content}>
						<header className={styles.title}>
							<h3>{title}</h3>
						</header>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 170).trim() + "...",
							}}
						/>
					</section>
					<div className={styles.author}>
						<p>{`${author.firstname} ${author.lastname}`}</p>
					</div>
				</div>
			</Link>
		</li>
	);
}
