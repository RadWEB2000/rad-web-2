import styles from "l_navigation/Settings/MenuButton/MenuButton.module.scss";
import { FaBars } from "react-icons/fa6";

export default function MenuButton() {
	return (
		<button className={styles.wrapper}>
			<FaBars />
		</button>
	);
}
