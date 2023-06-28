import Link from "next/link";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { menu } from "@default/src/data/menu";
import { getSocial } from "@default/src/lib/functions/getSocial";
interface iHero {
	slogan: string;
	menu: {
		label: string;
		uri: string;
	}[];
	services: string[];
	socials: string[];
	title: string;
}
export const Hero = ({ slogan, menu, services, socials, title }: iHero) => {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h1 data-text={title}>{title}</h1>
				</header>
				<p>{slogan}</p>
			</section>
			<div>
				<motion.h2
					animate={{ x: ["100%", "-100%"] }}
					transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
				>{`${services.map((item, index) => {
					return item.toUpperCase();
				})}`}</motion.h2>
			</div>
			<ul className={styles.menu}>
				{menu.map(({ label, uri }) => {
					return (
						<li key={label}>
							<Link href={uri}>{label}</Link>
						</li>
					);
				})}
			</ul>
			<ul className={styles.socials}>
				{socials.map((item, index) => {
					const { icon, name } = getSocial(item);
					return (
						<li key={name}>
							<Link
								data-variant={name.toLowerCase()}
								href={item}
								rel="noindex follow"
								target="_blank"
							>
								{icon}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
