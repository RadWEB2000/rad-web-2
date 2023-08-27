import { getSocial } from "@default/lib/functions/getSocial";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Page/PostPage/Author/Author.module.scss";

type tAuthor = {
	cities: {
		city: string;
	}[];
	fullname: string;
	jobs: {
		jobName: string;
	}[];
	image: tImage;
	socials: {
		url: string;
	}[];
	uri: string;
};

export default function Author({
	cities,
	fullname,
	image,
	jobs,
	socials,
	uri,
}: tAuthor) {
	return (
		<div className={styles.wrapper}>
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
						quality={60}
					/>
				</figure>
			</div>
			<section className={styles.details}>
				<ul className={styles.socials}>
					{socials.map(({ url }, index) => {
						const { icon, name } = getSocial(url);
						return (
							<li className={styles.social} key={url} title={name}>
								<Link href={url} target="_blank" title={name}>
									{icon}
								</Link>
							</li>
						);
					})}
				</ul>
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
				<h3 className={styles.cities}>
					{cities.map(({ city }, index) => {
						if (index != 0) {
							return `, ${city}`;
						} else {
							return `${city}`;
						}
					})}
				</h3>
			</section>
		</div>
	);
}
