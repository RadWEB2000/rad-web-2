"use client";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import styles from "@default/components/Utils/ContentBox/Content.module.scss";
import { ContentComponents } from "./ContentComponents";

type tContent = {
	content: string;
} & (
	| {
			theme: "section";
			variant: "dark" | "light";
	  }
	| {
			theme: "person" | "article";
	  }
);

export default function ContentBox(props: tContent) {
	const { content, theme } = props;
	const transform = (node: any, index: any) => {
		if (node.type === "tag" && ContentComponents[node.name]) {
			const Component = ContentComponents[node.name];
			return (
				<Component key={index} {...node.attribs}>
					{processNodes(node.children, transform)}
				</Component>
			);
		}
	};

	if (theme !== "section") {
		return (
			<div className={styles.wrapper} data-theme={theme}>
				{ReactHtmlParser(content, { transform })}
			</div>
		);
	} else {
		const { variant } = props;
		return (
			<div className={styles.wrapper} data-theme={theme} data-variant={variant}>
				{ReactHtmlParser(content, { transform })}
			</div>
		);
	}
}
