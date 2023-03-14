import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Settings.module.scss";
const Settings = () => {
	return (
		<div className={styles.wrapper}>
			<ThemeButton />
			<MenuButton />
		</div>
	);
};
export default Settings;
