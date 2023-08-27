import styles from "@default/components/Utils/Forms/Search/Search.module.scss";

export default function Search() {
	return (
		<div className={styles.wrapper}>
			<label htmlFor="search">Szukaj</label>
			<input type="text" name="search" id="search" placeholder="Wpisz tutaj" />
		</div>
	);
}
