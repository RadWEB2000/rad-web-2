import styles from "@default/components/Layout/Footer/Author/Author.module.scss";

export default function Author() {
	return (
		<div className={styles.wrapper}>
			<p>RadWEB &copy; {new Date().getFullYear()}</p>
		</div>
	);
}
