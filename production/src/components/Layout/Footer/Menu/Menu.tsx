import Link from "next/link";
import styles from "@default/components/Layout/Footer/Menu/Menu.module.scss";

export interface iMenu {
	menu: {
		column: {
			label: string;
			adress: {
				title: string;
				uri: string;
			}[];
		};
	}[];
}

export default function Menu({ menu }: iMenu) {
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ column: { adress, label } }) => {
				return (
					<li className={styles.column} key={label}>
						<h5 className={styles.title}>{label}</h5>
						<ul className={styles.menu}>
							{adress.map(({ title, uri }) => {
								return (
									<li className={styles.item} key={title} title={title}>
										<Link href={uri} title={title}>
											{title}
										</Link>
									</li>
								);
							})}
						</ul>
					</li>
				);
			})}
		</menu>
	);
}
