import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/ProjectCard/RecommendedProject/RecommendedProject.module.scss";

type tRecommendedProject = {
	image: tImage;
	title: string;
	uri: string;
};

export default function RecommendedProject({
	image,
	title,
	uri,
}: tRecommendedProject) {
	return (
		<li className={styles.wrapper}>
			<Link href={uri}>
				<div>
					<figure>
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
							quality={40}
						/>
					</figure>
				</div>
				<section>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</section>
			</Link>
		</li>
	);
}
