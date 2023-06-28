import { ContactForm } from "@default/src/components/Page/ContactPage/ContactForm/ContactForm";
import {
	ContactAboutUsCard,
	iContactAboutUsCard,
} from "../../Cards/AboutUs/ContactAboutUsCard/ContactAboutUsCard";
import { iSubmitButton } from "../../Buttons/SubmitButton/SubmitButton";
import styles from "./ContactPageWrapper.module.scss";

interface iContactPageWrapper {
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
	persons: {
		email: {
			name: string;
			value: string;
			url: string;
		};
		phone: {
			name: string;
			value: string;
			url: string;
		};
		fullname: string;
		image: string;
		uri: string;
		jobs: string;
	}[];
}

export const ContactPageWrapper = ({
	button,
	fields,
	persons,
}: iContactPageWrapper) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.persons}>
				{persons.reverse().map(({ fullname, image, email, phone, uri }) => {
					return (
						<ContactAboutUsCard
							contact={{
								mail: {
									label: email.name,
									url: email.url,
								},
								phone: {
									label: phone.name,
									url: phone.url,
								},
							}}
							fullname={fullname}
							image={{
								alt: fullname,
								src: image,
								title: fullname,
							}}
							key={fullname}
							uri={uri}
						/>
					);
				})}
			</div>
			<div className={styles.form}>
				<ContactForm button={button} fields={fields} />
			</div>
		</div>
	);
};
