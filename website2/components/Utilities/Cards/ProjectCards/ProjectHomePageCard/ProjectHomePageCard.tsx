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
			<a className={styles.wrapper} title={`${title} - ${category}`}>
				<figure className={styles.image}>
					<Image
						alt={`${title} - ${category}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				</figure>
				<figcaption className={styles.content}>
					<p className={styles.category}>{category.name}</p>
					<h3 className={styles.title}>{title}</h3>
					{isBig && (
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					)}
				</figcaption>
			</a>
		</Link>
	);
};

export default ProjectHomePageCard;
