import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import styles from "./ContactAboutUsCard.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export interface iContactAboutUsCard {
	contact: {
		phone: {
			label: string;
			url: string;
		};
		mail: {
			label: string;
			url: string;
		};
	};
	fullname: string;
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	uri: string;
}

export const ContactAboutUsCard = ({
	contact,
	fullname,
	image,
	uri,
}: iContactAboutUsCard) => {
	return (
		<motion.li className={styles.wrapper}>
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
						quality={60}
					/>
				</figure>
			</div>
			<div className={styles.content}>
				<h2>
					<Link href={uri} rel="index follow">
						{fullname}
					</Link>
				</h2>
				<address>
					<a href={contact.mail.url}>
						<i>
							<VscMail />
						</i>
						<p>{contact.mail.label}</p>
					</a>
					<a href={contact.phone.url}>
						<i>
							<FaPhoneAlt />
						</i>
						<p>{contact.phone.label}</p>
					</a>
				</address>
			</div>
		</motion.li>
	);
};
