import { tImage } from "@default/ts/types";
import Image from "next/image";
import styles from "@default/components/Utils/Hero/Hero.module.scss";

interface iHero {
	content: string;
	image: tImage;
	isSvg?: boolean;
	title: string;
}

export default function Hero({ content, image, isSvg = false, title }: iHero) {
	return (
		<div className={`hero ${styles.wrapper}`}>
			<div className={styles.content}>
				<section className={styles.details}>
					<header className={styles.title}>
						<h1>{title}</h1>
					</header>
					<p
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</section>
			</div>
			<div className={styles.featuredImage}>
				<figure className={styles.image}>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: isSvg ? "contain" : "cover",
							objectPosition: "center",
						}}
						title={image.title}
						quality={90}
					/>
				</figure>
			</div>
		</div>
	);
}
