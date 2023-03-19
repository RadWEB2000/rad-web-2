import React, { useEffect, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import fs from "fs";
let JSDOM, window, document;
if (typeof window === "undefined") {
	JSDOM = require("jsdom").JSDOM;
	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
		pretendToBeVisual: true,
	});
	window = dom.window;
	document = window.document;
}

export const TextEditor = () => {
	const [content, setContent] = useState("");

	return (
		<div style={{ backgroundColor: "#ccc", width: "100rem", margin: "auto" }}>
			<SimpleMDE
				value={content}
				onChange={(e) => setContent(e)}
				style={{
					backgroundColor: "lime",
					height: "100%",
					width: "100%",
				}}
			/>
			;
		</div>
	);
};
