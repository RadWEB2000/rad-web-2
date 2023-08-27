import Link from "next/link";
import Item, { tMenu } from "./Item/Item";
import styles from "@default/components/Layout/Footer/Menu/Menu.module.scss";

interface iMenu {
	menu: tMenu[];
}

export default function Menu({ menu }: iMenu) {
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ label, menu }) => {
				return <Item label={label} key={label} menu={menu} />;
			})}
		</menu>
	);
}
