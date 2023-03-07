import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { getDate } from "./../../../../lib/functions/getDate";

interface iProjectCard {
	category: string;
	excerpt: string;
	image: string;
	isBig?: boolean;
	path: string;
	release: string;
	size?: "big" | "small";
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
	size = "small",
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
					className={styles.wrapper}
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
		if (size === "big") {
			return (
				<li className={styles.wrapper__big}>
					<section className={styles.content}>
						<p className={styles.release}>{`${month} ${year}`}</p>
						<h2 className={styles.title}>
							<Link href={path} rel="index follow">
								{title}
							</Link>
						</h2>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 170) + "...",
							}}
						/>
					</section>
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
				</li>
			);
		} else {
			return (
				<Link href={path} rel="index follow">
					{" "}
					<li className={styles.wrapper__small}>
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
		}
	} else return null;
};

export default ProjectCard;
