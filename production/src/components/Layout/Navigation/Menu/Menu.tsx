import styles from "./Menu.module.scss";
import { Item } from "./Item/Item";
import { Submenu } from "./Submenu/Submenu";

interface iMenu {
	menu: {
		label: string;
		submenu?: {
			label: string;
			uri: string;
		}[];
		uri: string;
	}[];
}

export const Menu = ({ menu }: iMenu) => {
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ label, submenu, uri }) => {
				if (submenu) {
					return (
						<Submenu key={label} label={label} submenu={submenu} uri={uri} />
					);
				} else {
					return <Item key={label} label={label} type="regular" uri={uri} />;
				}
			})}
		</menu>
	);
};
