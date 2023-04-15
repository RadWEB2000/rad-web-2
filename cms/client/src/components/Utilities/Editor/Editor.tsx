import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import "@uiw/react-markdown-preview/markdown.css";
import { commands, EditorContext, ICommand } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";
import {
	Dispatch,
	ReactElement,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import styles from "./Editor.module.scss";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});

export interface iEditor {
	updateContent: Dispatch<SetStateAction<string>>;
}

const PreviewButton = () => {
	const { preview, dispatch } = useContext(EditorContext);
	const click = () => {
		dispatch!({
			preview: preview === "edit" ? "preview" : "edit",
		});
	};
	if (preview === "edit") {
		return (
			<button
				aria-label="Preview Button"
				className="buttonToolbar"
				onClick={click}
			>
				<AiFillEye />
			</button>
		);
	}
	return (
		<button
			aria-label="Preview Button"
			className="buttonToolbar"
			onClick={click}
		>
			<AiFillEyeInvisible />
		</button>
	);
};

const BoldButton = () => {
	return (
		<div className="buttonToolbar">
			<BiBold />
		</div>
	);
};

const boldIcon: ICommand = {
	name: "bold",
	keyCommand: "bold",
	value: "edit",
	icon: <BoldButton />,
};

const codePreview: ICommand = {
	name: "preview",
	keyCommand: "preview",
	value: "preview",
	icon: <PreviewButton />,
};

const Toolbar = () => {
	return (
		<div>
			<BoldButton />
		</div>
	);
};

export const Editor = ({ updateContent }: iEditor): ReactElement => {
	const [value, setValue] = useState<string>("");
	useEffect(() => {
		updateContent(value);
	}, [value]);

	// Context

	document.documentElement.setAttribute("data-color-mode", "light");

	return (
		<div className={styles.editor}>
			<MDEditor
				enableScroll={false}
				height={500}
				value={value}
				preview="edit"
				extraCommands={[codePreview, commands.fullscreen]}
				onChange={(e: any) => {
					setValue(e);
				}}
			/>
		</div>
	);
};
