import { MenuContext } from "@default/context/MenuContext";
import { useContext } from "react";
import styles from "@default/components/Layout/Navigation/Settings/Settings.module.scss";

export default function Settings() {
	const { isOpen, toggleMenu } = useContext(MenuContext);

	return (
		<div className={styles.wrapper}>
			<button
				aria-label={`${isOpen ? "Otwórz " : "Zamknij "} menu`}
				className={styles.button}
				data-open={isOpen}
				onClick={toggleMenu}
			>
				<span className={styles.line} />
				<span className={styles.line} />
				<span className={styles.line} />
			</button>
		</div>
	);
}
