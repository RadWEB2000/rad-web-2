import BreadcrumbElement from "../BreadcrumbElement/BreadcrumbElement";
import styles from "./Breadcrumb.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { IntBreadcrumb } from "./interface";
import { ReactElement } from "react";
const Breadcrumb = ({ breadcrumbs }: IntBreadcrumb): ReactElement => {
	return (
		<ul className={styles.wrapper}>
			{breadcrumbs.map(({ path, title }) => (
				<li key={title}>
					<span>
						<AiOutlineRight />
					</span>
					<BreadcrumbElement path={path} title={title} />
				</li>
			))}
		</ul>
	);
};
export default Breadcrumb;
