import {
	tBigSubmenu,
	tOpenSubmenus,
} from "l_navigation/Menu/Submenu/BigSubmenu/BigSubmenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Item from "l_navigation/Menu/Item";
import styles from "l_navigation/Menu/Submenu/BigSubmenu/Mobile/Mobile.module.scss";

export default function Mobile(props: tBigSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
	const [openSubmenus, setOpenSubmenus] = useState<tOpenSubmenus>({});

	function handleSecondarySubmenu(label: string) {
		setOpenSubmenus((prevState) => ({
			...prevState,
			[label]: !prevState[label],
		}));
	}
	return (
		<li className={styles.wrapper} onMouseLeave={() => setIsOpenSubmenu(false)}>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				isExpanded={isOpenSubmenu}
				label={props.label}
				level={1}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<AnimatePresence>
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{props.submenu?.map((item, index) => {
							if (item.submenu) {
								return (
									<li key={index}>
										<Item
											handleSubmenu={() => handleSecondarySubmenu(item.label)}
											label={item.label}
											isExpanded={openSubmenus[item.label]}
											key={index}
											theme="expand"
											level={2}
											uri={item.uri}
										/>
										{openSubmenus[item.label] && (
											<AnimatePresence>
												<motion.ul
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
												>
													{item.submenu?.map((item, index) => {
														return (
															<Item
																label={item.label}
																key={index}
																theme="submenu"
																uri={item.uri}
															/>
														);
													})}
												</motion.ul>
											</AnimatePresence>
										)}
									</li>
								);
							} else {
								return (
									<li key={index}>
										<Item label={item.label} theme="submenu" uri={item.uri} />
									</li>
								);
							}
						})}
					</motion.ul>
				</AnimatePresence>
			)}
		</li>
	);
}
