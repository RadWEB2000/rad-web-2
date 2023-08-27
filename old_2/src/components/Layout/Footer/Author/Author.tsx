import styles from "./Author.module.scss";

export const Author = () => {
	return (
		<div className={styles.wrapper}>
			<p>RadWEB &copy; {new Date().getFullYear()}</p>
		</div>
	);
};
