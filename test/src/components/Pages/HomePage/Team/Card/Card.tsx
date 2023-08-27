import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "@default/components/Pages/HomePage/Team/Card/Card.module.scss";

export type tCard = {
	cities: string[];
	excerpt: string;
	fullname: string;
	image: tImage;
	jobs: string[];
	uri: string;
};

export default function Card({
	cities,
	excerpt,
	fullname,
	image,
	jobs,
	uri,
}: tCard) {
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
						quality={85}
					/>
				</figure>
			</div>
			<div className={styles.content}>
				<section className={styles.details}>
					<header className={styles.fullname}>
						<h2>{fullname}</h2>
					</header>
					<h3 className={styles.cities}>
						{cities.map((item: string, index: number) => {
							if (index !== 0) return `, ${item}`;
							else return item;
						})}
					</h3>
					<h3 className={styles.jobs}>
						{jobs.map((item: string, index: number) => {
							if (index !== 0) return `, ${item}`;
							else return item;
						})}
					</h3>
				</section>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 150).trim() }}
				/>
				<div className={styles.button}>
					<Link href={uri}>
						<span>
							<AiOutlineArrowRight />
						</span>
					</Link>
				</div>
			</div>
		</li>
	);
}
