import styles from "./Button.module.scss";
import { LayoutContext } from "./../../../../context/LayoutContext/LayoutContext";
import { useContext } from "react";

export const Button = () => {
	const { isOpenMenu, toggleMenu } = useContext(LayoutContext);
	return (
		<button
			aria-label="menu button"
			className={styles.wrapper}
			data-open={isOpenMenu}
			onClick={toggleMenu}
		>
			<span className={styles.line} />
			<span className={styles.line} />
			<span className={styles.line} />
		</button>
	);
};
