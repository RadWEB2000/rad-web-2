import Item from "../Item/Item";
import styles from "./Submenu.module.scss";
import { ReactElement, useState } from "react";
interface iSubmenu {
	path: string;
	title: string;
	submenu: {
		path: string;
		title: string;
	}[];
}

const Submenu = ({ path, title, submenu }: iSubmenu): ReactElement => {
	const [isActive, setIsActive] = useState(false);
	return (
		<li className={styles.wrapper} onMouseLeave={() => setIsActive(false)}>
			<Item
				expandClose={() => setIsActive(false)}
				expandHandle={() => setIsActive(!isActive)}
				path={path}
				title={title}
				variant="expand"
			/>
			<ul data-active={isActive}>
				{submenu.map(({ path, title }) => (
					<Item key={title} path={path} title={title} variant="submenu" />
				))}
			</ul>
		</li>
	);
};
export default Submenu;
