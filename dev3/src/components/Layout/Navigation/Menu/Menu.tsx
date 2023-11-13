import { tMenu } from 'ts/types';
import Submenu from 'layout/Navigation/Menu/Submenu';
import Item from './Item';

export default function Menu(props: tMenu) {
	console.log('menu component', props);

	// console.log('menu', menu);

	return (
		<menu>
			{/* {menu.map(({ label, uri, submenu }) => {
				if (submenu) {
					return (
						<Submenu
							key={label}
							label={label}
							submenu={submenu}
							uri={uri}
						/>
					);
				} else {
					return (
						<Item
							key={label}
							label={label}
							theme="regular"
							uri={uri}
						/>
					);
				}
			})} */}
		</menu>
	);
}
