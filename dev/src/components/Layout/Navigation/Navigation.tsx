import styles from "@layout/Navigation/Navigation.module.scss";

export default function Navigation() {
	return (
		<nav className={styles.wrapper}>
			<div>brand</div>
			<div>menu</div>
			<div>settings</div>
		</nav>
	);
}
