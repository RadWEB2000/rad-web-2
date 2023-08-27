"use client";
import { CustomComponents } from "@default/components/Page/PostPage/Content/CustomComponents/CustomComponents";
import ReactHtmlParser, { processNodes } from "react-html-parser";
import styles from "@default/components/Page/PostPage/Content/Content.module.scss";

type tContent = {
	content: string;
};

export default function Content({ content }: tContent) {
	const transform = (node: any, index: any) => {
		if (node.type === "tag" && CustomComponents[node.name]) {
			const Component = CustomComponents[node.name];
			return (
				<Component key={index} {...node.attribs}>
					{processNodes(node.children, transform)}
				</Component>
			);
		}
	};
	return (
		<div className={styles.wrapper}>
			{ReactHtmlParser(content, { transform })}
		</div>
	);
}
