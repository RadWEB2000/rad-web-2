import Link from "next/link";
import styles from "./RegularButton.module.scss";
import { MouseEventHandler, ReactElement } from "react";

const { box, wrapper } = styles;

interface iRegularButton {
	button: string;
	disabled?: boolean;
	handle?: MouseEventHandler;
	icon: ReactElement | JSX.Element;
	path?: string;
	variant: "button" | "link";
	type?: "button" | "submit";
}

export const RegularButton = ({
	button,
	disabled = false,
	handle,
	icon,
	path,
	variant,
	type = "button",
}: iRegularButton): ReactElement | null => {
	if (variant === "button" && handle) {
		return (
			<button
				className={wrapper}
				disabled={disabled}
				onClick={handle}
				type={type}
			>
				<span>{button}</span>
				<i>{icon}</i>
			</button>
		);
	} else if (variant === "link" && path) {
		return (
			<Link href={path} legacyBehavior>
				<a className={wrapper}>
					<span>{button}</span>
					<i>{icon}</i>
				</a>
			</Link>
		);
	} else return null;
};
