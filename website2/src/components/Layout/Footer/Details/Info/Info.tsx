import Link from "next/link";
import styles from "./Info.module.scss";
import { CgMail, CgSmartphone } from "react-icons/cg";
import { IntInfo } from "./interface";
import { ReactElement } from "react";
const Info = ({ nip, regon }: IntInfo): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<b>RadWEB</b>
			<address>
				<p>
					Donatowo 53,
					<br />
					64-020 Czempiń
				</p>
				{nip && (
					<p>
						<b>NIP:</b>
						{` ${nip}`}
					</p>
				)}
				{regon && (
					<p>
						<b>REGON:</b>
						{` ${regon}`}
					</p>
				)}
				<ul>
					<li>
						<Link href="tel:+48794100413">
							<span>
								<CgSmartphone />
							</span>
							<p>+48 794-100-413</p>
						</Link>
					</li>
					<li>
						<Link href="mailto:radoslaw.adamczyk2000@gmail.com">
							<span>
								<CgMail />
							</span>
							<p>radoslaw.adamczyk2000@gmail.com</p>
						</Link>
					</li>
				</ul>
			</address>
		</section>
	);
};
export default Info;
