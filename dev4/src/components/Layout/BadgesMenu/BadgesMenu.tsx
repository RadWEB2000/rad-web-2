import styles from "l_badges/BadgesMenu.module.scss";
import Item from "l_badges/Item";

type tBadgesMenu = {
	menu: {
		icon: JSX.Element;
		label: string;
		uri: string;
	}[];
};

export default function BadgesMenu(props: tBadgesMenu) {
	return (
		<ul className={styles.wrapper}>
			{props.menu.map((item, index) => {
				return (
					<Item
						icon={item.icon}
						key={index}
						label={item.label}
						uri={item.uri}
					/>
				);
			})}
		</ul>
	);
}
