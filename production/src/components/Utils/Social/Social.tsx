import { getSocial } from "@default/lib/functions/getSocial";
import Link from "next/link";
import styles from "@default/components/Utils/Social/Social.module.scss";

interface iSocial {
	theme?: "regular";
	url: string;
}

export default function Social({ theme = "regular", url }: iSocial) {
	const { icon, name } = getSocial(url);
	return (
		<li className={styles.wrapper} title={name} data-theme={theme}>
			<Link href={url} rel="index nofollow" target="_blank" title={name}>
				{icon}
			</Link>
		</li>
	);
}
