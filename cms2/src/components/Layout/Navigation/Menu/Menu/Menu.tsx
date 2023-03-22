import Item from "../Item/Item";
import Submenu from "../Submenu/Submenu";
import { iMenu } from "./../../../../../data/menu";

const Menu = ({ menu }: { menu: iMenu[] }) => {
	return (
		<menu>
			{menu.map(({ path, title, submenu }) => {
				if (submenu) {
					return (
						<Submenu
							items={submenu}
							key={`${path}-${title}-menu`}
							path={path}
							title={title}
						/>
					);
				} else {
					return (
						<Item
							key={`${path}-${title}-menu`}
							path={path}
							title={title}
							variant="regular"
						/>
					);
				}
			})}
		</menu>
	);
};

export default Menu;
