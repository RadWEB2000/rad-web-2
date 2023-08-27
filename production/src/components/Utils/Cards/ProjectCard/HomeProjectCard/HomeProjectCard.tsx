import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/ProjectCard/HomeProjectCard/HomeProjectCard..module.scss";

export type tHomeProjectCard = {
	button: string;
	excerpt: string;
	image: tImage;
	title: string;
	uri: string;
};

export default function HomeProjectCard({
	button,
	excerpt,
	image,
	title,
	uri,
}: tHomeProjectCard) {
	return (
		<li className={styles.wrapper}>
			<div className={styles.image__box}>
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
			</div>
			<section className={styles.content}>
				<header className={styles.title}>
					<h3 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 265).trim() + "...",
					}}
				/>
				<div className={styles.button}>
					<Link href={uri}>{button}</Link>
				</div>
			</section>
		</li>
	);
}
