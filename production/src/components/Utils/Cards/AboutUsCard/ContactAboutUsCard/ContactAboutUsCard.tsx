import Social from "@default/components/Utils/Social/Social";
import Image from "next/image";
import Link from "next/link";
import { VscMail } from "react-icons/vsc";
import { TiPhoneOutline } from "react-icons/ti";
import styles from "@default/components/Utils/Cards/AboutUsCard/ContactAboutUsCard/ContactAboutUsCard.module.scss";
type tContactAboutUsCard = {
	email: string;
	fullname: string;
	image: {
		altText: string;
		sourceUrl: string;
		title: string;
	};
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
	socialMedia: {
		url: string;
	}[];
	uri: string;
};

export default function ContactAboutUsCard({
	email,
	fullname,
	image,
	jobs,
	locations,
	socialMedia,
	phone,
	uri,
}: tContactAboutUsCard) {
	return (
		<li className={styles.wrapper}>
			<Link className={styles.link} href={uri}>
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
						quality={40}
					/>
				</figure>
				<section className={styles.box}>
					<ul className={styles.socials}>
						{socialMedia.map(({ url }) => {
							return <Social url={url} key={url} theme="contact" />;
						})}
					</ul>
					<h3
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: fullname }}
					/>
					<h4 className={styles.jobs}>
						{jobs.map(({ jobName }, index) => {
							if (index != 0) {
								return `, ${jobName}`;
							} else {
								return `${jobName}`;
							}
						})}
					</h4>
					<h4 className={styles.locations}>
						{locations.map(({ city }, index) => {
							if (index != 0) {
								return `, ${city}`;
							} else {
								return `${city}`;
							}
						})}
					</h4>
					<address className={styles.contact}>
						{typeof email !== null && (
							<Link className={styles.link} href={`mailto:${email}`}>
								<i>
									<VscMail />
								</i>
								<p dangerouslySetInnerHTML={{ __html: email }} />
							</Link>
						)}
						{typeof phone !== null && (
							<Link className={styles.link} href={`tel:${phone.value}`}>
								<i>
									<TiPhoneOutline />
								</i>
								<p dangerouslySetInnerHTML={{ __html: phone.label }} />
							</Link>
						)}
					</address>
				</section>
			</Link>
		</li>
	);
}
