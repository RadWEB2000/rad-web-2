import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import CodeTool from "@editorjs/code";
import ImageTool from "@editorjs/image";
import ListTool from "@editorjs/list";
import TableTool from "@editorjs/table";

export const TextEditor = () => {
	const [editor, setEditor] = useState(null);

	const handleEditorLoad = () => {
		const newEditor = new EditorJS({
			holder: "editor",
			tools: {
				code: CodeTool,
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: "/api/image", // endpoint for image upload
						},
					},
				},
				list: ListTool,
				table: TableTool,
			},
		});

		setEditor(newEditor);
	};

	const handleSave = async () => {
		const outputData = await editor.save();
		console.log(outputData);
	};
	console.log(editor);
	return (
		<div>
			<div id="editor" />
			<button onClick={handleSave}>Save</button>
		</div>
	);
};
