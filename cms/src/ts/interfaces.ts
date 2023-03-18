import { tFullname, tUserRole } from "./types";

export interface iLogin {
	login: string;
	password: string;
}

export interface iUser extends iLogin {
	email: string;
	role: tUserRole;
	fullname: tFullname;
}
