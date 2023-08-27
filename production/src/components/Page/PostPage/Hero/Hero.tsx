import { getDate } from "@default/lib/functions/getDate";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Page/PostPage/Hero/Hero.module.scss";

type tHero = {
	author: {
		fullname: string;
		uri: string;
	};
	category: {
		name: string;
		uri: string;
	};
	date: string;
	excerpt: string;
	image: tImage;
	title: string;
};

export default function Hero({
	author,
	category,
	date,
	excerpt,
	image,
	title,
}: tHero) {
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<div className={styles.wrapper}>
			<section className={styles.box}>
				<div className={styles.content}>
					<header className={styles.title}>
						<h1 dangerouslySetInnerHTML={{ __html: title }} />
					</header>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
				</div>
				<div className={styles.details}>
					<Link className={styles.category} href={category.uri}>
						{category.name}
					</Link>
					<p className={styles.date}>{`${day} ${month} ${year}`}</p>
					<Link className={styles.author} href={author.uri}>
						{author.fullname}
					</Link>
				</div>
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
			</section>
		</div>
	);
}
