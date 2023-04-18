import Link from "next/link";
import styles from "./RegularButton.module.scss";
import { MouseEventHandler, ReactElement } from "react";

const { box, wrapper } = styles;

interface iRegularButton {
	button: string;
	handle?: MouseEventHandler;
	icon: ReactElement | JSX.Element;
	path?: string;
	variant: "button" | "link";
}

export const RegularButton = ({
	button,
	handle,
	icon,
	path,
	variant,
}: iRegularButton): ReactElement | null => {
	if (variant === "button" && handle) {
		return (
			<button className={wrapper} onClick={handle}>
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
