import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import styles from "./Menu.module.scss";
import { useContext } from "react";
import { LayoutContext } from "./../../../../../context/LayoutProvider";
interface iMenu {
	menu: {
		path: string;
		title: string;
		submenu?: {
			path: string;
			title: string;
		}[];
	}[];
}
const Menu = ({ menu }: iMenu) => {
	const { menu: menuContext } = useContext(LayoutContext);
	return (
		<menu className={styles.wrapper} data-active={menuContext.isOpen}>
			{menu?.map(({ path, submenu, title }) => (
				<>
					{submenu ? (
						<Submenu path={path} submenu={submenu} title={title} />
					) : (
						<Item path={path} title={title} variant="main" />
					)}
				</>
			))}
		</menu>
	);
};
export default Menu;
