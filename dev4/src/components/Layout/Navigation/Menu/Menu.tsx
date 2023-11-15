import { tMenuArrayItem } from "data/menu";
import Item from "./Item";
import Submenu from "./Submenu";

type tMenu = {
	menu: tMenuArrayItem[];
};

export default function Menu(props: tMenu) {
	return (
		<menu>
			{props.menu.map(
				({ label, uri, submenu, submenuTheme, submenuTitles }) => {
					if (submenu !== null) {
						return (
							<Submenu
								label={label}
								key={label}
								submenu={submenu}
								submenuTheme={submenuTheme} // Użyj submenuTheme z menu
								submenuTitle={submenuTitles || {}} // Użyj submenuTitles z menu
								uri={uri}
							/>
						);
					} else {
						return <Item label={label} key={label} theme="regural" uri={uri} />;
					}
				}
			)}
		</menu>
	);
}
