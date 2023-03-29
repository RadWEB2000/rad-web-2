import styles from "./Footer.module.scss";
import { menu } from "../../../../data/menu";
import Link from "next/link";
import { footer as footerData } from "../../../../../data/footer";
import getSocials from "../../../../../lib/getSocials";
import { IoHomeSharp, IoMailOpenOutline } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

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
		<footer className={styles.wrapper}>
			<section className={styles.info}>
				<h2>RadWEB</h2>
				<p>
					Consequatur laborum earum quia nulla recusandae assumenda illum.
					Facere veritatis mollitia rerum perferendis ea fuga. Repudiandae neque
					cupiditate commodi et laboriosam consequatur odit.
				</p>
				<address>
					<p>
						<i>
							<IoHomeSharp />
						</i>
						<span>Donatowo 54, 64-020 Czempiń</span>
					</p>
					<Link href="tel:+48794100413">
						<i>
							<BsTelephoneFill />
						</i>
						<span>+48 794-100-413</span>
					</Link>
					<Link href="mailto:radoslaw.adamczyk2000@gmail.com">
						<i>
							<IoMailOpenOutline />
						</i>
						<span>radoslaw.adamczyk2000@gmail.com</span>
					</Link>
				</address>
			</section>
			<menu className={styles.menu}>
				{footer.map(({ columnName, pages }) => (
					<li key={columnName}>
						<h3>{columnName}</h3>
						<ul>
							{pages.map(({ path, title }) => (
								<li className={styles.link} key={path}>
									<Link href={path}>{title}</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</menu>
			<span className={styles.break} />
			<div className={styles.settings}>
				<p>Radosław Adamczyk - RadWEB &copy; 2021-2023</p>
				<div>
					<ul className={styles.socials}>
						{footerData.pl.socials.map((item, index) => (
							<li key={`${index}`} title={`${getSocials({ path: item }).name}`}>
								<Link href={item} title={`${getSocials({ path: item }).name}`}>
									{getSocials({ path: item }).icon}
								</Link>
							</li>
						))}
					</ul>
					<ul className={styles.menu}>
						{settings.map(({ path, title }) => (
							<li className={styles.link} key={path}>
								<Link href={path}>{title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
