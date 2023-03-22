import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { MouseEventHandler, ReactElement } from "react";

interface iItem {
	handleClick?: MouseEventHandler;
	path: string;
	title: string;
	variant: "expand" | "regular" | "submenu";
}

const Item = ({ path, title, variant }: iItem): ReactElement | null => {
	if (variant === "expand") {
		return (
			<li>
				<Link href={path}>{title}</Link>
				<button aria-label="Expand button">
					<HiChevronDown />
				</button>
			</li>
		);
	} else if (variant === "regular") {
		return (
			<li>
				<Link href={path}>{title}</Link>
			</li>
		);
	} else if (variant === "submenu") {
		return (
			<li>
				<Link href={path}>{title}</Link>
			</li>
		);
	} else return null;
};

export default Item;
