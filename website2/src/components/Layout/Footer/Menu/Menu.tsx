import Link from "next/link";
import styles from "./Menu.module.scss";
interface iMenu {
	menu: {
		path: string;
		title: string;
		submenu?: {
			path: string;
			title: string;
		}[];
	}[];
}
const Menu = ({ menu }: iMenu) => {
	return (
		<menu className={styles.wrapper}>
			{menu.map(({ path, title }) => (
				<li key={path}>
					<Link href={path}>{title}</Link>
				</li>
			))}
			<li>
				<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
			</li>
			{menu.map(({ submenu }) => (
				<>
					{submenu?.map(({ path, title }) => (
						<li key={`${path} - footer`}>
							<Link href={path}>{title}</Link>
						</li>
					))}
				</>
			))}
		</menu>
	);
};
export default Menu;
