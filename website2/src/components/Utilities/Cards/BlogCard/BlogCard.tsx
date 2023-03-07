import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.scss";
import { getDate } from "../../../../lib/functions/getDate";
import { ReactElement } from "react";
import { useRouter } from "next/router";

interface iBlogCard {
	excerpt: string;
	image: string;
	path: string;
	release: Date | string;
	title: string;
	quality?: number;
}

const BlogCard = ({
	excerpt,
	image,
	path,
	release,
	title,
	quality = 85,
}: iBlogCard): ReactElement => {
	const { locale } = useRouter();
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		variant: "short",
	});
	return (
		<li
			className={styles.wrapper}
			title={`${day} ${month?.toUpperCase()} ${year} - ${title}`}
		>
			<Link href={path} hrefLang={locale} rel="index follow">
				<div className={styles.image}>
					<figure>
						<Image
							alt={`${day} ${month?.toUpperCase()} ${year} - ${title}`}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={`${day} ${month?.toUpperCase()} ${year} - ${title}`}
							quality={quality}
						/>
					</figure>
				</div>
				<section className={styles.content}>
					<div className={styles.release}>
						<p>
							{day} {month} {year}
						</p>
					</div>
					<div className={styles.details}>
						<h3 className={styles.heading}>{title}</h3>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 80) + "...",
							}}
						/>
					</div>
				</section>
			</Link>
		</li>
	);
};
export default BlogCard;
