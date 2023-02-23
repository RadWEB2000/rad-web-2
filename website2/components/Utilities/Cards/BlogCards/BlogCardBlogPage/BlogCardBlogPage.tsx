import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCardBlogPage.module.scss";
import { IntBlogCardBlogPage } from "./interface";
import { ReactElement } from "react";
import getDate from "../../../../../lib/getDate";
const BlogCardBlogPage = ({
	category,
	date,
	excerpt,
	image,
	path,
	title,
}: IntBlogCardBlogPage): ReactElement => {
	const { day, month, year } = getDate({
		date: date,
		lang: "pl",
		variant: "shortname",
	});
	return (
		<li
			className={styles.wrapper}
			title={`${day} ${month?.toUpperCase()} ${year} - ${title} - ${category}`}
		>
			<Link href={path}>
				<div className={styles.image}>
					<figure>
						<Image
							alt={`${day} ${month?.toUpperCase()} ${year} - ${title} - ${category}`}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={`${day} ${month?.toUpperCase()} ${year} - ${title} - ${category}`}
							quality={85}
						/>
					</figure>
				</div>
				<div className={styles.content}>
					<div className={styles.date}>
						<p>
							{day} {month?.toLowerCase()} {year}
						</p>
					</div>
					<section className={styles.info}>
						<h3>{title}</h3>
						<div>
							<p>{category}</p>
						</div>
					</section>
				</div>
			</Link>
		</li>
	);
};
export default BlogCardBlogPage;
