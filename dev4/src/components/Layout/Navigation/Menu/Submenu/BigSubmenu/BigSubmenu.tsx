import { tMenuArrayItem } from "data/menu";
import Desktop from "l_navigation/Menu/Submenu/BigSubmenu/Desktop";
import Mobile from "l_navigation/Menu/Submenu/BigSubmenu/Mobile";

export type tBigSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[];
	submenuTitle: {
		[key: string]: string;
	};
};

export type tOpenSubmenus = {
	[key: string]: boolean;
};

export default function BigSubmenu(props: tBigSubmenu) {
	return (
		<>
			<Desktop
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
			<Mobile
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
		</>
	);
}
