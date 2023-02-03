import ContactField from "../../../Utilities/Forms/ContactField/ContactField";
import styles from "./Form.module.scss";
import SubmitButton from "../../../Utilities/Buttons/SubmitButton/SubmitButton";
import Terms from "../Terms/Terms";
import { RiSendPlaneLine } from "react-icons/ri";
import { IntForm } from "./interface";
const Form = ({ fields, button, rodo, title }: IntForm) => {
	const { fullname, email, phone, subject, message } = fields;
	return (
		<div className={styles.wrapper}>
			<h2>{title}</h2>
			<form action="" autoComplete="off">
				<div>
					<ContactField
						id="fullname"
						label={fullname.label}
						name="fullname"
						placeholder={fullname.placeholder}
						variant="field"
					/>
					<ContactField
						id="email"
						label={email.label}
						name="email"
						placeholder={email.placeholder}
						type="email"
						variant="field"
					/>
					<ContactField
						id="phone"
						label={phone.label}
						name="phone"
						placeholder={phone.placeholder}
						type="tel"
						variant="field"
					/>
					<ContactField
						id="subject"
						label={subject.label}
						name="subject"
						placeholder={subject.placeholder}
						variant="field"
					/>
					<ContactField
						id="message"
						label={message.label}
						name="message"
						placeholder={message.placeholder}
						variant="textarea"
					/>
				</div>
				<Terms content={rodo} />
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
