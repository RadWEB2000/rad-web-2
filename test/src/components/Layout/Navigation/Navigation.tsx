import Menu, {
	iMenu,
	tMenu,
} from "@default/components/Layout/Navigation/Menu/Menu";
import Brand, {
	tBrand,
} from "@default/components/Layout/Navigation/Brand/Brand";
import Settings from "@default/components/Layout/Navigation/Settings/Settings";
import styles from "@default/components/Layout/Navigation/Navigation.module.scss";
import { useContext } from "react";
import { MenuContext } from "@default/context/MenuContext";
import { motion } from "framer-motion";

type tNavigation = {
	brand: tBrand;
	menu: tMenu[];
};

export default function Navigation({ brand, menu }: tNavigation) {
	const { isOpenMenu } = useContext(MenuContext);
	return (
		<motion.nav
			className={styles.wrapper}
			data-open={isOpenMenu}
			role="navigation"
		>
			<div className={styles.brand}>
				<Brand {...brand} />
			</div>
			<div className={styles.menu}>
				<Menu menu={menu} />
			</div>
			<div className={styles.settings}>
				<Settings />
			</div>
		</motion.nav>
	);
}
