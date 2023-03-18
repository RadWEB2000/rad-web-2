import React, { useEffect, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";

export const TextEditor = ({ initialValue, onChange }) => {
	const [content, setContent] = useState(initialValue);

	useEffect(() => {
		setContent(initialValue);
	}, [initialValue]);

	const handleEditorChange = (content, editor) => {
		setContent(content);
		onChange(content);
	};

	return (
		<div style={{ width: "100rem", margin: "auto" }}>
			<Editor
				apiKey="artffja362mp9svwdmbbc3so6su77retx9kgtlnhmjukfynj"
				value={content}
				init={{
					height: 500,
					menubar: true,
					plugins: [],
					toolbar: "",
					toolbar_mode: "sliding",
				}}
				onEditorChange={handleEditorChange}
			/>
		</div>
	);
};
