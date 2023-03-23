import styles from "./Author.module.scss";
const Author = () => {
	const year = new Date().getFullYear();
	return (
		<div className={styles.wrapper}>
			<p>RadWEB &copy; {`2020 - ${year}`}</p>
		</div>
	);
};
export default Author;
