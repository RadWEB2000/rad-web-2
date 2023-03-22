import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import styles from "./Navigation.module.scss";
import { iMenu } from "@default/src/data/menu";
import { ReactElement } from "react";

interface iNavigation {
	brand: string;
	menu: iMenu[];
}

const Navigation = ({ brand, menu }: iNavigation): ReactElement => {
	return (
		<nav className={styles.wrapper}>
			<Brand title={brand} />
			<Menu menu={menu} />
		</nav>
	);
};

export default Navigation;
