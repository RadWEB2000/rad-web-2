import styles from "@default/components/Utils/Form/Field/Field.module.scss";

export type tField = {
	label: string;
	placeholder: string;
} & (
	| {
			id: "firstname" | "lastname" | "email" | "phone";
			pattern?: string;
			length?: {
				max?: number;
				min?: number;
			};
			type: "text" | "email" | "tel";
	  }
	| {
			id: "message";
	  }
);

export default function Field(props: tField) {
	const { id, label, placeholder } = props;
	if (id !== "message") {
		const { pattern, length, type } = props;
		return (
			<div className={styles.wrapper}>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				<div className={styles.field}>
					<input
						id={id}
						max={length?.max}
						min={length?.min}
						name={id}
						pattern={pattern}
						placeholder={placeholder}
						type={type}
					/>
				</div>
			</div>
		);
	} else if (id === "message") {
		return (
			<div className={styles.wrapper}>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				<div className={styles.field}>
					<textarea id={id} name={id} placeholder={placeholder} />
				</div>
			</div>
		);
	}
}
