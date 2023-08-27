import { getSocial } from "@default/lib/functions/getSocial";
import { tSocial } from "@default/ts/types";
import Link from "next/link";
import styles from "@default/components/Layout/Footer/Socials/Social/Social.module.scss";

export default function Social({ url }: tSocial) {
	const { icon, name } = getSocial(url);

	return (
		<li className={styles.wrapper} title={name}>
			<Link href={url} target="_blank" title={name}>
				<span>{icon}</span>
			</Link>
		</li>
	);
}
