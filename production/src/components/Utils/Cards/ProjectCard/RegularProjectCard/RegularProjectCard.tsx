import { getDate } from "@default/lib/functions/getDate";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/ProjectCard/RegularProjectCard/RegularProjectCard.module.scss";

type tRegularProjectCard = {
	date: string;
	excerpt: string;
	image: tImage;
	title: string;
	uri: string;
};

export default function RegularProjectCard({
	date,
	excerpt,
	image,
	title,
	uri,
}: tRegularProjectCard) {
	const { month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
			<Link className={styles.link} href={uri}>
				<div className={styles.image}>
					<figure>
						<Image
							alt={image.alt}
							fill
							loading="lazy"
							src={image.src}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={50}
						/>
					</figure>
				</div>
				<div className={styles.details}>
					<div className={styles.date}>
						<p>{`${month} ${year}`}</p>
					</div>
					<section className={styles.content}>
						<header className={styles.title}>
							<h2 dangerouslySetInnerHTML={{ __html: title }} />
						</header>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 170).trim() + "...",
							}}
						/>
					</section>
				</div>
			</Link>
		</li>
	);
}
