import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "@default/components/Utils/Buttons/RegularButton/RegularButton.module.scss";
type tRegularButton = {
	label: string;
} & (
	| {
			type: "link";
			uri: string;
	  }
	| {
			type: "button";
			handle: MouseEventHandler;
			variant?: "submit" | "button";
	  }
);

export default function RegularButton(
	props: tRegularButton
): JSX.Element | null {
	if (props.type === "button") {
		const { label, handle } = props;
		return (
			<div className={styles.wrapper}>
				<button onClick={handle}>{label}</button>
			</div>
		);
	} else if (props.type === "link") {
		const { label, uri } = props;
		return (
			<div className={styles.wrapper}>
				<Link href={uri}>{label}</Link>
			</div>
		);
	} else {
		return null;
	}
}
