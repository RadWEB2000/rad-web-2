import { useState } from "react";
import Item from "../Item/Item";
import { tLink } from "@default/ts/types";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@default/components/Layout/Navigation/Menu/Submenu/Submenu.module.scss";

interface iSubmenu extends tLink {
	submenu: tLink[];
}

export default function Submenu({ label, uri, submenu }: iSubmenu) {
	const [isExpand, setIsExpand] = useState<boolean>(false);

	return (
		<li className={styles.wrapper} onMouseLeave={() => setIsExpand(false)}>
			<Item
				label={label}
				uri={uri}
				variant="expand"
				toggleExpandSubmenu={() => setIsExpand(!isExpand)}
			/>
			{isExpand && (
				<AnimatePresence>
					<motion.ul
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						{submenu.map(({ label, uri }) => {
							return (
								<Item key={label} label={label} uri={uri} type="submenu" />
							);
						})}
					</motion.ul>
				</AnimatePresence>
			)}
		</li>
	);
}
