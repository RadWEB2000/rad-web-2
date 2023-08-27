import styles from "@default/components/Layout/Footer/Author/Author.module.scss";

export interface iAuthor {
	brand: {
		title: string;
		year: number;
	};
}

export default function Author({ brand: { title, year } }: iAuthor) {
	return (
		<div className={styles.wrapper}>
			<p>{`${title} © ${year} - ${new Date().getFullYear()}`}</p>
		</div>
	);
}
