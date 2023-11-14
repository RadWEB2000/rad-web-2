import { FaSearch } from "react-icons/fa";
import styles from "l_navigation/Settings/SearchButton/SearchButton.module.scss";

export default function SearchButton() {
	return (
		<button className={styles.wrapper}>
			<FaSearch />
		</button>
	);
}
