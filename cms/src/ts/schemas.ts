import { object, string } from "yup";

export const schLogin = object({
	login: string().required(),
	password: string().required(),
});
