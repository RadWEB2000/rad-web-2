import Link from "next/link";
import styles from "@layout/Navigation/Menu/MenuItem/MenuItem.module.scss";
import { LuChevronDown } from "react-icons/lu";

type tMenuItem = {
	label: string;
	uri: string;
} & (
	| {
			type: "expand";
	  }
	| {
			type: "regural";
	  }
	| {
			type: "submenu";
	  }
);

export default function MenuItem(props: tMenuItem) {
	const { label, type, uri } = props;

	if (type === "expand") {
		return (
			<div className={styles.expand}>
				<Link className={styles.link} href={uri} hrefLang="pl">
					{label}
				</Link>
				<button className={styles.button}>
					<LuChevronDown />
				</button>
			</div>
		);
	} else if (type === "regural") {
		return (
			<li className={styles.regular} title="Regular">
				<Link className={styles.link} href={uri} hrefLang="pl">
					{label}
				</Link>
			</li>
		);
	} else if (type === "submenu") {
		return (
			<li className={styles.submenu} title="Submenu">
				<Link className={styles.link} href={uri} hrefLang="pl">
					{label}
				</Link>
			</li>
		);
	}
}
