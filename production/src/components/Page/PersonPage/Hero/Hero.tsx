import { tImage } from "@default/ts/types";
import Image from "next/image";
import { VscHome, VscMail } from "react-icons/vsc";
import { TiPhoneOutline } from "react-icons/ti";
import Link from "next/link";
import styles from "@default/components/Page/PersonPage/Hero/Hero.module.scss";
import { getSocial } from "@default/lib/functions/getSocial";

type tHero = {
	adress: string;
	email: string;
	fullname: string;
	image: tImage;
	jobs: {
		jobName: string;
	}[];
	locations: {
		city: string;
	}[];
	phone: {
		label: string;
		value: string;
	};
	socials?: {
		url: string;
	}[];
};

export default function Hero({
	adress,
	email,
	fullname,
	image,
	jobs,
	locations,
	phone,
	socials,
}: tHero) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.hero}>
				<div className={styles.image}>
					<figure>
						<Image
							alt={image.alt}
							fill
							loading="eager"
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
				<section className={styles.content}>
					{socials && (
						<ul className={styles.socials}>
							{socials.map(({ url }) => {
								const { icon, name } = getSocial(url);
								return (
									<li className={styles.social} key={url} title={name}>
										<Link href={url} rel="index nofollow" title={name}>
											{icon}
										</Link>
									</li>
								);
							})}
						</ul>
					)}
					<header className={styles.title}>
						<h1 dangerouslySetInnerHTML={{ __html: fullname }} />
					</header>
					<h2 className={styles.jobs}>
						{jobs.map(({ jobName }, index) => {
							if (index != 0) {
								return `, ${jobName}`;
							} else {
								return `${jobName}`;
							}
						})}
					</h2>
					<h2 className={styles.locations}>
						{locations.map(({ city }, index) => {
							if (index != 0) {
								return `, ${city}`;
							} else {
								return `${city}`;
							}
						})}
					</h2>
				</section>
			</div>
			<div className={styles.contact}>
				<ul>
					{email && (
						<li className={styles.item__link}>
							<Link href={`mailto:${email}`}>
								<i>
									<VscMail />
								</i>
								<p>{email}</p>
							</Link>
						</li>
					)}
					{adress && (
						<li className={styles.item}>
							<i>
								<VscHome />
							</i>
							<p
								dangerouslySetInnerHTML={{
									__html: adress,
								}}
							/>
						</li>
					)}
					{phone && (
						<li className={styles.item__link}>
							<Link href={`tel:${phone.value}`}>
								<i>
									<TiPhoneOutline />
								</i>
								<p>{phone.label}</p>
							</Link>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}
