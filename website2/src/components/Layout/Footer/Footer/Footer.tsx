import styles from "./Footer.module.scss";
import Link from "next/link";
import { IoHomeSharp, IoMailOpenOutline } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import getSocials from "../../../../lib/functions/getSocials";

interface iFooter {
	author: string;
	brand: string;
	content: string;
	email: string;
	location: string;
	menu: {
		columnName: string;
		pages: {
			path: string;
			title: string;
		}[];
	}[];
	phone: string;
	settings: {
		path: string;
		title: string;
	}[];
	socials: string[];
}
const Footer = ({
	author,
	brand,
	content,
	email,
	location,
	menu,
	phone,
	settings,
	socials,
}: iFooter) => {
	// const { footer, settings } = menu.pl;
	return (
		<footer className={styles.wrapper}>
			<section className={styles.info}>
				<h2>{brand}</h2>
				<p dangerouslySetInnerHTML={{ __html: content }} />
				<address>
					<p>
						<i>
							<IoHomeSharp />
						</i>
						<span>{location}</span>
					</p>
					<Link href={`tel:${phone}`}>
						<i>
							<BsTelephoneFill />
						</i>
						<span>{phone}</span>
					</Link>
					<Link href={`mailto:${email}`}>
						<i>
							<IoMailOpenOutline />
						</i>
						<span>{email}</span>
					</Link>
				</address>
			</section>
			<menu className={styles.menu}>
				{menu.map(({ columnName, pages }) => (
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
				<p dangerouslySetInnerHTML={{ __html: author }} />
				<div>
					<ul className={styles.socials}>
						{socials.map((item, index) => (
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
