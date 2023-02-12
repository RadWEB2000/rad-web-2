import Image from "next/image";
import getSocials from "../../../../lib/getSocials";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { CgMail, CgSmartphone } from "react-icons/cg";
import { IntHero } from "./interface";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { VscGlobe } from "react-icons/vsc";
const Hero = ({
	cities,
	email,
	fullname,
	image,
	jobs,
	phone,
	socials,
	website,
}: IntHero): ReactElement => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.image}>
				<Image
					alt={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
					fill
					src={image}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
				/>
			</div>
			<div className={styles.content}>
				<section>
					<h1
						className={styles.fullname}
					>{`${fullname.firstname} ${fullname.lastname}`}</h1>
					<h2 className={styles.jobs}>{jobs}</h2>
					<h2 className={styles.cities}>{cities}</h2>
					{socials && (
						<ul className={styles.socials}>
							{socials.map((item, index) => (
								<li
									className={styles.social}
									key={index}
									title={`${getSocials({ path: item }).name}`}
								>
									<Link
										href={item}
										title={`${getSocials({ path: item }).name}`}
									>
										{getSocials({ path: item }).icon}
									</Link>
								</li>
							))}
						</ul>
					)}
					{(email || phone) && (
						<ul className={styles.contact}>
							{phone && (
								<li className={styles.contactItem}>
									<Link href={`tel:${phone}`}>
										<CgSmartphone />
									</Link>
								</li>
							)}
							{email && (
								<li className={styles.contactItem}>
									<Link href={`mailto:${email}`}>
										<CgMail />
									</Link>
								</li>
							)}
						</ul>
					)}
					{website?.visible && (
						<div className={styles.website}>
							<Link
								href={`${website.url}`}
								legacyBehavior
								rel="index follow"
								target="_blank"
							>
								<motion.a
									className={styles.websiteButton}
									whileTap={{
										scale: 0.9,
									}}
								>
									<span>
										<VscGlobe />
									</span>
									<p>{website.title}</p>
								</motion.a>
							</Link>
						</div>
					)}
				</section>
			</div>
		</header>
	);
};
export default Hero;
