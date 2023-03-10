import Link from "next/link";
import { menu } from "../../../../../data/menu";
import styles from "./Menu.module.scss";
const Menu = () => {
	return (
		<menu className={styles.wrapper}>
			{menu.pl.map(({ path, title }) => (
				<li key={path}>
					<Link href={path}>{title}</Link>
				</li>
			))}
			<li>
				<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
			</li>
			{menu.pl.map(({ submenu }) => (
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
