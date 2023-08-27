import Image from "next/image";
import Link from "next/link";
import styles from "./Details.module.scss";

export const Details = () => {
	return (
		<div className={styles.wrapper}>
			<h4 className={styles.title}>RadWEB</h4>
			<address className={styles.details}>
				<li className={styles.link}>
					<Link href="">radoslaw.adamczyk2000@gmail.com</Link>
				</li>
				<li className={styles.link}>
					<Link href="">+49 794-100-413</Link>
				</li>
				<p className={styles.address}>
					Donatowo 53 <br />
					64-020 Czempiń
				</p>
			</address>
		</div>
	);
};
