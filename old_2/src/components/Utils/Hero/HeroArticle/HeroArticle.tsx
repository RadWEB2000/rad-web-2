import Image from "next/image";
import Link from "next/link";
import styles from "./HeroArticle.module.scss";
import { getDate } from "@default/src/lib/functions/getDate";

interface iHeroArticle {
	// breadcrumbs: {
	// 	path: string;
	// 	title: string;
	// }[];
	category: {
		label: string;
		uri: string;
	};
	excerpt: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	isProject: boolean;
	release: string;
	title: string;
}

export const HeroArticle = ({
	// breadcrumbs,
	category,
	excerpt,
	image,
	isProject,
	release,
	title,
}: iHeroArticle) => {
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		type: "short",
	});
	console.log(day);
	return (
		<div className={`headerWrapper ${styles.wrapper}`}>
			<section className={styles.content}>
				<figure className={styles.image}>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title ? image.title : ""}
						quality={80}
					/>
				</figure>
				{/* <ul className={styles.breadcrumbs}>
					{breadcrumbs?.map(({ path, title }, index) => {
						if (index !== 0) {
							return (
								<>
									<span>/</span>
									<li>
										<Link href={path}>{title}</Link>
									</li>
								</>
							);
						} else {
							return (
								<li key={title}>
									<Link href={path}>{title}</Link>
								</li>
							);
						}
					})}
				</ul> */}
				<header className={styles.title} data-text={title}>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{ __html: excerpt }}
				/>
				<span className={styles.line} />
				<div className={styles.details}>
					<p className={styles.release}>{`${
						isProject ? "" : day
					} ${month} ${year}`}</p>
					<Link href="#" legacyBehavior>
						<a className={styles.author}>Radosław Adamczyk</a>
					</Link>
				</div>
			</section>
			<div className={styles.image}>
				<div>
					<figure>
						<Image
							alt={image.alt}
							fill
							src={image.src}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title ? image.title : ""}
							quality={20}
						/>
					</figure>
				</div>
			</div>
		</div>
	);
};
