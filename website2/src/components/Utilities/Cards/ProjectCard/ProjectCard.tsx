import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { getDate } from "./../../../../lib/functions/getDate";
import { ReactElement } from "react";

interface iProjectCard {
	category: string;
	excerpt: string;
	image: string;
	isBig?: boolean;
	path: string;
	release: string;
	title: string;
	variant: "home" | "page";
}

const ProjectCard = ({
	category,
	excerpt,
	image,
	isBig = false,
	path,
	release,
	title,
	variant,
}: iProjectCard): ReactElement | null => {
	const { month, year } = getDate({
		date: release,
		lang: "pl",
		variant: "short",
	});
	if (variant === "home") {
		return (
			<Link href={path} legacyBehavior rel="index follow">
				<a
					className={styles.wrapper__home}
					data-size={isBig ? "big" : "small"}
					title={`${title} - ${category}`}
				>
					<figure className={styles.image}>
						<div>
							<Image
								alt={`${title} - ${category}`}
								fill
								src={image}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</div>
					</figure>
					<figcaption className={styles.content}>
						<div className={styles.category}>
							<p>{category}</p>
						</div>
						<h3 className={styles.title}>{title}</h3>
						{isBig && (
							<p
								className={styles.excerpt}
								dangerouslySetInnerHTML={{
									__html: excerpt.substring(0, 360) + "...",
								}}
							/>
						)}
					</figcaption>
				</a>
			</Link>
		);
	} else if (variant === "page") {
		return (
			<Link href={path} rel="index follow">
				<li className={styles.wrapper__page}>
					<div className={styles.image}>
						<figure>
							<Image
								alt={`${title} - ${month} ${year} | RadWEB`}
								fill
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								src={image}
								title={`${title} - ${month} ${year} | RadWEB`}
							/>
						</figure>
					</div>
					<section className={styles.content}>
						<p className={styles.release}>{`${month} ${year}`}</p>
						<h3 className={styles.title}>{title}</h3>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 100) + "...",
							}}
						/>
					</section>
				</li>
			</Link>
		);
	} else return null;
};

export default ProjectCard;
