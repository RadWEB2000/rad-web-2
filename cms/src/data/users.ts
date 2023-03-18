import { iUser } from "../ts/interfaces";

export const users: iUser[] = [
	{
		fullname: {
			firstname: "Radosław",
			lastname: "Adamczyk",
		},
		role: "admin",
		login: "adamczyk",
		email: "radoslaw.adamczyk2000@gmail.com",
		password: "wpolgram",
	},
	{
		fullname: {
			firstname: "Radosław",
			lastname: "Bukowiecki",
		},
		login: "filip_bukowiecki",
		role: "editor",
		email: "radoslaw.adamczyk2000@gmail.com",
		password: "wpolgram1",
	},
	{
		fullname: {
			firstname: "Radosław",
			lastname: "Paluch",
		},
		login: "admin",
		role: "subscriber",
		email: "radoslaw.adamczyk2000@gmail.com",
		password: "admin",
	},
];
