import styles from "./MenuButton.module.scss";
import { useContext, useEffect } from "react";
import { LayoutContext } from "../../../../../context/LayoutProvider";
const MenuButton = () => {
	const { menu } = useContext(LayoutContext);
	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth <= 850) {
				menu.close;
			}

			window.addEventListener("resize", () => {
				if (window.innerWidth <= 850) {
					menu.close;
				}
			});
		}
	}, []);
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
