import { iMenu } from "@default/src/data/menu";
import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import { ReactElement } from "react";

interface iNavigation {
	brand: string;
	menu: iMenu[];
}

const Navigation = ({ brand, menu }: iNavigation): ReactElement => {
	return (
		<nav>
			<Brand title={brand} />
			<Menu menu={menu} />
		</nav>
	);
};

export default Navigation;
