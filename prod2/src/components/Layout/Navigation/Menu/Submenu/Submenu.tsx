import styles from "./Submenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Item } from "../Item/Item";
import { useState } from "react";

interface iSubmenu {
	label: string;
	submenu: {
		label: string;
		uri: string;
	}[];
	uri: string;
}

export const Submenu = ({ label, submenu, uri }: iSubmenu) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className={styles.wrapper} onMouseLeave={() => setIsOpen(false)}>
			<Item
				label={label}
				handleExpand={() => setIsOpen(!isOpen)}
				type="expand"
				uri={uri}
			/>
			{isOpen && (
				<AnimatePresence>
					<motion.ul>
						{submenu.map(({ label, uri }) => {
							return (
								<Item key={label} label={label} type="submenu" uri={uri} />
							);
						})}
					</motion.ul>
				</AnimatePresence>
			)}
		</li>
	);
};
