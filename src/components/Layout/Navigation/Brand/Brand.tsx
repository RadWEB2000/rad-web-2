import Link from "next/link";
import styles from "./Brand.module.scss";
const Brand = () => {
	return (
		<div className={styles.wrapper}>
			<Link href="/">RadWEB</Link>
		</div>
	);
};
export default Brand;
