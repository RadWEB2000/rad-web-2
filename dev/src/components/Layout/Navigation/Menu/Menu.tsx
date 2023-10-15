import MenuItem from "@layout/Navigation/Menu/MenuItem";
import { tMenu } from "@ts/types";
import Submenu from "@layout/Navigation/Menu/Submenu";
import styles from "@layout/Navigation/Menu/Menu.module.scss";
export default function Menu(props: tMenu) {
	const { menu } = props;
	return (
		<menu className={styles.wrapper}>
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
