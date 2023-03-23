import styles from "./Field.module.scss";
import { ReactElement } from "react";

interface iField {
	id: string;
	label: string;
	max?: number;
	min?: number;
	name: string;
	pattern?: "[0-9]{9}" | "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}";
	placeholder: string;
	type?: "text" | "email" | "tel";
	typeField?: "contact" | "newsletter";
	variant?: "field" | "textarea";
}

const Field = ({
	id,
	label,
	max,
	min,
	name,
	pattern,
	placeholder,
	type = "text",
	typeField = "contact",
	variant = "field",
}: iField): ReactElement | null => {
	if (typeField === "contact") {
		if (variant === "field") {
			return (
				<div className={styles.wrapper__contact}>
					{pattern ? (
						<input
							id={id}
							max={max}
							min={min}
							name={name}
							pattern={pattern}
							placeholder={placeholder}
							required
							type={type}
						/>
					) : (
						<input
							id={id}
							max={max}
							min={min}
							name={name}
							placeholder={placeholder}
							required
							type={type}
						/>
					)}
					<label htmlFor={name}>{label}</label>
				</div>
			);
		} else if (variant === "textarea") {
			return (
				<div className={styles.wrapper__contact}>
					<textarea
						id={id}
						maxLength={350}
						name={name}
						placeholder={placeholder}
						required
					/>
					<label htmlFor={name}>{label}</label>
				</div>
			);
		} else return null;
	} else if (typeField === "newsletter") return null;
	else return null;
};
export default Field;
