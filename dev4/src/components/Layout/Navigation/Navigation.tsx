import { menu } from "data/menu";
import { socials } from "data/socials";
import Brand from "l_navigation/Brand";
import Menu from "l_navigation/Menu";
import styles from "l_navigation/Navigation.module.scss";
import Settings from "l_navigation/Settings";
import Socials from "l_navigation/Socials";

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
