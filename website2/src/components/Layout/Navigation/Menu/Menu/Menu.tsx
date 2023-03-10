import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import styles from "./Menu.module.scss";
import { useContext } from "react";
import { LayoutContext } from "./../../../../../context/LayoutProvider";
import { menu } from "../../../../../../data/utils/menu";
const Menu = () => {
	const { menu: menuContext } = useContext(LayoutContext);
	return (
		<menu className={styles.wrapper} data-active={menuContext.isOpen}>
			{menu.pl.navigation.map(({ path, submenu, title }) => (
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
