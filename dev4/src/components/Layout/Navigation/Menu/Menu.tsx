import { tMenuArrayItem } from 'data/menu';
import Item from 'l_navigation/Menu/Item';
import Submenu from 'l_navigation/Menu/Submenu';
import styles from 'l_navigation/Menu/Menu.module.scss';

type tMenu = {
	menu: tMenuArrayItem[];
};

export default function Menu(props: tMenu) {
	return (
		<menu className={styles.wrapper}>
			{props.menu.map((item, index) => {
				if (item.submenu !== null) {
					return (
						<Submenu
							label={item.label}
							key={`${index}-${item.label}`}
							submenu={item.submenu}
							submenuTheme={item.submenuTheme} // Użyj submenuTheme z menu
							submenuTitle={item.submenuTitles || {}} // Użyj submenuTitles z menu
							uri={item.uri}
						/>
					);
				} else {
					return (
						<Item
							label={item.label}
							key={`${index}-${item.label}`}
							theme="regural"
							uri={item.uri}
						/>
					);
				}
			})}
		</menu>
	);
}
