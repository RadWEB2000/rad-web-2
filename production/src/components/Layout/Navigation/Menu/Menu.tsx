import Item from "./Item/Item";
import Submenu from "./Submenu/Submenu";
import styles from "@default/components/Layout/Navigation/Menu/Menu.module.scss";
type tMenuElement = {
	node: {
		path: string;
		label: string;
	};
};

interface iMenu {
	menu: tMenuElement[][];
}

export default function Menu({ menu }: iMenu) {
	return (
		<menu className={styles.wrapper}>
			{menu.map((item, index) => {
				if (item.length > 1) {
					return (
						<Submenu
							label={item[0].node.label}
							key={item[0].node.label}
							uri={item[0].node.path}
							submenu={item.slice(1, -1)}
						/>
					);
				} else {
					return (
						<Item
							closeSubmenu={() => {}}
							label={item[0].node.label}
							key={item[0].node.label}
							uri={item[0].node.path}
							variant="regular"
						/>
					);
				}
			})}
		</menu>
	);
}
