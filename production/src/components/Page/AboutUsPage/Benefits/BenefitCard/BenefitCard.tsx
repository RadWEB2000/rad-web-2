import { tImage } from "@default/ts/types";
import Image from "next/image";
import styles from "@default/components/Page/AboutUsPage/Benefits/BenefitCard/BenefitCard.module.scss";

export type tBenefitCard = {
	content: string;
	image: tImage;
	index: number;
	title: string;
};

export default function BenefitCard({
	content,
	image,
	index,
	title,
}: tBenefitCard) {
	return (
		<li className={styles.wrapper}>
			<div className={styles.image}>
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
						title={image.alt}
						quality={40}
					/>
				</figure>
			</div>
			<section className={styles.details}>
				<span className={styles.index}>
					{index + 1 < 10 ? `0${index + 1}` : index + 1}
				</span>
				<h3
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<p
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</section>
		</li>
	);
}
