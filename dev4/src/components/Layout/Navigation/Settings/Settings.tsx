import MenuButton from "l_navigation/Settings/MenuButton";
import SearchButton from "l_navigation/Settings/SearchButton";
import styles from "l_navigation/Settings/Settings.module.scss";
export default function Settings() {
	return (
		<div className={styles.wrapper}>
			<SearchButton />
			<MenuButton />
		</div>
	);
}
