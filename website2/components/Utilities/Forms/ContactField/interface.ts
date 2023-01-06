export interface IntContactField {
	id: string;
	label: string;
	max?: number;
	min?: number;
	name: string;
	pattern?: string;
	placeholder: string;
	type?: "text" | "email" | "tel";
	variant: "field" | "textarea";
}
