import Link from "next/link";
import styles from "@default/components/Layout/Footer/Menu/Item/Item.module.scss";

export type tMenu = {
	label: string;
	menu: {
		label: string;
		uri: string;
	}[];
};

export default function Item({ label, menu }: tMenu) {
	return (
		<li className={styles.wrapper}>
			<h3>{label}</h3>
			<ul>
				{menu.map(({ label, uri }) => {
					return (
						<li key={label}>
							<Link href={uri}>{label}</Link>
						</li>
					);
				})}
			</ul>
		</li>
	);
}
