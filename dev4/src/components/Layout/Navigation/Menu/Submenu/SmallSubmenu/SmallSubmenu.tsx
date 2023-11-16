"use client";
import { tMenuArrayItem } from "data/menu";
import { useState } from "react";
import styles from "l_navigation/Menu/Submenu/SmallSubmenu/SmallSubmenu.module.scss";
import Item from "l_navigation/Menu/Item";
import { AnimatePresence } from "framer-motion";

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
	return (
		<li className={styles.wrapper}>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				label={props.label}
				level={1}
				isExpanded={isOpenSubmenu}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<AnimatePresence>
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
				</AnimatePresence>
			)}
		</li>
	);
}
