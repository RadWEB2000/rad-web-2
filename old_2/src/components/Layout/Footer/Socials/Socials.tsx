import Link from "next/link";
import styles from "./Socials.module.scss";
import { getSocial } from "@default/src/lib/functions/getSocial";
import { menu } from "@default/src/data/menu";

export const Socials = () => {
	return (
		<ul className={styles.wrapper}>
			{menu.socials.map(({ color, url }) => {
				const { icon, name } = getSocial(url);
				return (
					<li className={styles.item} key={url} title={name}>
						<Link href={url} rel="index follow" title={name}>
							{icon}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
