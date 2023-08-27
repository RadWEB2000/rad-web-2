import styles from "./Navigation.module.scss";
import { Brand, iBrand } from "./Brand/Brand";
import { Button } from "./Button/Button";
import { Lang } from "./Lang/Lang";
import { menu } from "@default/src/data/menu";
import { Menu } from "./Menu/Menu";
import { useContext } from "react";
import { LayoutContext } from "@default/src/context/LayoutContext/LayoutContext";

interface iNavigation {
	brand: iBrand;
}

export const Navigation = ({ brand }: iNavigation) => {
	const { isOpenMenu } = useContext(LayoutContext);
	return (
		<nav className={styles.wrapper} data-openMenu={isOpenMenu}>
			<div className={styles.brand}>
				<Brand name={brand.name} uri={brand.uri} />
			</div>
			<div className={styles.menu} data-openMenu={isOpenMenu}>
				<Menu menu={menu.pl.nav} />
			</div>
			<div className={styles.settings}>
				{/* <Lang /> */}
				<Button />
			</div>
		</nav>
	);
};
