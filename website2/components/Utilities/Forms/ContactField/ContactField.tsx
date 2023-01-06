import { IntContactField } from "./interface";
import styles from "./ContactField.module.scss";
import { ReactElement } from "react";
const ContactField = ({
	id,
	label,
	max,
	min,
	name,
	pattern,
	placeholder,
	type = "text",
	variant,
}: IntContactField): ReactElement | null => {
	if (variant === "field") {
		return (
			<div className={styles.wrapper}>
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
			<div className={styles.wrapper}>
				<textarea id={id} name={name} placeholder={placeholder} required />
				<label htmlFor={name}>{label}</label>
			</div>
		);
	} else return null;
};
export default ContactField;
