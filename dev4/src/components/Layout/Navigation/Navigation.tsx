import Brand from "l_navigation/Brand";
import Settings from "l_navigation/Settings";
import Menu from "l_navigation/Menu";
import { menu } from "data/menu";
import styles from "l_navigation/Navigation.module.scss";
import Socials from "l_navigation/Socials";
import { socials } from "data/socials";

export default function Navigation() {
	return (
		<nav className={styles.wrapper}>
			<div className={styles.brand}>
				<Brand label="Rad<br/>WEB" uri="#" />
			</div>
			<div className={styles.menu}>
				<Menu menu={menu} />
				<Socials socials={socials} />
			</div>
			<div className={styles.settings}>
				<Settings />
			</div>
		</nav>
	);
}
