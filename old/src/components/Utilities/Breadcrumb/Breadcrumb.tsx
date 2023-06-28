import Link from "next/link";
import styles from "./Breadcrumb.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { ReactElement } from "react";
import { useRouter } from "next/router";

interface iElement {
	path: string;
	title: string;
}

interface iBreadcrumb {
	breadcrumb: iElement[];
}

const Element = ({ path, title }: iElement): ReactElement => {
	const { locale } = useRouter();
	return (
		<li className={styles.element}>
			<span>
				<AiOutlineRight />
			</span>
			<Link href={path} hrefLang={locale} legacyBehavior rel="index follow">
				<a>{title}</a>
			</Link>
		</li>
	);
};

const Breadcrumb = ({ breadcrumb }: iBreadcrumb): ReactElement => {
	return (
		<ul className={styles.wrapper}>
			{breadcrumb.map(({ path, title }) => (
				<Element key={`${path} - ${title}`} path={path} title={title} />
			))}
		</ul>
	);
};

export default Breadcrumb;
