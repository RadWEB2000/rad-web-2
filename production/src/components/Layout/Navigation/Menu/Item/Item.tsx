import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "@default/components/Layout/Navigation/Menu/Item/Item.module.scss";

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
			closeSubmenu: MouseEventHandler;
	  }
);

export default function Item(props: tItem) {
	const { label, uri, variant } = props;
	if (variant === "expand") {
		const { toggleSubmenu } = props;
		return (
			<div className={styles.expand}>
				<Link className={styles.link} href={uri}>
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
				<Link className={styles.link} href={uri} onClick={closeSubmenu}>
					{label}
				</Link>
			</li>
		);
	}
}
