import { getDate } from "@default/lib/functions/getDate";
import { tImage } from "@default/ts/types";
import { CalendarDays, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/BlogCard/HomeBlogCard/HomeBlogCard.module.scss";

type tHomeBlogCard = {
	author: {
		firstname: string;
		lastname: string;
	};
	category: {
		name: string;
		uri: string;
	};
	date: string;
	image: tImage;
	status: string;
	title: string;
	uri: string;
};

export default function HomeBlogCard({
	author,
	category,
	date,
	image,
	status,
	title,
	uri,
}: tHomeBlogCard) {
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<Link className={styles.link} href={uri}>
			<li className={styles.wrapper}>
				<figure className={styles.image}>
					<div>
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
					</div>
				</figure>
				<section className={styles.info}>
					<div className={styles.content}>
						<h3
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
						<p
							className={styles.author}
						>{`${author.firstname} ${author.lastname}`}</p>
					</div>
					<div className={styles.details}>
						<Link className={styles.category} href={category.uri}>
							{category.name.toUpperCase()}
						</Link>
						<p className={styles.release}>
							<CalendarDays />
							{`${day} ${month} ${year}`}
						</p>
					</div>
				</section>
			</li>
		</Link>
	);
}
