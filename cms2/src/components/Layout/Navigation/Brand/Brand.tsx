import styles from "./Brand.module.scss";
import { ReactElement } from "react";
interface iBrand {
	title: string;
}

const Brand = ({ title }: iBrand): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<h1>{title}</h1>
		</div>
	);
};

export default Brand;
