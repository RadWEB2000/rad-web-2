import Item from 'layout/Navigation/Menu/Item';
import { tSubmenu } from 'ts/types';

export default function Submenu(props: tSubmenu) {
	const { label, submenu, uri } = props;
	console.log(uri);
	return (
		<div>
			<Item
				label={label}
				uri={uri}
				theme="expand"
			/>
			<li></li>
		</div>
	);
}
