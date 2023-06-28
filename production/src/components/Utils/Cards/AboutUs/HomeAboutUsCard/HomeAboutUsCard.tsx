import Image from "next/image";
import Link from "next/link";
import styles from "./HomeAboutUsCard.module.scss";
import { HiArrowRight } from "react-icons/hi";

interface iHomeAboutUsCard {
	fullname: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	jobs: string;
	uri: string;
	variant?: "big" | "small";
}

export const HomeAboutUsCard = ({
	fullname,
	image,
	jobs,
	uri,
	variant,
}: iHomeAboutUsCard) => {
	return (
		<li className={styles.wrapper} data-variant={variant}>
			<figure className={styles.image}>
				<Image
					alt={image.alt}
					fill
					src={image.src}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image?.title}
					quality={70}
				/>
			</figure>
			<div className={styles.content}>
				<h3 className={styles.fullname}>{fullname}</h3>
				<p className={styles.jobs}>{jobs}</p>
				<div className={styles.button}>
					<Link href={uri} rel="index follow">
						<i>
							<HiArrowRight />
						</i>
					</Link>
				</div>
			</div>
		</li>
	);
};
