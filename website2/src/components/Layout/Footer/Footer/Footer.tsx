import Author from "../Author/Author";
import Info from "../Details/Info/Info";
import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import Socials from "../Details/Socials/Socials";
import styles from "./Footer.module.scss";
import { menu } from "../../../../data/menu";
import Link from "next/link";
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
	const { footer, settings } = menu.pl;
	return (
		<>
			{/* <Map />
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
			</footer> */}
			<footer className={styles.footer2}>
				<section>
					<h2>RadWEB</h2>
					<p>
						Consequatur laborum earum quia nulla recusandae assumenda illum.
						Facere veritatis mollitia rerum perferendis ea fuga. Repudiandae
						neque cupiditate commodi et laboriosam consequatur odit.
					</p>
					<address>
						<p>Donatowo 54, 64-020 Czempiń</p>
						<p>+48 794-100-413</p>
						<p>radoslaw.adamczyk2000@gmail.com</p>
					</address>
				</section>
				<menu>
					{footer.map(({ columnName, pages }) => (
						<div key={columnName}>
							<li>
								<h3>{columnName}</h3>
								<ul>
									{pages.map(({ path, title }) => (
										<li key={path}>
											<Link href={path}>{title}</Link>
										</li>
									))}
								</ul>
							</li>
						</div>
					))}
				</menu>
				<div>
					<p>Radosław Adamczyk &copy; 2023</p>
					<div>
						<ul></ul>
						<ul>
							{settings.map(({ path, title }) => (
								<li key={path}>
									<Link href={path}>{title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
