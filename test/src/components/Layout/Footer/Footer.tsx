import styles from "@default/components/Layout/Footer/Footer.module.scss";
import { cities } from "@default/data/cities";
import Author from "./Author/Author";
import Socials from "./Socials/Socials";
import { socials } from "@default/data/socials";
import Menu from "./Menu/Menu";
import { footer } from "@default/data/footer";
import Brand from "./Brand/Brand";

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.brand}>
				<Brand />
			</div>
			<div className={styles.menu}>
				<Menu menu={footer} />
			</div>
			<div className={styles.author}>
				<Author />
			</div>
			<div className={styles.socials}>
				<Socials socials={socials} />
			</div>
		</footer>
	);
}
