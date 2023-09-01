import Link from "next/link";
import styles from "@default/components/Page/ContactPage/Contact/Contact.module.scss";

type tContactElement = {
	title: string;
} & (
	| {
			variant: "phone";
			label: string;
			value: string;
	  }
	| {
			variant: "email";
			email: string;
	  }
);

type tContact = {
	emailBox: {
		email: string;
		title: string;
	};
	phoneBox: {
		label: string;
		title: string;
		value: string;
	};
	title: string;
};

function ContactElement(props: tContactElement) {
	const { title, variant } = props;
	if (variant === "phone") {
		const { label, value } = props;
		return (
			<Link href={`tel:${value}`} className={styles.card}>
				<h3
					className={styles.label}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<div className={styles.link}>{label}</div>
			</Link>
		);
	} else if (variant === "email") {
		const { email } = props;
		return (
			<Link href={`mialto:${email}`} className={styles.card}>
				<h3
					className={styles.label}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<div className={styles.link}>{email}</div>
			</Link>
		);
	}
}

export default function Contact({ emailBox, phoneBox, title }: tContact) {
	return (
		<div className={styles.wrapper}>
			<section className={styles.content}>
				<header className={styles.title}>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
			</section>
			<ul className={styles.cards}>
				<ContactElement
					label={phoneBox.label}
					title={phoneBox.title}
					value={phoneBox.value}
					variant="phone"
				/>
				<ContactElement
					email={emailBox.email}
					title={emailBox.title}
					variant="email"
				/>
			</ul>
		</div>
	);
}
