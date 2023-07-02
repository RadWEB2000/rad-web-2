import Link from "next/link";
import styles from "./Menu.module.scss";
import { menu } from "@default/src/data/menu";

export const Menu = () => {
	return (
		<menu className={styles.wrapper}>
			{menu.pl.footer.map(({ label, menu }) => {
				return (
					<li key={label}>
						<h5>{label}</h5>
						<ul>
							{menu.map(({ label, uri }) => {
								return (
									<li key={label}>
										<Link href={uri} rel="index follow">
											{label}
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
};
