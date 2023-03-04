import { ReactElement } from "react";

export interface IntButtonPrimary {
	path: string;
	title: string | ReactElement;
	variant: "primary" | "secondary" | "tertiary";
}
