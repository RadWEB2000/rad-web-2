import styles from "./LoginField.module.scss";
import { UseFormRegister } from "react-hook-form";
const { wrapper } = styles;

interface iLoginField {
	label: string;
	name: string;
	placeholder?: string;
	register: UseFormRegister<any>;
	type?: string;
}
export const LoginField = ({
	label,
	name,
	placeholder = " ",
	register,
	type = "text",
}: iLoginField) => {
	return (
		<div className={wrapper}>
			<input
				id={name}
				placeholder={placeholder}
				type={type}
				{...register(name)}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	);
};
