import Brand from "@layout/Navigation/Brand/Brand";
import styles from "@layout/Navigation/Navigation.module.scss";
import { tNavigation } from "@ts/types";
import Menu from "@layout/Navigation/Menu";

export default function Navigation(props: tNavigation) {
	const { brand, menu } = props;
	return (
		<nav className={styles.wrapper}>
			<div className={styles.brand}>
				<Brand image={brand.image} uri={brand.uri} />
			</div>
			<div className={styles.menu}>
				<Menu menu={menu} />
			</div>
			<div className={styles.settings}>settings</div>
		</nav>
	);
}
