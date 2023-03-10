import { MouseEventHandler } from "react";
export interface IntItem {
	expandClose?: MouseEventHandler;
	expandHandle?: MouseEventHandler;
	path: string;
	title: string;
	variant: "expand" | "main" | "submenu";
}
