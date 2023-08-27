import Link from "next/link";
import styles from "@default/components/Layout/Footer/Details/Details.module.scss";

export interface iDetails {
	details: {
		adress: string;
		email: string;
		phone: {
			label: string;
			value: string;
		};
		slogan: string;
		title: string;
	};
}

export default function Details({
	details: { adress, email, phone, slogan, title },
}: iDetails) {
	return (
		<div className={styles.wrapper}>
			<h3
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
			<h4
				className={styles.slogan}
				dangerouslySetInnerHTML={{ __html: slogan }}
			/>
			<address>
				<p
					className={styles.adress}
					dangerouslySetInnerHTML={{ __html: adress }}
				/>
				<Link className={styles.email} href={`mailto:${email}`}>
					{email}
				</Link>
				<Link className={styles.phone} href={`tel:${phone.value}`}>
					{phone.label}
				</Link>
			</address>
		</div>
	);
}
