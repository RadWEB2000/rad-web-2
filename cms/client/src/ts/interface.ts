export interface iAccountsTable {
	email: string;
	firstname: string;
	id: number;
	image: string;
	lastname: string;
	password: string;
	phone: string;
	role: "admin" | "editor";
	username: string;
}
