"use client";
import MenuItem from "@layout/Navigation/Menu/MenuItem";
import styles from "@layout/Navigation/Menu/Submenu/Submenu.module.scss";
import { tMenuItem } from "@ts/types";
import { useState } from "react";

type tSubmenu = {
	label: string;
	submenu: tMenuItem[];
	uri: string;
};

export default function Submenu(props: tSubmenu) {
	const { label, submenu, uri } = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<li className={styles.wrapper} data-expand={isOpen}>
			<MenuItem
				label={label}
				toggleSubmenu={() => setIsOpen(!isOpen)}
				type="expand"
				uri={uri}
			/>
			<ul className={styles.box} data-expand={isOpen}>
				{submenu.map(({ label, uri }, index: number) => {
					return (
						<MenuItem
							closeSubmenu={() => setIsOpen(false)}
							label={label}
							key={index}
							type="submenu"
							uri={uri}
						/>
					);
				})}
			</ul>
		</li>
	);
}
