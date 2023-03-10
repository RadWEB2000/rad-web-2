import styles from "./MenuButton.module.scss";
import { useContext } from "react";
import { LayoutContext } from "../../../../../context/LayoutProvider";
const MenuButton = () => {
	const { menu } = useContext(LayoutContext);
	return (
		<button
			aria-label="menu button"
			className={styles.wrapper}
			data-active={menu.isOpen}
			onClick={menu.handle}
			type="button"
		>
			<span />
			<span />
			<span />
		</button>
	);
};
export default MenuButton;
