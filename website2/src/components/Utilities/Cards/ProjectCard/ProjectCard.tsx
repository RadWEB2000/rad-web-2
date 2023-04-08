import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { getDate } from "./../../../../lib/functions/getDate";
import { ReactElement } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import getStack from "./../../../../../lib/getStack";

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

interface iProjectCard2 {
	button: string;
	content: string;
	image: string;
	path: string;
	title: string;
	release: string | Date;
	stack?: string[];
}
export const ProjectCard2 = ({
	button,
	content,
	image,
	path,
	release,
	title,
	stack,
}: iProjectCard2) => {
	const { month, year } = getDate({
		date: release,
		lang: "pl",
		variant: "short",
	});
	return (
		<li className={styles.wrapper2}>
			<section>
				{stack && (
					<ul className={styles.stack}>
						{stack.map((item: string, index: number) => (
							<>
								{getStack(item).name !== null && (
									<li
										aria-label={`${getStack(item).name}`}
										className={styles.stack}
										title={`${getStack(item).name}`}
									>
										{getStack(item).icon}
									</li>
								)}
							</>
						))}
					</ul>
				)}
				<p className={styles.release}>{`${month} ${year}`}</p>
				<h3 className={styles.title}>{title}</h3>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: content.substring(0, 350) + "[...]",
					}}
				/>
				<div className={styles.button}>
					<Link href={path}>
						<span>{button}</span>
						<i>
							<HiOutlineArrowNarrowRight />
						</i>
					</Link>
				</div>
			</section>
			<div>
				<figure>
					<Image
						alt={`${title} - ${content}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				</figure>
			</div>
		</li>
	);
};
