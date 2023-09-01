"use client";

import Field, { tField } from "@default/components/Utils/Form/Field/Field";
import styles from "@default/components/Utils/Form/Form.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import { FormEvent, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { api, service, template } from "@default/lib/emailjs/config";

interface iForm {
	button?: string;
	content?: string;
	fields: tField[];
	title: string;
}

export default function Form({ button, content, fields, title }: iForm) {
	const formRef = useRef<HTMLFormElement>(null);
	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formRef.current) {
			emailjs.sendForm(service, template, formRef.current, api).then(
				(result: EmailJSResponseStatus) => {
					console.log(result.text);
				},
				(error: EmailJSResponseStatus) => {
					console.log(error.text);
				}
			);
		}
	};

	return (
		<div className={styles.wrapper}>
			<h2 dangerouslySetInnerHTML={{ __html: title }} />
			{content && <p dangerouslySetInnerHTML={{ __html: content }} />}
			<form onSubmit={sendEmail} ref={formRef}>
				{fields.map((item, index) => {
					const { id, label, placeholder } = item;
					if (id !== "message") {
						const { length, pattern, type } = item;
						return (
							<Field
								id={id}
								key={label}
								label={label}
								length={length}
								pattern={pattern}
								placeholder={placeholder}
								type={type}
							/>
						);
					} else {
						return (
							<Field
								id="message"
								key={label}
								label={label}
								placeholder={placeholder}
							/>
						);
					}
				})}
				{button && (
					<ButtonPrimary
						handle={() => console.log("hero")}
						theme="primary"
						label={button}
						variant="button"
					/>
				)}
			</form>
		</div>
	);
}
