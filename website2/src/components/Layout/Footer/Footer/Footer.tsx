import Author from "../Author/Author";
import Info from "../Details/Info/Info";
import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import Socials from "../Details/Socials/Socials";
import styles from "./Footer.module.scss";
interface iFooter {
	info: {
		address: string;
		nip?: number | string;
		regon?: number | string;
		title: string;
	};
	socials: string[];
}
const Footer = ({ info, socials }: iFooter) => {
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
						<Info
							address={info.address}
							nip={info.nip}
							regon={info.regon}
							title={info.title}
						/>
					</div>
				</div>
				<Author />
			</footer>
		</>
	);
};
export default Footer;
