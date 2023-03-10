import Image from "next/image";
import Link from "next/link";
import styles from "./HeroPerson.module.scss";
import { CgMail, CgSmartphone } from "react-icons/cg";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { BiWorld } from "react-icons/bi";
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
			<section className={styles.content}>
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
								<Link href={item} title={`${getSocials({ path: item }).name}`}>
									{getSocials({ path: item }).icon}
								</Link>
							</li>
						))}
					</ul>
				)}
				{(email || phone || website) && (
					<ul className={styles.contact}>
						{phone && (
							<motion.li
								className={styles.contactItem}
								whileTap={{
									scale: 0.9,
								}}
							>
								<Link href={`tel:${phone}`}>
									<CgSmartphone />
								</Link>
							</motion.li>
						)}
						{website && (
							<motion.li
								className={styles.contactItem}
								whileTap={{
									scale: 0.9,
								}}
							>
								<Link href={`${website}`} rel="index follow" target="_blank">
									<span>
										<BiWorld />
									</span>
								</Link>
							</motion.li>
						)}

						{email && (
							<motion.li
								className={styles.contactItem}
								whileTap={{
									scale: 0.9,
								}}
							>
								<Link href={`mailto:${email}`}>
									<CgMail />
								</Link>
							</motion.li>
						)}
					</ul>
				)}
			</section>
		</header>
	);
};
export default HeroPerson;
