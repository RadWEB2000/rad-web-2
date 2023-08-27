import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroProject.module.scss";
interface iHeroProject {
	excerpt: string;
	image: {
		alt: string;
		src: string;
		title: string;
	};
	title: string;
	website?: {
		label: string;
		uri: string;
	};
}

export const HeroProject = ({
	excerpt,
	image,
	title,
	website,
}: iHeroProject) => {
	return (
		<div className={`headerWrapper ${styles.wrapper}`}>
			<div className={styles.details}>
				<header className={styles.title} data-text={title}>
					<h1>{title}</h1>
				</header>
				<div className={styles.website}>
					{website && (
						<Link href={website.uri} legacyBehavior rel="index nofollow">
							<motion.a
								whileTap={{
									scaleX: 0.98,
								}}
							>
								<span>{website.label}</span>
								<i>
									<FiExternalLink />
								</i>
							</motion.a>
						</Link>
					)}
				</div>
				<div className={styles.excerpt}>
					<p dangerouslySetInnerHTML={{ __html: excerpt }} />
				</div>
			</div>
			<figure className={styles.image}>
				<Image
					alt={image.alt}
					fill
					src={image.src}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image.title}
					quality={95}
				/>
			</figure>
		</div>
	);
};
