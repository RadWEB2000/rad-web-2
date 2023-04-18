import styles from "./LoginField.module.scss";
const { wrapper } = styles;
interface iLoginField {
	id: string;
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	type: "password" | "text";
}
export const LoginField = ({
	id,
	label,
	name,
	placeholder,
	required,
	type,
}: iLoginField) => {
	return (
		<div className={wrapper}>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				type={type}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	);
};
