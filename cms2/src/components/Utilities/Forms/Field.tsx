import { FormEventHandler } from "react";

interface iInputField {
	field: any;
	props: any;
}

const InputField = ({ field, ...props }) => {
	return (
		<div>
			<label htmlFor={field.name}>{props.label}</label>
			<input
				id={field.name}
				name={field.name}
				type={props.type}
				{...field}
				{...props}
			/>
		</div>
	);
};

export default InputField;
