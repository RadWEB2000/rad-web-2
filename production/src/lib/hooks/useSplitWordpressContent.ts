"use client";

import { useEffect, useState } from "react";

type tUpdateContent = {
	beforeContent: string;
	afterContent: string;
};

type tUseSplitWordpressContent = {
	content: string;
};

export default function useSplitWordpressContent({
	content,
}: tUseSplitWordpressContent) {
	const splitPoint: string = "<!--more-->";
	const [state, updateContent] = useState<tUpdateContent>({
		beforeContent: "",
		afterContent: "",
	});

	const contentParts = content.split(splitPoint);
	useEffect(() => {
		if (contentParts.length === 1) {
			updateContent({
				beforeContent: content,
				afterContent: "",
			});
		} else {
			updateContent({
				beforeContent: contentParts[0],
				afterContent: contentParts[1],
			});
		}
	}, [content]);

	return { ...state };
}
