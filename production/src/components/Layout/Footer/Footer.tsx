import Author, {
	iAuthor,
} from "@default/components/Layout/Footer/Author/Author";
import Details, {
	iDetails,
} from "@default/components/Layout/Footer/Details/Details";
import Socials, {
	iSocials,
} from "@default/components/Layout/Footer/Socials/Socials";
import Menu, { iMenu } from "@default/components/Layout/Footer/Menu/Menu";
import styles from "@default/components/Layout/Footer/Footer.module.scss";

interface iFooter extends iAuthor, iDetails, iMenu, iSocials {}

export default function Footer({ brand, details, menu, socialMedia }: iFooter) {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.menu}>
				<Menu menu={menu} />
			</div>
			<div className={styles.details}>
				<Details details={details} />
			</div>
			<div className={styles.author}>
				<Author brand={brand} />
			</div>
			<div className={styles.socials}>
				<Socials socialMedia={socialMedia} />
			</div>
		</footer>
	);
}
