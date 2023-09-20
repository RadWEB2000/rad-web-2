import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/ProjectCard2/ProjectCard.module.scss";

type tProjectCard = {
	date: string;
	excerpt: string;
	image: tImage2;
	title: string;
	variant: "home" | "projects" | "recommended";
	uri: string;
};

export default function ProjectCard(props: tProjectCard) {
	const { date, excerpt, image, variant, title, uri } = props;
	const { month, year } = getDate({
		date: date,
		type: "short",
	});

	return (
		<li className={styles.wrapper} data-variant={variant}>
			<Link className={styles.box} href={uri}>
				<div className={styles.image_box}>
					<figure className={styles.image}>
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
							quality={50}
						/>
					</figure>
				</div>
				<section className={styles.details}>
					<aside className={styles.release_box}>
						<p className={styles.release}>{`${month} ${year}`}</p>
					</aside>
					<article className={styles.content}>
						<header className={styles.title_box}>
							<h3
								className={styles.title}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						</header>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 230).trim(),
							}}
						/>
					</article>
				</section>
			</Link>
		</li>
	);
}
