"use client";
import MenuItem from "@layout/Navigation/Menu/MenuItem";
import styles from "@layout/Navigation/Menu/Menu.module.scss";
import Submenu from "@layout/Navigation/Menu/Submenu";
import { LayoutContext } from "@context/LayoutContext";
import { tMenu } from "@ts/types";
import { useContext } from "react";

export default function Menu(props: tMenu) {
	const { menu } = props;
	const {
		navigation: { menuStatus },
	} = useContext(LayoutContext);
	return (
		<menu className={styles.wrapper} data-open={menuStatus}>
			{menu.map(({ label, submenu, uri }, index) => {
				if (submenu !== null) {
					return (
						<Submenu label={label} key={index} submenu={submenu} uri={uri} />
					);
				} else {
					return (
						<MenuItem label={label} key={index} type="regural" uri={uri} />
					);
				}
			})}
		</menu>
	);
}
