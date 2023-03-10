import Author from "../Author/Author";
import Info from "../Details/Info/Info";
import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import Socials from "../Details/Socials/Socials";
import styles from "./Footer.module.scss";
import { IntFooter } from "./interface";
const Footer = ({ socials }: IntFooter) => {
	return (
		<>
			<Map />
			<footer className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.menu}>
						<Menu />
					</div>
					<div className={styles.details}>
						<Socials socials={socials} />
						<Info nip={82301093901} regon={3102938128039} />
					</div>
				</div>
				<Author />
			</footer>
		</>
	);
};
export default Footer;
