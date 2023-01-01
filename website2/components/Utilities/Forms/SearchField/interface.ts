import { Dispatch, SetStateAction } from "react";
export interface IntSearchField {
	handle: Dispatch<SetStateAction<string>>;
	placeholder: "Szukaj" | "Szukaj..." | "Search" | string;
}
