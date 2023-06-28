import { MDXRemote } from "next-mdx-remote";
import styles from "./ArticlePageWrapper.module.scss";
import { useEffect, useRef, useState } from "react";
import { TableOfContents } from "../../TableOfContents/TableOfContents";

interface iArticlePageWrapper {
	children: any;
	tableOfContents?: string;
}

export const ArticlePageWrapper = ({
	children,
	tableOfContents,
}: iArticlePageWrapper) => {
	const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (contentRef.current) {
			const h2Elements = Array.from(contentRef.current.querySelectorAll("h2"));
			const updatedHeadings = h2Elements.map((element: HTMLElement) => ({
				id: element.id,
				text: element.textContent || "",
			}));
			setHeadings(updatedHeadings);
		}
	}, []);
	return (
		<div className={styles.wrapper}>
			<aside className={styles.table}>
				{tableOfContents && headings && (
					<TableOfContents headings={headings} title={tableOfContents} />
				)}
			</aside>
			<main className={styles.content} ref={contentRef}>
				{children}
			</main>
		</div>
	);
};
