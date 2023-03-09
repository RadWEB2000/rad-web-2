import Image from "next/image";
import Link from "next/link";
import styles from "./HeroPerson.module.scss";
import { CgMail, CgSmartphone } from "react-icons/cg";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { VscGlobe } from "react-icons/vsc";
import getSocials from "../../../../lib/functions/getSocials";
import { tFullname } from "../../../../ts/types";
interface iHeroPerson {
	cities: string;
	email?: string;
	fullname: tFullname;
	image: string;
	jobs: string;
	phone?: string;
	socials: string[];
	website?: string;
}
const HeroPerson = ({
	cities,
	email,
	fullname,
	image,
	jobs,
	phone,
	socials,
	website,
}: iHeroPerson): ReactElement => {
	return (
		<header className={styles.wrapper}>
			{/* <div className={styles.image}>
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
			</div> */}
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
					{website && (
						<div className={styles.website}>
							<Link
								href={`${website}`}
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
								</motion.a>
							</Link>
						</div>
					)}
				</section>
			</div>
		</header>
	);
};
export default HeroPerson;
