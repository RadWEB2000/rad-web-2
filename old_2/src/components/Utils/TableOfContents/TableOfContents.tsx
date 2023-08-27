import Link from "next/link";
import styles from "./TableOfContents.module.scss";
import { useRouter } from "next/router";

interface iTableOfContents {
	headings: {
		id: string;
		text: string;
	}[];
	title: string;
}

export const TableOfContents = ({ headings, title }: iTableOfContents) => {
	const getUri = useRouter().asPath.split("#")[1];
	console.log(getUri);

	return (
		<div className={styles.wrapper}>
			<h4>{title}</h4>
			<ul>
				{headings.map(({ id, text }) => {
					return (
						<li data-active={id === getUri} className={styles.element} key={id}>
							<Link href={`#${id}`} rel="noindex follow">
								{text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
