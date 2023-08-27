import { tSocial } from "@default/ts/types";
import Social from "./Social/Social";
import styles from "./Socials.module.scss";

interface iSocials {
	socials: tSocial[];
}

export default function Socials({ socials }: iSocials) {
	return (
		<ul className={styles.wrapper}>
			{socials.map(({ url }) => {
				return <Social key={url} url={url} />;
			})}
		</ul>
	);
}
