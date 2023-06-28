import Link from "next/link";
import styles from "./Item.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { LayoutContext } from "./../../../../../context/LayoutProvider";
import { MouseEventHandler, ReactElement, useContext } from "react";

interface iItem {
	expandClose?: MouseEventHandler;
	expandHandle?: MouseEventHandler;
	path: string;
	title: string;
	variant: "expand" | "main" | "submenu";
}

const Item = ({
	expandClose,
	expandHandle,
	path,
	title,
	variant,
}: iItem): ReactElement => {
	const expandLinkHandle = () => {
		menu.close, expandClose;
	};
	const { menu } = useContext(LayoutContext);
	if (variant === "expand") {
		return (
			<div className={styles.expand}>
				<Link
					href={path}
					onClick={() => expandLinkHandle()}
					rel="index follow"
					role="menuitem"
				>
					{title}
				</Link>
				<button aria-label="expand button" onClick={expandHandle} type="button">
					<FiChevronDown />
				</button>
			</div>
		);
	} else if (variant === "main") {
		return (
			<li className={styles.main}>
				<Link
					href={path}
					onClick={menu.close}
					rel="index follow"
					role="menuitem"
				>
					{title}
				</Link>
			</li>
		);
	} else if (variant === "submenu") {
		return (
			<li className={styles.submenu}>
				<Link
					href={path}
					onClick={() => expandLinkHandle()}
					rel="index follow"
					role="menuitem"
				>
					{title}
				</Link>
			</li>
		);
	} else {
		return <></>;
	}
};
export default Item;
