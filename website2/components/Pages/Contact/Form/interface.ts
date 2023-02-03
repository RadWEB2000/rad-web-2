interface IntField {
	label: string;
	placeholder: string;
}

export interface IntForm {
	fields: {
		fullname: IntField;
		email: IntField;
		phone: IntField;
		subject: IntField;
		message: IntField;
	};
	button: string;
	rodo: string;
	title: string;
}
