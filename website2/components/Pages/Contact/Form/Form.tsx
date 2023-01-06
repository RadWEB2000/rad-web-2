import ContactField from "../../../Utilities/Forms/ContactField/ContactField";
import SubmitButton from "../../../Utilities/Buttons/SubmitButton/SubmitButton";
import { contact } from "../../../../data/pages/contact";
import { RiSendPlaneLine } from "react-icons/ri";
import Terms from "../Terms/Terms";
const Form = () => {
	const { fullname, email, phone, subject, message } =
		contact.pl.main.form.fields;
	return (
		<div>
			<h2>Formularz kontaktowy</h2>
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
				<Terms content={contact.pl.main.form.rodo} />
				<div>
					<SubmitButton
						content={contact.pl.main.form.button}
						icon={<RiSendPlaneLine />}
						isValid={true}
					/>
				</div>
			</form>
		</div>
	);
};
export default Form;
