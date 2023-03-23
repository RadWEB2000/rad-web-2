import emailjs from "@emailjs/browser";
import Field from "../../../Utilities/Form/Field/Field";
import styles from "./Form.module.scss";
import SubmitButton from "../../../Utilities/Buttons/SubmitButton/SubmitButton";
import Terms from "../Terms/Terms";
import { IntForm } from "./interface";
import { RiSendPlaneLine } from "react-icons/ri";
import { useRef } from "react";
const Form = ({ fields, button, rodo, title }: IntForm) => {
	const { fullname, email, phone, subject, message } = fields;

	const form: any = useRef();

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
					<Field
						id="fullname"
						label={fullname.label}
						name="fullname"
						placeholder={fullname.placeholder}
						variant="field"
					/>
					<Field
						id="email"
						label={email.label}
						name="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}"
						placeholder={email.placeholder}
						type="email"
						variant="field"
					/>
					<Field
						id="phone"
						label={phone.label}
						name="phone"
						pattern="[0-9]{9}"
						placeholder={phone.placeholder}
						type="tel"
						variant="field"
					/>
					<Field
						id="subject"
						label={subject.label}
						max={30}
						min={5}
						name="subject"
						placeholder={subject.placeholder}
						variant="field"
					/>
					<Field
						id="message"
						label={message.label}
						name="message"
						placeholder={message.placeholder}
						variant="textarea"
					/>
				</div>
				{/* <Terms content={rodo} /> */}
				<div>
					<SubmitButton
						content={button}
						icon={<RiSendPlaneLine />}
						isValid={true}
					/>
				</div>
			</form>
		</div>
	);
};
export default Form;
