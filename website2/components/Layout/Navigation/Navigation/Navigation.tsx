import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import styles from "./Navigation.module.scss";
import { motion, useScroll } from "framer-motion";
import Settings from "./../Settings/Settings/Settings";
import { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../../../../context/LayoutProvider";
const Navigation = () => {
	const { scrollYProgress } = useScroll();
	const { scroll } = useContext(LayoutContext);
	const { menu: menuContext } = useContext(LayoutContext);
	return (
		<>
			<motion.div
				className={styles.progress}
				style={{ scaleX: scrollYProgress }}
			/>
			<nav className={styles.wrapper} data-scrolled={scroll}>
				<div className={styles.brand}>
					<Brand />
				</div>
				<div className={styles.menu} data-open={menuContext.isOpen}>
					<Menu />
				</div>
				<div className={styles.settings}>
					<Settings />
				</div>
			</nav>
		</>
	);
};
export default Navigation;
