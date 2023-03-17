import { object, string } from "yup";

export const sLogin = object({
	login: string().required(),
	password: string().required(),
});
