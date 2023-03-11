import Link from "next/link";
import styles from "./Info.module.scss";
import { CgMail, CgSmartphone } from "react-icons/cg";
import { ReactElement } from "react";
interface iInfo {
	address: string;
	nip?: number | string;
	regon?: number | string;
	title: string;
}
const Info = ({ address, nip, regon, title }: iInfo): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<b>{title}</b>
			<address>
				<p dangerouslySetInnerHTML={{ __html: address }} />
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
