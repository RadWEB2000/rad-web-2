import Link from "next/link";
import styles from "l_badges/Item/Item.module.scss";

type tItem = {
	icon: JSX.Element;
	label: string;
	uri: string;
};

export default function Item(props: tItem) {
	return (
		<li className={styles.wrapper} title={props.label}>
			<Link href={props.uri} title={props.label}>
				{props.icon}
			</Link>
		</li>
	);
}
