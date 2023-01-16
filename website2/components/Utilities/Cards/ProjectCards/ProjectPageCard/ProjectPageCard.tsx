import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectPageCard.module.scss";
import { IntProjectPageCard } from "./interface";

const ProjectPageCard = ({
	category,
	excerpt,
	image,
	path,
	title,
}: IntProjectPageCard) => {
	return (
		<li className={styles.wrapper}>
			<Link href={path}>
				<figure>
					<div>
						<Image
							alt={`${title} - ${category.name}`}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={`${title} - ${category.name}`}
							quality={85}
						/>
					</div>
				</figure>
				<figcaption>
					<h3>{title}</h3>
					<div>
						<p>{category.name}</p>
					</div>
					<p dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 125) }} />
				</figcaption>
			</Link>
		</li>
	);
};
export default ProjectPageCard;
