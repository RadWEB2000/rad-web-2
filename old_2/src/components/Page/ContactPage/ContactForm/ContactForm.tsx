import { page } from "@default/content/pl/pages/kontakt";
import {
	SubmitButton,
	iSubmitButton,
} from "@default/src/components/Utils/Buttons/SubmitButton/SubmitButton";
import { ContactField } from "@default/src/components/Utils/Forms/ContactField/ContactField";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alerts } from "@default/src/components/Utils/Alerts/Alerts";
import { AnimatePresence } from "framer-motion";

interface iAlert {
	information: string;
	variant: "none" | "success" | "error";
	visible?: boolean;
}

interface iContactForm {
	button: iSubmitButton;
	fields: {
		label: string;
		id: string;
		max?: number;
		min?: number;
		name: string;
		pattern?: string;
		placeholder: string;
		required?: boolean;
		type?: "text" | "email" | "tel";
		variant: "input" | "textarea";
	}[];
}

export const ContactForm = ({ button, fields }: iContactForm) => {
	const form: any = useRef();
	const [alert, setAlert] = useState<iAlert>({
		information: "",
		variant: "success",
		visible: false,
	});
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
					setAlert({
						information: "Sukces",
						variant: "success",
						visible: true,
					});
					setTimeout(() => {
						setAlert({
							information: "",
							variant: "none",
							visible: false,
						});
					}, 3500);
				},
				(error) => {
					console.log(error.text);
					setAlert({
						information: "Błąd",
						variant: "error",
						visible: true,
					});
					setTimeout(() => {
						setAlert({
							information: "",
							variant: "none",
							visible: false,
						});
					}, 3500);
				}
			);
	};
	return (
		<>
			<form ref={form} onSubmit={sendEmail}>
				{fields.map(
					({
						id,
						label,
						max,
						min,
						name,
						pattern,
						placeholder,
						type,
						required,
						variant,
					}) => {
						if (variant === "input") {
							return (
								<ContactField
									handle={() => {}}
									key={label}
									input={{
										id: id,
										label: label,
										name: name,
										max: max,
										min: min,
										pattern: pattern,
										placeholder: placeholder,
										required: required,
										type: type,
									}}
									variant="input"
								/>
							);
						} else if (variant === "textarea") {
							return (
								<ContactField
									handle={() => {}}
									key={label}
									textarea={{
										id: id,
										label: label,
										name: name,
										placeholder: placeholder,
										required: required,
									}}
									variant="textarea"
								/>
							);
						} else return null;
					}
				)}
				<SubmitButton label={button.label} />
			</form>
			{alert.visible && (
				<AnimatePresence>
					<Alerts
						information={alert.information}
						variant={alert.variant}
						visible={alert.visible}
					/>
				</AnimatePresence>
			)}
		</>
	);
};
