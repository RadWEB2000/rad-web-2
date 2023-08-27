import { MenuContext } from "@default/context/MenuContext";
import { useContext } from "react";
import styles from "@default/components/Layout/Navigation/Settings/MenuButton/MenuButton.module.scss";

export default function MenuButton() {
	const { isOpenMenu, toggleMenu } = useContext(MenuContext);
	return (
		<button
			className={styles.wrapper}
			data-open={isOpenMenu}
			onClick={toggleMenu}
		>
			<span />
			<span />
			<span />
		</button>
	);
}
