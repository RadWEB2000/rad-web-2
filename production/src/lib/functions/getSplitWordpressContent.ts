type tGetSplitWordpressContentResult = {
	beforeContent: string;
	afterContent: string;
};

type tGetSplitWordpressContent = {
	content: string;
};

export default function getSplitWordpressContent({
	content,
}: tGetSplitWordpressContent): tGetSplitWordpressContentResult {
	const splitPoint: string = "<!--more-->";
	let beforeContent: string = "";
	let afterContent: string = "";

	const contentParts = content.split(splitPoint);

	if (contentParts.length === 1) {
		beforeContent = content;
		afterContent = "";
	} else {
		beforeContent = contentParts[0];
		afterContent = contentParts[1];
	}

	return { beforeContent, afterContent };
}
