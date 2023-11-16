"use client";
import { tMenuArrayItem } from "data/menu";
import { useState } from "react";
import styles from "l_navigation/Menu/Submenu/BigSubmenu/BigSubmenu.module.scss";
import Item from "l_navigation/Menu/Item";

type tSmallSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[];
	submenuTitle: {
		[key: string]: string;
	};
};

export default function SmallSubmenu(props: tSmallSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
	const [isOpenSubmenuSecondary, setIsOpenSubmenuSecondary] = useState(false);
	console.log(props.submenu);
	return (
		<li className={styles.small__wrapper}>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				label={props.label}
				level={1}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<ul>
					{props.submenu?.map((item, index) => {
						return (
							<li key={item.label}>
								<Item
									label={item.label}
									key={index}
									theme="submenu"
									uri={item.uri}
								/>
							</li>
						);
					})}
				</ul>
			)}
		</li>
	);
}
