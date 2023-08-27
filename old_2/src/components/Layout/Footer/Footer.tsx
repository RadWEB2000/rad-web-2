import styles from "./Footer.module.scss";
import { Author } from "./Author/Author";
import { Details } from "./Details/Details";
import { Menu } from "./Menu/Menu";
import { Socials } from "./Socials/Socials";

export const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<div>
				<Menu />
				<Details />
			</div>
			<span />
			<div>
				<Author />
				<Socials />
			</div>
		</footer>
	);
};
