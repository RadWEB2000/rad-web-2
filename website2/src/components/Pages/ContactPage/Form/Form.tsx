import emailjs from "@emailjs/browser";
import Field from "../../../Utilities/Form/Field/Field";
import styles from "./Form.module.scss";
import SubmitButton from "../../../Utilities/Buttons/SubmitButton/SubmitButton";
import Terms from "../Terms/Terms";
import { useRef, useState } from "react";
import { iFormField } from "./../../../../../content/pages/contactpage";

interface iForm {
	fields: {
		fullname: iFormField;
		email: iFormField;
		phone: iFormField;
		subject: iFormField;
		message: iFormField;
	};
	button: string;
	rodo: string;
	title: string;
}

const Form = ({ fields, button, rodo, title }: iForm) => {
	const form: any = useRef();
	const [isRodoChecked, setosRodoChecked] = useState(false);
	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_lbhu0es",
				"template_tzm9fde",
				form.current,
				"ySuO0dO8DnPVxHUPs"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<form action="" autoComplete="off" ref={form} onSubmit={sendEmail}>
				<div>
					{Object.values(fields).map(
						(
							{
								id,
								isTextarea,
								label,
								max,
								min,
								name,
								pattern,
								placeholder,
								type,
								required,
							},
							index
						) => (
							<>
								{!isTextarea ? (
									<Field
										id={`${id}-${index}-field`}
										label={label}
										max={max}
										min={min}
										pattern={pattern}
										name={name}
										type={type}
										placeholder={placeholder}
										variant="field"
									/>
								) : (
									<Field
										id={`${id}-${index} -textarea`}
										label={label}
										name={name}
										placeholder={placeholder}
										variant="textarea"
									/>
								)}
							</>
						)
					)}
				</div>
				<Terms
					content={rodo}
					handle={() => setosRodoChecked(!isRodoChecked)}
					value={isRodoChecked}
				/>
				<div>
					<SubmitButton content={button} isValid={isRodoChecked} />
				</div>
			</form>
		</div>
	);
};
export default Form;
