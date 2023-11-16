import { tMenuArrayItem } from "data/menu";
import BigSubmenu from "l_navigation/Menu/Submenu/BigSubmenu";
import SmallSubmenu from "l_navigation/Menu/Submenu/SmallSubmenu";

type tSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[]; // Zmień na tMenuArrayItem[]
	submenuTheme: "big" | "small";
	submenuTitle: {
		[key: string]: string;
	};
};

export default function Submenu(props: tSubmenu) {
	if (props.submenuTheme === "small") {
		return (
			<SmallSubmenu
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
		);
	} else if (props.submenuTheme === "big") {
		return (
			<BigSubmenu
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
		);
	}
}
