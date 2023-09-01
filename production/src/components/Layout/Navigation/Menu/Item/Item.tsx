import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler, useContext } from "react";
import styles from "@default/components/Layout/Navigation/Menu/Item/Item.module.scss";
import { MenuContext } from "@default/context/MenuContext";

type tItem = {
	label: string;
	uri: string;
} & (
	| {
			variant: "expand";
			toggleSubmenu: MouseEventHandler;
	  }
	| {
			variant: "regular" | "submenu";
			closeSubmenu: () => void;
	  }
);

export default function Item(props: tItem) {
	const { label, uri, variant } = props;
	const { closeMenu } = useContext(MenuContext);
	if (variant === "expand") {
		const { toggleSubmenu } = props;
		return (
			<div className={styles.expand}>
				<Link className={styles.link} onClick={closeMenu} href={uri}>
					{label}
				</Link>
				<button
					aria-label="Rozwiń / zwiń podmenu"
					className={styles.button}
					onClick={toggleSubmenu}
				>
					<ChevronDown />
				</button>
			</div>
		);
	} else {
		const { closeSubmenu } = props;
		return (
			<li className={variant === "regular" ? styles.regular : styles.submenu}>
				<Link
					className={styles.link}
					onClick={() => {
						closeMenu();
						closeSubmenu();
					}}
					href={uri}
				>
					{label}
				</Link>
			</li>
		);
	}
}
