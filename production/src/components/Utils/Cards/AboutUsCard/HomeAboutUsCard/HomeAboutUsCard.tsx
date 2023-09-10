import { tImage2 } from "@default/ts/types";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/AboutUsCard/HomeAboutUsCard/HomeAboutUsCard.module.scss";

export type tHomeAboutUsCard = {
	fullname: string;
	image: tImage2;
	jobs: {
		jobName: string;
	}[];

	uri: string;
};

export default function HomeAboutUsCard({
	fullname,
	image,
	jobs,
	uri,
}: tHomeAboutUsCard) {
	return (
		<li className={styles.wrapper}>
			<figure className={styles.image}>
				<Image
					alt={image.altText}
					fill
					src={image.sourceUrl}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image.title}
					quality={75}
				/>
			</figure>
			<div className={styles.content}>
				<section className={styles.title}>
					<h3 dangerouslySetInnerHTML={{ __html: fullname }} />
				</section>
				<ul className={styles.jobs}>
					{jobs.map(({ jobName }) => {
						return (
							<li key={jobName}>
								<h4>{jobName}</h4>
							</li>
						);
					})}
				</ul>
				<div className={styles.button}>
					<Link href={uri}>
						<GoArrowRight />
					</Link>
				</div>
			</div>
		</li>
	);
}
