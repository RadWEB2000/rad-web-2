import { getSocial } from "@default/src/lib/functions/getSocial";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroPerson.module.scss";

interface iHeroPerson {
	cities: string;
	fullname: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	jobs: string;
	socials: string[];
}

export const HeroPerson = ({
	cities,
	fullname,
	image,
	jobs,
	socials,
}: iHeroPerson) => {
	return (
		<div className={`headerWrapper ${styles.wrapper}`}>
			<header className={styles.content}>
				<section className={styles.details}>
					<header className={styles.fullname} data-text={fullname}>
						<h1>{fullname}</h1>
					</header>
					<h2 className={styles.jobs}>{jobs}</h2>
					<h2 className={styles.cities}>{cities}</h2>
				</section>
				<ul className={styles.socials}>
					{socials?.map((item: string, index: number) => {
						const { icon, name } = getSocial(item);
						return (
							<li className={styles.social} key={index} title={name}>
								<Link
									data-variant={name.toLowerCase()}
									href={item}
									rel="index nofollow"
									target="_blank"
									title={name}
								>
									{icon}
								</Link>
							</li>
						);
					})}
				</ul>
			</header>
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
						title={image.title ? image.title : ""}
						quality={80}
					/>
				</figure>
			</div>
		</div>
	);
};
