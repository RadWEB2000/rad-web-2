import Item from "@default/components/Layout/Navigation/Menu/Item/Item";
import { useState } from "react";
import styles from "@default/components/Layout/Navigation/Menu/Submenu/Submenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface iSubmenu {
	label: string;
	uri: string;
	submenu?: any[];
}

export default function Submenu({ label, uri, submenu }: iSubmenu) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<li className={styles.wrapper} onMouseLeave={() => setIsOpen(false)}>
			<Item
				label={label}
				toggleSubmenu={() => setIsOpen(!isOpen)}
				uri={uri}
				variant="expand"
			/>
			{isOpen && (
				<AnimatePresence>
					<motion.ul
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						{submenu?.map(({ node: { label, path } }, index) => {
							return (
								<Item
									closeSubmenu={() => {}}
									key={index}
									label={label}
									uri={path}
									variant="submenu"
								/>
							);
						})}
					</motion.ul>
				</AnimatePresence>
			)}
		</li>
	);
}
