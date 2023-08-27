import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/AboutUsCard/RegularAboutUsCard/RegularAboutUsCard.module.scss";

export type tRegularAboutUsCard = {
	fullname: string;
	image: tImage;
	jobs: {
		jobName: string;
	}[];
	uri: string;
};

export default function RegularAboutUsCard({
	fullname,
	image,
	jobs,
	uri,
}: tRegularAboutUsCard) {
	return (
		<li className={styles.wrapper}>
			<div className={styles.image}>
				<figure>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title}
						quality={50}
					/>
				</figure>
			</div>
			<section className={styles.details}>
				<Link className={styles.fullname} href={uri}>
					<h2>{fullname}</h2>
				</Link>
				<h3 className={styles.jobs}>
					{jobs.map(({ jobName }, index) => {
						if (index != 0) {
							return `, ${jobName}`;
						} else {
							return `${jobName}`;
						}
					})}
				</h3>
			</section>
		</li>
	);
}
