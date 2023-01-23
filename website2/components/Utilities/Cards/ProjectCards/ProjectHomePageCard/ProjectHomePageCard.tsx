import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectHomePageCard.module.scss";
import { IntProjectHomePageCard } from "./interface";
import { ReactElement } from "react";
const ProjectHomePageCard = ({
	category,
	excerpt,
	image,
	isBig,
	path,
	title,
}: IntProjectHomePageCard): ReactElement => {
	return (
		<Link href={path} legacyBehavior rel="index follow">
			<a
				className={styles.wrapper}
				data-size={isBig ? "big" : "small"}
				title={`${title} - ${category.name}`}
			>
				<figure className={styles.image}>
					<div>
						<Image
							alt={`${title} - ${category.name}`}
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
						<p>{category.name}</p>
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
};

export default ProjectHomePageCard;
