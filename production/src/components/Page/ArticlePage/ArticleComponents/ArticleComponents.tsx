import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./ArticleComponents.module.scss";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const slugify = (text: string): string => {
	const slug = text
		.toLowerCase()
		.replace(/ś/g, "s")
		.replace(/ć/g, "c")
		.replace(/ż/g, "z")
		.replace(/ź/g, "z")
		.replace(/ó/g, "o")
		.replace(/ł/g, "l")
		.replace(/ę/g, "e")
		.replace(/ą/g, "a")
		.replace(/[^\w\s]/g, "")
		.replace(/\s+/g, "-");

	return slug;
};

export const ArticleComponents = {
	h2: (props: any): ReactElement => (
		<header>
			<h2 className={styles.h2} id={slugify(props.children)} {...props} />
		</header>
	),
	h3: (props: any): ReactElement => (
		<h3 className={styles.h3} id={slugify(props.children)} {...props} />
	),
	h4: (props: any): ReactElement => <h4 className={styles.h4} {...props} />,
	p: (props: any): ReactElement => {
		return <p className={styles.p} {...props} />;
	},
	table: ({ children }: { children: any }): ReactElement => {
		return <table className={styles.table}>{children}</table>;
	},
	img: ({ alt, src }: { alt: string; src: string }): ReactElement => (
		<div className={styles.img}>
			<figure>
				<Image
					alt={alt}
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					src={src}
					title={alt}
				/>
			</figure>
		</div>
	),
	b: (props: any): ReactElement => <b className={styles.b} {...props} />,
	i: (props: any): ReactElement => <i className={styles.i} {...props} />,
	em: (props: any): ReactElement => <em className={styles.em} {...props} />,
	strong: (props: any): ReactElement => (
		<strong className={styles.strong} {...props} />
	),
	ul: (props: any): ReactElement => <ul className={styles.ul} {...props} />,
	ol: (props: any): ReactElement => <ol className={styles.ol} {...props} />,
	li: (props: any): ReactElement => <li className={styles.li} {...props} />,
	a: ({ children, href }: { children: string; href: string }) => (
		<Link href={href} legacyBehavior rel="index follow">
			<a className={styles.a}>{children}</a>
		</Link>
	),
	code: ({
		children,
		className,
	}: {
		children: any;
		className: string;
	}): ReactElement => {
		const lang = className.replace("language-", "");
		return (
			<div className={styles.code}>
				<SyntaxHighlighter
					language={lang}
					style={duotoneDark}
					CodeTag={"code"}
					showInlineLineNumbers
					showLineNumbers
					PreTag={"pre"}
					wrapLines={true}
					wrapLongLines={true}
				>
					{children.trim()}
				</SyntaxHighlighter>
			</div>
		);
	},
};
