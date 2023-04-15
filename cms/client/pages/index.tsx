import { ButtonLoginSocial } from "@default/src/components/Utilities/Buttons/ButtonLoginSocial/ButtonLoginSocial";
import { Editor } from "@default/src/components/Utilities/Editor/Editor";
import { loginSocial } from "@default/src/data/loginSocial";
import { useState } from "react";

const Page = () => {
	const [editorContent, updateEditorContent] = useState("");
	return (
		<div>
			{loginSocial.map(({ color, icon, name }) => (
				<ButtonLoginSocial color={color} key={name} icon={icon} name={name} />
			))}
			{/* <Editor updateContent={updateEditorContent} /> */}
		</div>
	);
};

export default Page;
