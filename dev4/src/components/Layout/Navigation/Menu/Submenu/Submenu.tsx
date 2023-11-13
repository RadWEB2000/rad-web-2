import { tMenuArrayItem } from 'data/menu';
import Item from 'l_navigation/Menu/Item';

type tSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[]; // Zmień na tMenuArrayItem[]
	submenuTheme: 'big' | 'small';
	submenuTitle: {
		[key: string]: string;
	};
};

export default function Submenu(props: tSubmenu) {
	const {
		label,
		submenu,
		submenuTheme: theme,
		submenuTitle: titles,
		uri,
	} = props;

	if (theme === 'small') {
		return (
			<li>
				<Item
					label={label}
					uri={uri}
					theme="expand"
				/>
				<ul>
					{submenu?.map(({ label, submenu, uri }) => {
						if (submenu !== null) {
							return (
								<li key={label}>
									<Item
										label={label}
										key={label}
										theme="submenu"
										level={1}
										uri={uri}
									/>
									<ul>
										{submenu?.map(({ label, uri }) => {
											return (
												<Item
													label={label}
													key={label}
													theme="submenu"
													level={2}
													uri={uri}
												/>
											);
										})}
									</ul>
								</li>
							);
						} else {
							return (
								<li key={label}>
									<Item
										label={label}
										key={label}
										theme="submenu"
										level={1}
										uri={uri}
									/>
								</li>
							);
						}
					})}
				</ul>
			</li>
		);
	}
}
