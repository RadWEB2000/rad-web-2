import Item from "../Item/Item";
import { ReactElement } from "react";

interface iSubmenu {
	items: {
		path: string;
		title: string;
	}[];
	path: string;
	title: string;
}

const Submenu = ({ items, path, title }: iSubmenu): ReactElement => {
	return (
		<div style={{ width: "100%" }}>
			<Item path={path} title={title} variant="expand" />
			<ul>
				{items.map(({ path, title }) => (
					<Item
						key={`${path}-${title}-submenu`}
						path={path}
						title={title}
						variant="submenu"
					/>
				))}
			</ul>
		</div>
	);
};

export default Submenu;
