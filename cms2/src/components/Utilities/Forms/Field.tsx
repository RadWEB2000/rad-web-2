import { FormEventHandler } from "react";

interface iInputField {
	field: {
		name: string;
		onBlur?: FormEventHandler;
		onChange?: FormEventHandler;
		value?: string;
	};
	label: string;
	props: any;
	type?: "text" | "password";
}

const InputField = ({ field, label, type = "text", ...props }: iInputField) => {
	return (
		<div>
			<label htmlFor={field.name}>{label}</label>
			<input name={field.name} {...props} type={type} />
		</div>
	);
};
export default InputField;
