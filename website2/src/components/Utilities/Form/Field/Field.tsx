import styles from "./Field.module.scss";
import { ReactElement } from "react";
import { iFormField } from "../../../../../content/pages/contactpage";

interface iField extends iFormField {
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
