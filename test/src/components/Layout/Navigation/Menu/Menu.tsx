import { tLink } from "@default/ts/types";
import Submenu from "./Submenu/Submenu";
import Item from "./Item/Item";
import styles from "@default/components/Layout/Navigation/Menu/Menu.module.scss";

export type tMenu = {
	label: string;
	uri: string;
	submenu?: tLink[];
};

export interface iMenu {
	menu: tMenu[];
}

export default function Menu({ menu }: iMenu) {
	return (
		<menu className={styles.wrapper} role="menu">
			{menu.map(({ label, uri, submenu }) => {
				if (submenu) {
					return (
						<Submenu label={label} key={label} submenu={submenu} uri={uri} />
					);
				} else {
					return <Item label={label} key={label} uri={uri} />;
				}
			})}
		</menu>
	);
}
