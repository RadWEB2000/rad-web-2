import Link from "next/link";
import styles from "./BreadcrumbElement.module.scss";
import { ReactElement } from "react";
import { IntBreadcrumbElement } from "./interface";
const BreadcrumbElement = ({
	path,
	title,
}: IntBreadcrumbElement): ReactElement => {
	return (
		<Link href={path} legacyBehavior rel="index follow">
			<a className={styles.wrapper}>{title}</a>
		</Link>
	);
};
export default BreadcrumbElement;
