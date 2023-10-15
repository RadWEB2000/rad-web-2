import Brand from "@layout/Navigation/Brand/Brand";
import styles from "@layout/Navigation/Navigation.module.scss";
import { tBrand } from "@ts/types";

type tNavigation = {
	brand: tBrand;
};

export default function Navigation(props: tNavigation) {
	const { brand } = props;
	return (
		<nav className={styles.wrapper}>
			<div className={styles.brand}>
				<Brand image={brand.image} uri={brand.uri} />
			</div>
			<div className={styles.menu}>menu</div>
			<div className={styles.settings}>settings</div>
		</nav>
	);
}
