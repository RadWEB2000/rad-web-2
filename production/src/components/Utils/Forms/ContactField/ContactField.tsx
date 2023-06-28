import styles from "./ContactField.module.scss";
import { Dispatch, SetStateAction } from "react";

interface iContactField {
	handle: Dispatch<SetStateAction<string>>;
	input?: {
		label: string;
		id: string;
		max?: number;
		min?: number;
		name: string;
		pattern?: string;
		placeholder: string;
		required?: boolean;
		type?: "text" | "email" | "tel";
	};
	textarea?: {
		id: string;
		label: string;
		name: string;
		placeholder: string;
		required?: boolean;
	};
	variant: "input" | "textarea";
}

export const ContactField = ({
	handle,
	input,
	textarea,
	variant,
}: iContactField) => {
	if (input && variant === "input") {
		const { label, id, max, min, name, pattern, placeholder, required, type } =
			input;
		return (
			<div className={styles.input}>
				<label htmlFor={name}>{label}</label>
				<input
					onChange={(e) => handle(e.target.value)}
					id={id}
					max={max}
					min={min}
					name={name}
					pattern={pattern}
					placeholder={placeholder}
					required={required}
					type="text"
				/>
			</div>
		);
	} else if (textarea && variant === "textarea") {
		const { id, label, name, placeholder, required } = textarea;
		return (
			<div className={styles.textarea}>
				<label htmlFor={name}>{label}</label>
				<textarea
					id={id}
					onChange={(e) => handle(e.target.value)}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			</div>
		);
	} else return null;
};
