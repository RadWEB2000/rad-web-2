import Link from "next/link";
import styles from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary.module.scss";
type tButtonPrimary = {
	icon?: JSX.Element;
	label: string;
	theme: "primary" | "secondary" | "tertiary";
} & (
	| {
			variant: "button";
			handle: () => void;
	  }
	| {
			variant: "link";
			uri: string;
	  }
);

export default function ButtonPrimary(props: tButtonPrimary) {
	const { icon, label, theme, variant } = props;

	if (variant === "button") {
		const { handle } = props;
		return (
			<div className={styles.button} data-theme={theme}>
				<button onClick={handle}>
					<p>{label}</p>
					{icon && <i>{icon}</i>}
				</button>
			</div>
		);
	} else if (variant === "link") {
		const { uri } = props;
		return (
			<div className={styles.link} data-theme={theme}>
				<Link href={uri}>
					<p>{label}</p>
					{icon && <i>{icon}</i>}
				</Link>
			</div>
		);
	}
}
