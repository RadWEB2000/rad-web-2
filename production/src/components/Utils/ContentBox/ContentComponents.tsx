import Image from "next/image";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import stackoverflowDark from "react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark";
import styles from "@default/components/Utils/ContentBox/Content.module.scss";

interface iContentComponents {
	[tagName: string]: React.ComponentType<any>;
}

export const ContentComponents: iContentComponents = {
	p: (props: any) => {
		return <p className={styles.p} {...props} />;
	},
	code: (props: any) => {
		if (props.class) {
			const lang = props.class.split("-")[1];
			return (
				<div className={styles.code}>
					<SyntaxHighlighter
						language={lang}
						style={stackoverflowDark}
						showInlineLineNumbers={true}
						wrapLines={true}
					>
						{props.children}
					</SyntaxHighlighter>
				</div>
			);
		}
	},
	ul: (props: any) => {
		return <ul className={styles.ul} {...props} />;
	},
	ol: (props: any) => {
		return <ol className={styles.ol} {...props} />;
	},
	li: (props: any) => {
		return <li className={styles.li} {...props} />;
	},
	h1: (props: any) => {
		return <h2 className={styles.h2} {...props} />;
	},
	h2: (props: any) => {
		return <h2 className={styles.h2} {...props} />;
	},
	h3: (props: any) => {
		return <h3 className={styles.h3} {...props} />;
	},
	h4: (props: any) => {
		return <h4 className={styles.h4} {...props} />;
	},
	h5: (props: any) => {
		return <h5 className={styles.h5} {...props} />;
	},
	h6: (props: any) => {
		return <h6 className={styles.h6} {...props} />;
	},
	b: (props: any) => {
		return <b className={styles.b} {...props} />;
	},
	strong: (props: any) => {
		return <strong className={styles.strong} {...props} />;
	},
	i: (props: any) => {
		return <i className={styles.i} {...props} />;
	},
	em: (props: any) => {
		return <em className={styles.em} {...props} />;
	},
	a: ({ href, children }: { href: string; children: string[] }) => {
		return (
			<Link className={styles.link} href={href}>
				{children.map((item: string, index: number) => item)}
			</Link>
		);
	},
	img: ({ alt, src }: { alt: string; src: string }) => {
		return (
			<figure className={styles.image}>
				<Image
					alt={alt}
					fill
					src={src}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={alt}
					quality={50}
				/>
			</figure>
		);
	},
	blockquote: (props: any) => {
		return <blockquote className={styles.blockquote} {...props} />;
	},
};
