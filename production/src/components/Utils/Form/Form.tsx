"use client";

import Field, { tField } from "@default/components/Utils/Form/Field/Field";
import styles from "@default/components/Utils/Form/Form.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

interface iForm {
	button?: string;
	content?: string;
	fields: tField[];
	title: string;
}

export default function Form({ button, content, fields, title }: iForm) {
	return (
		<div className={styles.wrapper}>
			<h2 dangerouslySetInnerHTML={{ __html: title }} />
			{content && <p dangerouslySetInnerHTML={{ __html: content }} />}
			<form>
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
