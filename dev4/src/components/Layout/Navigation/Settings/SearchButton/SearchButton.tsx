import { FaSearch } from "react-icons/fa";
import styles from "l_navigation/Settings/SearchButton/SearchButton.module.scss";
import { motion } from "framer-motion";

export default function SearchButton() {
	return (
		<motion.button className={styles.wrapper} whileTap={{ scale: 0.72 }}>
			<FaSearch />
		</motion.button>
	);
}
