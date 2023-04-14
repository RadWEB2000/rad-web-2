import { EditorState } from "prosemirror-state";

import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import styles from "./Editor.module.scss";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export const Editor = () => {
	const [value, setValue] = useState<string>("**Hello world!!!**");
	return (
		<div className={styles.editor}>
			<MDEditor
				value={value}
				onChange={(e: any) => {
					setValue(e);
				}}
			/>
		</div>
	);
};
