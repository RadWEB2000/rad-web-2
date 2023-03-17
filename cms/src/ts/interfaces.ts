import { tFullname } from "./types";

export interface iLogin {
	email?: string;
	login: string;
	password: string;
}

export interface iUser extends iLogin {
	email: string;
	fullname: tFullname;
}
