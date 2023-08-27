import styles from "@default/components/Layout/Footer/Socials/Socials.module.scss";
import Social from "@default/components/Utils/Social/Social";

export interface iSocials {
	socialMedia: {
		url: string;
	}[];
}

export default function Socials({ socialMedia }: iSocials) {
	return (
		<ul className={styles.wrapper}>
			{socialMedia.map(({ url }) => {
				return <Social key={url} url={url} />;
			})}
		</ul>
	);
}
